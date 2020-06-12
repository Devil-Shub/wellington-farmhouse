<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;
use Validator;
use Mail;
use App\User;
use App\Service;
use App\TimeSlots;
use App\Job;
use App\CustomerFarm;

class JobsController extends Controller
{

    /**
     * get customers and company
     */
    public function getCustomers() {
        return response()->json([
            'status' => true,
            'message' => 'Manager Details',
            'data' => User::select('id', 'first_name', 'last_name', 'prefix')
                ->whereRoleId(config('constant.roles.Customer'))
                ->orWhere('role_id', config('constant.roles.Company'))
                ->get()
        ], 200);
    }
    /**
     * get farms
     */
    public function getJobFrams(Request $request) {
         return response()->json([
            'status' => true,
            'message' => 'Customer Details',
            'data' => CustomerFarm::where('customer_id', $request->customer_id)->where('manager_id', $request->manager_id)->where('farm_active', '1')->first()
        ], 200);
    }

    /**
     * get service time slots
     */
    public function getServiceSlots(Request $request) {
        $service = Service::whereId($request->service_id)->first();
        //get timeSlots
        $timeSlots = TimeSlots::whereIn('id', json_decode($service->slot_time))->get();

        return response()->json([
            'status' => true,
            'message' => 'Manager Details',
            'data' => $timeSlots
        ], 200);
    }

    /**
     * create job
     */
    public function createJob(Request $request)
    {
        //validate request
        $validator = Validator::make($request->all(), [
            'customer_id' => 'required',
            'manager_id' => 'required',
            'farm_id' => 'required',
            'job_description' => 'required',
            'service_id' => 'required',
            'start_date' => 'required',
            'end_date' => 'required',
            'time_slot_id' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'message' => 'The given data was invalid.',
                'data' => $validator->errors()
            ], 422);
        }

        try {

            //create job
            $job = new Job([
                'customer_id' => $request->customer_id,
                'manager_id' => $request->manager_id,
                'farm_id' => $request->farm_id,
                'job_description' => $request->job_description,
                'service_id' => $request->service_id,
                'services_time_slots_id' => $request->services_time_slots_id,
                'start_date' => $request->start_date,
                'start_time' => $request->start_time,
                'time_slot_id' => $request->time_slot_id
            ]);
            //save job
            if($job->save()) {
                $this->_sendPaymentEmail($request->customer_id, $request->manager_id);
            }

            //return success response
            return response()->json([
                'status' => true,
                'message' => 'Job created successfully.',
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
     * payment email
     */
    public function _sendPaymentEmail($customerId, $managerId)
    {
        $customerDetails = User::whereId($customerId)->first();
        $managerDetails = User::whereId($managerId)->first();

        $customerName = $customerDetails->first_name . ' ' . $customerDetails->last_name;
        $data = array(
            'user' => $customerDetails
        );

        //send to customer
        Mail::send('email_templates.payment_email', $data, function ($message) use ($customerDetails, $customerName) {
            $message->to($customerDetails->email, $customerName)->subject('Job Created');
            $message->from(env('MAIL_USERNAME'), env('MAIL_USERNAME'));
        });

        $managerName = $managerDetails->first_name . ' ' . $managerDetails->last_name;
        $data = array(
            'user' => $managerDetails
        );

        //send to manager
        Mail::send('email_templates.payment_email', $data, function ($message) use ($managerDetails, $managerName) {
            $message->to($managerDetails->email, $managerName)->subject('Job Created');
            $message->from(env('MAIL_USERNAME'), env('MAIL_USERNAME'));
        });
    }
}
