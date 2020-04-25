<?php

namespace App\Http\Controllers\API;

use App\User;
use Illuminate\Support\Arr;
use Illuminate\Http\Request;
use Laravel\Passport\Passport;
use App\Http\Resources\UserResource;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use App\Http\Controllers\API\BaseController as BaseController;

class RegisterController extends BaseController
{
    public function register(Request $request){
        $validator=Validator::make($request->all(), [
            'name' => 'required',
            'email' => 'required|email',
            'password' => 'required',
            'c_password' => 'required|same:password',
        ]);
        if($validator->fails()){
            return $this->sendError('validation error', $validator->errors());
        }
        $input = $request->all();
        $input['password'] = bcrypt($input['password']);
        $user = User::create($input);
        $success['name'] =  $user->name;
        $success['token'] =  $user->createToken('MyApp')->accessToken;
        return $this->sendResponse($success, 'User register successfully.');
    }

    public function login(Request $request){
        $credentials = [
            'email' => $request['email'],
            'password' => $request['password'],
        ];
      if( Auth::attempt($credentials)){
        $user = auth::user();
          $token =  $user->createToken('MyApp')->accessToken;
          return $this->returnWithToken($token,'User Login successfully.');
      }else{
          return $this->sendError('Unauthorised',['error'=>'Unauthorised']);
      }
    }
    public function returnWithToken($token,$msg){
         $data=array(
            'user'=>auth()->user()->name,
            'token'=>$token
        );
        return  $this->sendResponse($data, $msg);
    }
}
