<?php

namespace App;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;

class User extends Authenticatable
{
    use Notifiable, HasApiTokens;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'first_name', 'last_name', 'email', 'phone', 'user_image', 'role_id', 'is_confirmed', 'is_active', 'provider', 'token', 'password',
        'address', 'city', 'state', 'country', 'zip_code', 'password_changed_at', 'created_by', 'prefix', 'farm_id'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function manager()
    {
        return $this->hasOne('App\ManagerDetail');
    }

    //self relationship
    public function customerManager()
    {
        return $this->hasMany('App\User', 'created_by');
    }

    public function farms()
    {
        return $this->hasOne('App\CustomerFarm', 'customer_id');
    }

    public function farmlist()
    {
        return $this->hasMany('App\CustomerFarm', 'customer_id');
    }

    public function messages()
    {
        return $this->hasMany(Message::class);
    }

    public function driver()
    {
        return $this->hasOne('App\Driver');
    }

    public function jobTruckDriver()
    {
        return $this->hasOne('App\Job', 'truck_driver_id');
    }

    public function jobSkidsteerDriver()
    {
        return $this->hasOne('App\Job', 'skidsteer_driver_id');
    }

    public function employeeSalaries()
    {
        return $this->hasOne('App\EmployeeSalaries', 'user_id');
    }

    public function manager_farms()
    {
        return $this->hasOne('App\CustomerFarm', 'id', 'farm_id');
    }
}
