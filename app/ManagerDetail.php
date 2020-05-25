<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ManagerDetail extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'user_id', 'salary', 'identification_number', 'joining_date', 'releaving_date', 'document'
    ];

    public function user()
    {
        return $this->belongsTo('App\User', 'user_id', 'id');
    }
}