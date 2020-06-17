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
    Route::group(['middleware' => 'auth:api'], function () {
        Route::get('logout', 'AuthController@logout');

        Route::get('user', 'AuthController@user');

        Route::group(['prefix' => 'admin'], function () {
            //update admin profile
            Route::post('edit-profile', 'AuthController@editProfile');
            Route::post('change-password', 'AuthController@changePassword');

            //manager
            Route::post('create-manager', 'ManagerController@createManager');
            Route::post('update-manager/{manager_id}', 'ManagerController@updateManager');
            Route::get('delete-manager/{manager_id}', 'ManagerController@deleteManager');
            Route::get('get-manager/{manager_id}', 'ManagerController@getManager');
            Route::get('list-manager', 'ManagerController@listManager');
            //admin
            Route::get('list-admin', 'ManagerController@listAdmin');
            Route::get('get-admin/{admin_id}', 'ManagerController@getAdmin');

            //services
            Route::post('create-service', 'ServicesController@createService');
            Route::post('edit-service/{service_id}', 'ServicesController@editService');
            Route::post('edit-service-time-slot/{time_slot_id}', 'ServicesController@editTimeSlot');
            Route::get('list-services', 'ServicesController@listServices');
            Route::get('get-service/{service_id}', 'ServicesController@getService');
            Route::delete('delete-service/{service_id}', 'ServicesController@deleteService');
            Route::get('get-timeslots/{slot_type}', 'ServicesController@getTimeSlots');

            //driver
            Route::post('create-driver', 'DriverController@createDriver');
            Route::post('edit-driver/{driver_id}', 'DriverController@editDriver');
            Route::get('list-drivers', 'DriverController@listDrivers');
            Route::get('get-driver/{driver_id}', 'DriverController@getDriver');
            Route::delete('delete-driver/{driver_id}', 'DriverController@deleteDriver');

            //truck
            Route::post('create-vehicle', 'VehicleController@createVehicle');
            Route::post('edit-vehicle/{vehicle_id}', 'VehicleController@editVehicle');
            Route::get('list-vehicle', 'VehicleController@listVehicle');
            Route::get('list-skidsteer', 'VehicleController@listSkidsteer');
            Route::get('get-vehicle/{vehicle_id}', 'VehicleController@getVehicle');
            Route::delete('delete-vehicle/{vehicle_id}', 'VehicleController@deleteVehicle');
            Route::get('get-vehicleservice/{vehicle_id}', 'VehicleController@getVehicleService');
            Route::post('create-vehicleservice', 'VehicleController@createVehicleService');
            Route::post('create-vehicleinsurance', 'VehicleController@createVehicleInsurance');
            Route::get('get-vehicleinsurance/{vehicle_id}', 'VehicleController@getVehicleInsurance');
            Route::get('get-service-details/{service_id}', 'VehicleController@getServiceDetails');
            Route::get('get-insurance-details/{insurance_id}', 'VehicleController@getInsuranceDetails');
            Route::post('save-service-details/{service_id}', 'VehicleController@saveServiceDetails');
            Route::post('save-insurance-details/{insurance_id}', 'VehicleController@saveInsuranceDetails');
            Route::delete('delete-service-details/{service_id}', 'VehicleController@deleteServiceDetails');
            Route::delete('delete-insurance-details/{insurance_id}', 'VehicleController@deleteInsuranceDetails');

            //customer
            Route::post('create-customer', 'CustomerController@createCustomer');
            Route::get('list-customer', 'CustomerController@listCustomer');
            Route::get('get-customer/{customer_id}', 'CustomerController@getCustomer');
            Route::post('update-customer/{customer_id}', 'CustomerController@updateCustomer');
            Route::get('card-list/{customer_id}', 'CustomerController@getAllCard');
            Route::get('record-list/{customer_id}', 'CustomerController@getAllRecords');
            //Route::delete('delete-driver/{driver_id}', 'CustomerController@deleteDriver');

            //jobs
            Route::get('job-customer', 'JobsController@getCustomers');
            Route::get('fetch-job-details/{unique_job_id}', 'JobsController@fetchJobDetails');
            Route::get('job-farms/{customer_id}/{manager_id}', 'JobsController@getJobFrams');
            Route::get('get-service-slots/{service_id}', 'JobsController@getServiceSlots');
            Route::post('create-job', 'JobsController@createJob');
            Route::get('job-list', 'JobsController@getAllJob');
            Route::get('assigned-job-list', 'JobsController@getAssignedJob');
            Route::get('complete-job-list', 'JobsController@getCompleteJob');
            Route::get('open-job-list', 'JobsController@getOpenJob');
            Route::get('repeating-job-list', 'JobsController@getRepeatingJob');
            Route::get('unpaid-job-list', 'JobsController@getUnpaidJob');
            Route::get('single-job/{job_id}', 'JobsController@getSingleJob');

            //accounting
            Route::get('/job-invoices', 'AccountingController@getAllJobInvoices');

            //message
            Route::get('/message', 'MessageController@index')->name('message');
            Route::post('/message', 'MessageController@store')->name('message.store');

            //stripe
            Route::post('stripe-charge', 'PaymentController@stripeCharge');
        });

        //upload image
        Route::post('uploadImage', 'ImageController@uploadImage');
    });
});
