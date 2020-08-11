<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Carbon;
use Illuminate\Database\Eloquent\Builder;
use App\Job;
use App\User;
use App\Driver;
use App\Vehicle;

class CronController extends Controller
{
    /**
     * assign techs
     */
    public function assignTecs() {
        $getAllJobs = Job::with(
            "customer",
            "manager",
            "farm",
            "service",
            "timeslots",
            "truck",
            "skidsteer",
            "truck_driver",
            "skidsteer_driver"
        )
        ->whereJobStatus(config('constant.job_status.open'))
        // ->whereCreatedAt(Carbon::now())
        ->whereTruckId(null)
        ->whereSkidsteerId(null)
        ->whereTruckDriverId(null)
        ->whereSkidsteerDriverId(null)
        ->get(); 

        foreach($getAllJobs as $jobs) {
            //get truck driver
        $getTruckDriver = User::whereHas('driver', function (Builder $query) {
            $query->whereDriverType(config('constant.driver_type.truck'));
        })
        ->whereDoesntHave('jobTruckDriver', function (Builder $query) {
            $query->whereJobStatus(config('constant.job_status.open'));
        })
        ->whereRoleId(config('constant.roles.Driver'))->first();

        //get skidsteer driver
        $getSkidSteerDriver = User::whereHas('driver', function (Builder $query) {
            $query->whereDriverType(config('constant.driver_type.skid_steer'));
        })
        ->whereDoesntHave('jobSkidsteerDriver', function (Builder $query) {
            $query->whereJobStatus(config('constant.job_status.open'));
        })
        ->whereRoleId(config('constant.roles.Driver'))->first();

        //get truck
        $getTruck = Vehicle::whereDoesntHave('jobTruck', function (Builder $query) {
            $query->whereJobStatus(config('constant.job_status.open'));
        })
        ->whereVehicleType(config('constant.vehicle_type.truck'))->first();

        //get skid steer
        $getSkidSteer = Vehicle::whereDoesntHave('jobSkidsteer', function (Builder $query) {
            $query->whereJobStatus(config('constant.job_status.open'));
        })
        ->whereVehicleType(config('constant.vehicle_type.skidsteer'))->first();
            
            //assign to job 
            $jobs->truck_id = $getTruck != null ? $getTruck->id:null;
            $jobs->skidsteer_id = $getSkidSteer != null ? $getSkidSteer->id:null;
            $jobs->truck_driver_id = $getTruckDriver != null ? $getTruckDriver->user_id:null;
            $jobs->skidsteer_driver_id = $getSkidSteerDriver != null ? $getSkidSteerDriver->user_id:null;

            $jobs->save();
        }
    }
}
