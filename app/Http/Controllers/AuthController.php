<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Carbon\Carbon;
use Validator;
use App\User;

class AuthController extends Controller
{
    /**
     * Create user
     *
     * @param  [string] first_name
     * @param  [string] last_name
     * @param  [string] email
     * @param  [string] password
     * @param  [string] password_confirmation
     * @return [string] message
     */
    public function signup(Request $request)
    {
        //validate request
        $validator = Validator::make($request->all(), [
            'first_name' => 'required|string',
            'last_name' => 'required|string',
            'email' => 'required|string|email|unique:users',
            'role_id' => 'required',
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
                'message' => 'Successfully created user!',
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
     * Login user and create token
     *
     * @param  [string] email
     * @param  [string] password
     * @param  [boolean] remember_me
     * @return [string] access_token
     * @return [string] token_type
     * @return [string] expires_at
     */
    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|string|email',
            'password' => 'required|string',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'message' => 'The given data was invalid.',
                'data' => $validator->errors()
            ], 422);
        }

        try {
            $credentials = request(['email', 'password']);
            
            if(!Auth::attempt($credentials))
                return response()->json([
                    'status' => false,
                    'message' => 'Unauthorized',
                    'data' => []
                ], 401);
            $user = $request->user();
            $tokenResult = $user->createToken('Personal Access Token');
            $token = $tokenResult->token;
            // if ($request->remember_me)
            //     $token->expires_at = Carbon::now()->addWeeks(1);
            $token->save();
            return response()->json([
                'status' => true,
                'message' => 'Login Successful',
                'data' => array(
                    'access_token' => $tokenResult->accessToken,
                    'token_type' => 'Bearer',
                    'expires_at' => Carbon::parse(
                        $tokenResult->token->expires_at
                    )->toDateTimeString()
                )
            ]);
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
     * Logout user (Revoke the token)
     *
     * @return [string] message
     */
    public function logout(Request $request)
    {
        $request->user()->token()->revoke();
        return response()->json([
            'status' => true,
            'message' => 'Successfully logged out',
            'data' => []
        ]);
    }

    /**
     * Get the authenticated User
     *
     * @return [json] user object
     */
    public function user(Request $request)
    {
        return response()->json([
            'success' => true,
            'message' => 'User details!',
            'data' => $request->user()
        ]);
    }

    /**
     * Edit Admin Profile
     */
    public function editProfile(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'first_name' => 'required|string',
            'last_name' => 'required|string',
            'email' => 'required|string|email|unique:users,email,'.$request->user()->id,
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
            $loggedInUser = $request->user();
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

                $loggedInUser->user_image = $file;
            }

            $loggedInUser->first_name = $request->first_name;
            $loggedInUser->last_name = $request->last_name;
            $loggedInUser->email = $request->email;
            $loggedInUser->phone = $request->phone;
            $loggedInUser->password = bcrypt($request->password);

            $loggedInUser->save();
            //return success response
            return response()->json([
                'status' => true,
                'message' => 'Information Updated Successfully!',
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
