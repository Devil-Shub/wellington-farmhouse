<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Carbon\Carbon;
use Validator;
use App\User;

class ManagerController extends Controller
{
    /**
     * create manager
     */
    public function createManager(Request $request)
    {
        //validate request
        $validator = Validator::make($request->all(), [
            'first_name' => 'required|string',
            'last_name' => 'required|string',
            'email' => 'required|string|email|unique:users',
            'phone' => 'required',
            'user_image' => 'required',
            'password' => 'required|confirmed'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'message' => 'The given data was invalid.',
                'data' => $validator->errors()
            ], 422);
        }

        try {
            //upload path
            $folderPath = "images/";
            //get base64 image
            $img = $request->user_image;
            //decode base64
            $image_parts = explode(";base64,", $img);
            $image_type_aux = explode("image/", $image_parts[0]);
            $image_type = $image_type_aux[1];
            $image_base64 = base64_decode($image_parts[1]);
            $file = $folderPath . uniqid() . '. '.$image_type;
            
            //check if directory exist if not create one
            $path = public_path().'/images';
            if (!file_exists($path)) {
                mkdir($path, 0777, true);
            }
            //upload image
            file_put_contents($file, $image_base64);

            //create new user
            $user = new User([
                'first_name' => $request->first_name,
                'last_name' => $request->last_name,
                'email' => $request->email,
                'role_id' => $request->role_id,
                'phone' => $request->phone,
                'user_image' => $file,
                'password' => bcrypt($request->password)
            ]);
            $user->save();
            //return success response
            return response()->json([
                'status' => true,
                'message' => 'Successfully created Manager!',
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

    /**
     * update manager
     */
    public function updateManager(Request $request)
    {
        //validate request
        $validator = Validator::make($request->all(), [
            'first_name' => 'required|string',
            'last_name' => 'required|string',
            'email' => 'required|string|email|unique:users,email,'.$request->manager_id,
            'phone' => 'required',
            'password' => 'confirmed'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'message' => 'The given data was invalid.',
                'data' => $validator->errors()
            ], 422);
        }

        try {
            //gert manager details
            $managerDetails = User::whereId($request->manager_id)->first();
            
            //if admin changes profile image
            if($request->user_image != null && $request->user_image != '') {
                //upload path
                $folderPath = "images/";
                //get base64 image
                $img = $request->user_image;
                //decode base64
                $image_parts = explode(";base64,", $img);
                $image_type_aux = explode("image/", $image_parts[0]);
                $image_type = $image_type_aux[1];
                $image_base64 = base64_decode($image_parts[1]);
                $file = $folderPath . uniqid() . '. '.$image_type;
                
                //check if directory exist if not create one
                $path = public_path().'/images';
                if (!file_exists($path)) {
                    mkdir($path, 0777, true);
                }
                //upload image
                file_put_contents($file, $image_base64);

                $managerDetails->user_image = $file;
            }
            //if password request submitted
            if($request->password != '' && $request->password != null) {
                $managerDetails->password = bcrypt($request->password);
            }

            //create new user
            $managerDetails->first_name = $request->first_name;
            $managerDetails->last_name = $request->last_name;
            $managerDetails->email = $request->email;
            $managerDetails->phone = $request->phone;
            
            $managerDetails->save();
            //return success response
            return response()->json([
                'status' => true,
                'message' => 'Manager details updated Successfully!',
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

    /**
     * get manager details
     */
    public function getManager(Request $request)
    {
        return response()->json([
            'status' => true,
            'message' => 'Manager Details',
            'data' => User::whereId($request->manager_id)->first()
        ], 200);

    }

    /**
     * delete manager
     */
    public function deleteManager(Request $request)
    {
        try {
            User::whereId($request->manager_id)->delete();

            return response()->json([
                'status' => true,
                'message' => 'Manager deleted Successfully',
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
