@extends('layouts.app')

@section('content')
<div class="container">
    <h2>Hello {{$name}}</h2>

    <p>Your job created successfully! Click on below link for payment.</p>
    @if($userRoler->role_id == config('constant.roles.Customer') || $userRoler->role_id == config('constant.roles.Customer_Manager'))
        <p><a href="{{$paymentLink}}" target="_blank">Pay Now</a></p>
    @endif    
</div>
@endsection
