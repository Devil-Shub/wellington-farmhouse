<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;
use Validator;
use App\User;
use App\Driver;

class DriverController extends Controller
{
    /**
     * create driver
     */
    public function createDriver(Request $request)
    {
        //validate request
        $validator = Validator::make($request->all(), [
            'driver_name' => 'required|string',
            'email' => 'required|string|email|unique:users',
            'driver_licence' => 'required|string',
            'expiry_date' => 'required',
            'salary_type' => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'message' => 'The given data was invalid.',
                'data' => $validator->errors()
            ], 422);
        }

        try {
            //use of db transactions
            DB::beginTransaction();
            //random string for new password
            $newPassword = Str::random();

            //create new user
            $user = new User([
                'first_name' => $request->driver_name,
                'email' => $request->email,
                'role_id' => config('constant.roles.Truck_Driver'),
                'user_image' => $request->email,
                'is_confirmed' => 1,
                'is_active' => 1,
                'password' => bcrypt($newPassword)
            ]);

            if($user->save()) {
                //add driver details
                $driverDetails = new Driver([
                    'user_id' => $user->id,
                    'driver_licence' => $request->driver_licence,
                    'expiry_date' => $request->expiry_date,
                    'salary_type' => $request->salary_type,
                    'document' => $request->document
                ]);

                $driverDetails->save();
                //send email for new email and password
                // $this->_confirmPassword($user, $newPassword);
            }
            //commit all transactions now
            DB::commit();
            //return success response
            return response()->json([
                'status' => true,
                'message' => 'Successfully created Driver!',
                'data' => []
            ], 200);
        } catch (\Exception $e) {
            //rollback transactions
            DB::rollBack();
            //make log of errors
            Log::error(json_encode($e->getMessage()));
            //return with error
            return response()->json([
                'status' => false,
                'message' => 'Internal server error!',
                'data' => []
            ], 500);
        }
    }

    /**
     * edit driver
     */
    public function editDriver(Request $request)
    {
        //validate request
        $validator = Validator::make($request->all(), [
            'driver_name' => 'required|string',
            'email' => 'required|string|email|unique:users,email,'.$request->driver_id,
            'driver_licence' => 'required|string',
            'expiry_date' => 'required',
            'salary_type' => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'message' => 'The given data was invalid.',
                'data' => $validator->errors()
            ], 422);
        }

        try {
            //use of db transactions
            DB::beginTransaction();
            //update user table
            User::whereId($request->driver_id)->update([
                'first_name' => $request->driver_name,
                'email' => $request->email,
                'user_image' => $request->user_image
            ]);
            //update driver table
            Driver::whereUserId($request->driver_id)->update([
                'driver_licence' => $request->driver_licence,
                'expiry_date' => $request->expiry_date,
                'salary_type' => $request->salary_type,
                'document' => $request->document
            ]);

            //commit all transactions now
            DB::commit();
            //return success response
            return response()->json([
                'status' => true,
                'message' => 'Driver details edit successfully.',
                'data' => []
            ], 200);
        } catch (\Exception $e) {
            //rollback transactions
            DB::rollBack();
            //make log of errors
            Log::error(json_encode($e->getMessage()));
            //return with error
            return response()->json([
                'status' => false,
                'message' => 'Internal server error!',
                'data' => []
            ], 500);
        }
    }

    /**
     * list drivers
     */
    public function listDrivers() {
        return response()->json([
            'status' => true,
            'message' => 'Drivers Details',
            'data' => Driver::with("user")->get()
        ], 200);    
    }

    /**
     * get driver
     */
    public function getDriver(Request $request) {
        return response()->json([
            'status' => true,
            'message' => 'Driver Details',
            'data' => Driver::with("user")->whereUserId($request->driver_id)->first()
        ], 200);    
    }

    /**
     * delete driver
     */
    public function deleteDriver(Request $request) {
        try {
            Driver::whereId($request->driver_id)->delete();

            return response()->json([
                'status' => true,
                'message' => 'Driver deleted Successfully',
                'data' => []
            ], 200);
        } catch (\Exception $e) {
            //make log of errors
            Log::error(json_encode($e->getMessage()));
            //return with error
            return response()->json([
                'status' => false,
                'message' => 'Internal server error!',
                'data' => []
            ], 500);
        }    
    }

}
