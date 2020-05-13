<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Carbon;
use App\User;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $addDetails = new User;

        $addDetails->first_name = 'Admin';
        $addDetails->last_name = 'Account';
        $addDetails->email = 'admin@yopmail.com';
        $addDetails->role_id = 1;
        $addDetails->is_confirmed = 1;
        $addDetails->is_active = 1;
        $addDetails->password = bcrypt('admin@123');

        $addDetails->save();
    }
}
