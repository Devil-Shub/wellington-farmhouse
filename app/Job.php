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
        'customer_id', 'manager_id', 'farm_id', 'job_description', 'service_id', 'services_time_slots_id', 'truck_id', 'skidsteer_id', 'start_date',
        'start_time', 'end_date', 'end_time', 'assigned_techs', 'notes_for_techs', 'notes'
    ];
}
