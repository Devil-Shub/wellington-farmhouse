<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
//Auth Routes
// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::group(['prefix' => 'auth'], function () {
    //Auth free routes
    Route::post('login', 'AuthController@login');
    Route::post('signup', 'AuthController@signup');
    Route::get('confirm-email/{decode_code}', 'AuthController@confirmEmail');
    
    //Auth full routes
    Route::group(['middleware' => 'auth:api'], function() {
        Route::get('logout', 'AuthController@logout');
        
        Route::get('user', 'AuthController@user');

        Route::group(['prefix' => 'admin'], function () {
            //update admin profile
            Route::post('edit-profile', 'AuthController@editProfile');

            //manager
            Route::post('create-manager', 'ManagerController@createManager');
            Route::post('update-manager/{manager_id}', 'ManagerController@updateManager');
            Route::get('delete-manager/{manager_id}', 'ManagerController@deleteManager');
            Route::get('get-manager/{manager_id}', 'ManagerController@getManager');

            //services
            Route::post('create-service', 'ServicesController@createService');
        });

    });
});
