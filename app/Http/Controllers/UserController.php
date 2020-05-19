<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Resources\UserResource;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\API\BaseController as BaseController;

class UserController extends BaseController
{
    public function getAdmin(){
        $id= auth::user()->id;
        $user=User::find($id);

        return $this->sendResponse(new UserResource($user),'chg');
    }
        public function updateAdmin(Request $request){
        $id= auth::user()->id;
        if($request->image){

                $explode= explode(',',$request->image);
                //dd($explode);

                $decoded = base64_decode($explode[1]);

            if(Str::contains($explode[0], 'jpeg')){
            $extension = 'jpeg';
            }else if (Str::contains($explode[0], 'png')){
                $extension ='png';
                }
                $fileName = Str::random(20).'.'.$extension;
                //dd($fileName);
                $path =public_path().'/img/'. $fileName;
                //dd($path);
                file_put_contents($path,$decoded);

                $user=[
                'name'=>$request->name,
                'email'=>$request->email,
                'image'=> $fileName
                ];
    }else{
            $user=[
            'name'=>$request->name,
            'email'=>$request->email,
            ];
    }

            $data= User::updateData($id,$user);

            if($data){
            return $this->sendResponse($data,'Profile Updated Successfully.');
            }else{
            return $this->sendError([],'Something Went Wrong!.');
            }


    }

}
