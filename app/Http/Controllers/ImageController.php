<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Str;

class ImageController extends Controller
{
    public function managerImage(Request $request){
         if ($request->test != null && $request->test != '') {
            $extension = $request->file('test')->extension();
            $path = Str::random() . '.' . $extension;
            $file = $request->file('test')->storeAs('images', Str::random() . '.' . $extension);
         }
         return $path;
    }
}
