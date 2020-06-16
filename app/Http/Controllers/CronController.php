<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Carbon;
use App\Job;
use App\User;

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
        ->get(); 

        // $getTruckDriver = User::with('driver', 'jobTruckDriver')->whereRoleId(config('constant.roles.Driver'))->first();

        // dd($getTruckDriver->toArray());

        // foreach($getAllJobs as $jobs) {
        //     dump($jobs->id);
        // }
    }
}
