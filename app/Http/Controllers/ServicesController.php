<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\DB;
use App\Service;
use App\ServicesTimeSlot;

class ServicesController extends Controller
{
    /**
     * create service
     */
    public function createService(Request $request)
    {
        //validate request
        $validator = Validator::make($request->all(), [
            'service_name' => 'required|string',
            'price' => 'required',
            'description' => 'required'
            
            // 'time_slots' => 'required',
            // 'time_slots' => [
            //     'required',
            //     Rule::in(['slot_type', 'slot_start', 'slot_end']),
            // ],
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
            // DB::beginTransaction();

            //create new user
            $service = new Service([
                'service_name' => $request->service_name,
                'price' => $request->price,
                'description' => $request->description
            ]);
            //save service
            $service->save();
            // if ($service->save()) {
            //     foreach ($request->time_slots as $slots) {
            //         $serviceSlots = new ServicesTimeSlot([
            //             'services_id' => $service->id,
            //             'slot_type' => $slots['slot_type'],
            //             'slot_start' => $slots['slot_start'],
            //             'slot_end' => $slots['slot_end']
            //         ]);

            //         //save service slots
            //         $serviceSlots->save();
            //     }
            // }

            //commit all transactions now
            // DB::commit();

            //return success response
            return response()->json([
                'status' => true,
                'message' => 'Service created successfully.',
                'data' => []
            ], 200);
        } catch (\Exception $e) {
            //rollback transactions
            // DB::rollBack();
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
     * edit service
     */
    public function editService(Request $request)
    {
        //validate request
        $validator = Validator::make($request->all(), [
            'service_name' => 'required|string',
            'price' => 'required',
            'description' => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'message' => 'The given data was invalid.',
                'data' => $validator->errors()
            ], 422);
        }

        try {
            //create new user
            Service::whereId($request->service_id)->update([
                'service_name' => $request->service_name,
                'price' => $request->price,
                'description' => $request->description
            ]);

            //return success response
            return response()->json([
                'status' => true,
                'message' => 'Service edit successfully.',
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
     * edit service time slot
     */
    public function editTimeSlot(Request $request)
    {
        //validate request
        $validator = Validator::make($request->all(), [
            'slot_type' => 'required|string',
            'slot_start' => 'required',
            'slot_end' => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'message' => 'The given data was invalid.',
                'data' => $validator->errors()
            ], 422);
        }

        try {
            //create new user
            ServicesTimeSlot::whereId($request->time_slot_id)->update([
                'slot_type' => $request->slot_type,
                'slot_start' => $request->slot_start,
                'slot_end' => $request->slot_end
            ]);

            //return success response
            return response()->json([
                'status' => true,
                'message' => 'Service time slot updated successfully.',
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
