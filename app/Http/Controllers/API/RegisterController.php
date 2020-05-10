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


public function index(Request $request)
    {

        if(!auth::check() && $request->path() !='login'){
        return redirect('/login');
        }
        if(!auth::check() && $request->path() =='login'){
            return view('home');
        }
        //you are already loggen in
        $user= auth::user();
        if( $user->userType =='User'){
                return redirect('/login');

//dd('user');
       }
        if( $request->path() =='login'){
                return redirect('/');

//dd('login route go');
        }
         return view('home');


    }

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
        $this->validate($request,[
            'email'=>'required|Email',
            'password'=>'required',
        ]);
        $credentials = [
            'email' => $request['email'],
            'password' => $request['password'],
        ];
      if( Auth::attempt($credentials)){
        $user = auth::user();
//dd($user);
        // if($user->userType == 'User'){
        // Auth::logout();
        // return $this->sendError('Invalid Credential!',['error'=>'Unauthorised']);
        // }

          $token =  $user->createToken('MyApp')->accessToken;
          return $this->returnWithToken($token,'User Login successfully.');
      }else{
          return $this->sendError('Invalid Email And Password!',['error'=>'Unauthorised']);
      }
    }
    public function returnWithToken($token,$msg){
         $data=array(
            'user'=>auth()->user(),
            'token'=>$token
        );
        return  $this->sendResponse($data, $msg);
    }
    public function logout(){
        Auth::logout();
     return redirect('/login');

        //return response(200);
    }
}
