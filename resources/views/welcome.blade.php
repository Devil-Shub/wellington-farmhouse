<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Wellington</title>
        <link rel="icon" type="image/png" href="{{ asset('images/farm-house.png') }}"/>
        <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900|Material+Icons" rel="stylesheet" type="text/css">
<link rel="stylesheet" href="//cdn.datatables.net/1.10.7/css/jquery.dataTables.min.css">

        <link href="{{ mix('css/app.css') }}" type="text/css" rel="stylesheet" />
        <meta name="csrf-token" value="{{ csrf_token() }}" />
    </head>
    <body>
        <div id="app" class="my-app">
          <example-component></example-component>
        </div>
        <div id="snackbar">
        </div>
	<script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAQEbFYBxoq9qSepomK_1KEM7TxU3vSOyw&libraries=geometry,places"></script>
        <script src="{{ mix('js/app.js') }}" type="text/javascript"></script>
<script src="//code.jquery.com/jquery.js"></script>
 <!-- DataTables -->
<script src="//cdn.datatables.net/1.10.7/js/jquery.dataTables.min.js"></script> 
    </body>
</html>
