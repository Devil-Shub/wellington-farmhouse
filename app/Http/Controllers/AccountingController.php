<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Validator;
use Mail;
use App\User;
use App\Service;
use App\TimeSlots;
use App\Job;
use App\CustomerFarm;

class AccountingController extends Controller
{
      /**
     * get all jobs invoice
     */
    public function getAllJobInvoices()
    {
        $getAllJobs = Job::with(
            "customer",
            "service"
        )->get();

        return response()->json([
            'status' => true,
            'message' => 'job invoice Details',
            'data' => $getAllJobs
        ], 200);
    }
}
