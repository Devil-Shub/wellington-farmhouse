<?php

return [
    'roles' => [
        'Admin' => 1,
        'Admin_Manager' => 2,
        'Driver' => 3,
        'Customer' => 4,
        'Customer_Manager' => 5,
        'Company' => 6,
        'Company_Manager' => 7
    ],
    'vehicle_type' => [
        'truck' => 1,
        'skidsteer' => 2
    ],
    'payment_methods' => [
        'stripe' => 1
    ],
    'payment_status' => [
        'succeeded' => 'succeeded'
    ],
    'payment_status_reverse' => [
        'succeeded' => 1
    ],
    'job_status' => [
        'open' => 0,
        'close' => 1
    ],
    'repeating_job' => [
        'true' => 1,
        'false' => 0
    ],
    'payment_history' => [
        'pending' => 0,
        'complete' => 1
    ],
];
