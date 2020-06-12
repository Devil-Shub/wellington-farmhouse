<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Job extends Model
{
    use SoftDeletes;
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'payment_status', 'job_amount', 'job_weight', 'customer_id', 'manager_id', 'farm_id', 'job_description', 'service_id', 'time_slots_id', 'truck_id',
        'skidsteer_id', 'truck_driver_id', 'skidsteer_driver_id', 'start_date', 'start_time', 'end_date', 'end_time', 'notes_for_techs', 'notes', 'job_images'
    ];
}
