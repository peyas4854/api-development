<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\API\BaseController as BaseController;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Laravel\Passport\Passport;

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
        $success['token'] =  $user->createToken('MyApp')->accessToken;
        $success['name'] =  $user->name;
        return $this->sendResponse($success, 'User register successfully.');
    }

    public function login(Request $request){
        $credentials = [
            'email' => $request['email'],
            'password' => $request['password'],
        ];
      if( Auth::attempt($credentials)){
        $user = auth::user();
          $success['token'] =  $user->createToken('MyApp')->accessToken;
          $success['name'] =  $user->name;
          return $this->sendResponse($success, 'User Login successfully.');
      }else{
          return $this->sendError('Unauthorised',['error'=>'Unauthorised']);
      }

    }
}
