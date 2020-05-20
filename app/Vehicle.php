<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Vehicle extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'created_by', 'vehicle_type', 'company_name', 'truck_number', 'chaase_number', 'insurance_number', 'insurance_date', 'insurance_expiry',
        'document'
    ];

    public function user()
    {
        return $this->belongsTo('App\User');
    }
}
