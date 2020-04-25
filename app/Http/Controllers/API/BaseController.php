<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class BaseController extends Controller
{
    public function sendResponse($result,$msg){
      $response=[
          'success' =>true,
          'message'=>$msg,
          'data'=>$result
      ];
      return response()->json($response,200);
    }
    public function sendError($error,$errorMessage=[]){
        $response=[
            'success' =>false,
            'message'=>$error,
        ];
        if(!empty($errorMessage)){
           $response['data']=$errorMessage;
        }
        return response()->json($response, 404);
    }
}
