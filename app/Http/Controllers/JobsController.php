<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;
use Validator;
use App\User;
use App\Vehicle;
use App\VehicleService;
use App\VehicleInsurance;

class JobsController extends Controller
{
    /**
     * get customers managers
     */
    public function getCustomerManager(Request $request) {
        return response()->json([
            'status' => true,
            'message' => 'Manager Details',
            'data' => User::with("manager.farms")->whereCreatedBy($request->customer_id)->get()
        ], 200);
    }

    /**
     * get service time slots
     */
    public function getServiceSlots(Request $request) {
        return response()->json([
            'status' => true,
            'message' => 'Manager Details',
            'data' => User::with("manager.farms")->whereCreatedBy($request->customer_id)->get()
        ], 200);
    }
}
