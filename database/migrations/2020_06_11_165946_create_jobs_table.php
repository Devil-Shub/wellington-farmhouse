<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateJobsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('jobs', function (Blueprint $table) {
            $table->id();
            $table->float("job_amount")->nullable();
            $table->float("job_weight")->nullable();
            $table->tinyInteger("payment_status")->default(0)->nullable()->comment("0: pending, 1:complete");

            $table->unsignedBigInteger('customer_id')->nullable();
            $table->foreign('customer_id')->references('id')->on('users');

            $table->unsignedBigInteger('manager_id')->nullable();
            $table->foreign('manager_id')->references('id')->on('users');

            $table->unsignedBigInteger('farm_id')->nullable();
            $table->foreign('farm_id')->references('id')->on('customer_farms');

            $table->string('job_description')->nullable();

            $table->unsignedBigInteger('service_id')->nullable();
            $table->foreign('service_id')->references('id')->on('services');

            $table->unsignedBigInteger('time_slots_id')->nullable();
            $table->foreign('time_slots_id')->references('id')->on('time_slots');

            $table->unsignedBigInteger('truck_id')->nullable();
            $table->foreign('truck_id')->references('id')->on('vehicles');

            $table->unsignedBigInteger('skidsteer_id')->nullable();
            $table->foreign('skidsteer_id')->references('id')->on('vehicles');

            $table->unsignedBigInteger('truck_driver_id')->nullable();
            $table->foreign('truck_driver_id')->references('id')->on('users');

            $table->unsignedBigInteger('skidsteer_driver_id')->nullable();
            $table->foreign('skidsteer_driver_id')->references('id')->on('users');

            $table->date('start_date')->nullable();
            $table->time('start_time')->nullable();

            $table->date('end_date')->nullable();
            $table->time('end_time')->nullable();

            
            $table->longText('notes_for_techs')->nullable();

            $table->longText('notes')->nullable();

            $table->json('job_images')->nullable();

            $table->timestamps();
            $table->softDeletes('deleted_at', 0);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('jobs');
    }
}
