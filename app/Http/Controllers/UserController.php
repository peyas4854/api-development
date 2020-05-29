<?php

namespace App\Http\Controllers;

use App\Http\Controllers\API\BaseController as BaseController;
use App\Http\Resources\UserResource;
use App\Mail\InviteUser;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;

class UserController extends BaseController
{
    public function getAdmin()
    {
        $id = auth::user()->id;
        $user = User::find($id);

        return $this->sendResponse(new UserResource($user), 'chg');
    }
    public function updateAdmin(User $user, Request $request)
    {
        $this->validate($request, [
            'name' => 'required',
            'email' => 'required|Email',
        ]);

        $id = auth::user()->id;
        if ($request->image) {

            $explode = explode(',', $request->image);
            //dd($explode);

            $decoded = base64_decode($explode[1]);

            if (Str::contains($explode[0], 'jpeg')) {
                $extension = 'jpeg';
            } else if (Str::contains($explode[0], 'png')) {
                $extension = 'png';
            }

            $fileName = Str::random(20) . '.' . $extension;
            //dd($fileName);
            $path = public_path() . '/img/' . $fileName;
            //dd($path);
            file_put_contents($path, $decoded);

            $data = [
                'name' => $request->name,
                'email' => $request->email,
                'image' => $fileName,
            ];
        } else {
            $data = [
                'name' => $request->name,
                'email' => $request->email,
            ];
        }

        //$data = User::updateData($id, $user);
        $user->update($data);

        if ($user) {
            return $this->sendResponse($user, 'Profile Updated Successfully.');
        } else {
            return $this->sendError([], 'Something Went Wrong!.');
        }

    }
    public function changePassword(User $user, Request $request)
    {
        $this->validate($request, [
            'password' => 'required|confirmed|min:6',
        ]);
        $user->update([
            'password' => bcrypt($request->password),
        ]);
        if ($user) {
            return $this->sendResponse($user, 'Password Updated Successfully.');
        } else {
            return $this->sendError([], 'Something Went Wrong!.');
        }
    }
    public function getAllUser()
    {

        if (auth::user()->userType == 'Admin') {

            $data = User::orderBy('id', 'ASC')->get();
            return $this->sendResponse($data, 'User Retrived Successfully.');
        }
        return $this->sendResponse([], 'access denied!');
    }
    public function editUser(User $user, Request $request)
    {
        return $this->sendResponse($user, '');
    }
    public function updateUser(User $user, Request $request)
    {

        $this->validate($request, [
            'name' => 'required',
            'email' => 'required|Email',
            'userType' => 'required',
        ]);
        //dd($request->all());
        $user->update([
            'name' => $request->name,
            'email' => $request->email,
            'userType' => $request->userType,

        ]);

        if ($user) {
            return $this->sendResponse($user, 'User Updated successfully');
        } else {
            return $this->sendError([], 'Something Went Wrong!.');
        }
    }
    public function inviteUser(Request $request)
    {
        $this->validate($request, [
            'name' => 'required',
            'email' => 'required|Email',
            'userType' => 'required',
        ]);
        $password = str::random(10);
        $data = [
            'name' => $request->name,
            'email' => $request->email,
            'userType' => $request->userType,
            'password' => bcrypt($password),
        ];
        $emailinfo = [
            'name' => $request->name,
            'email' => $request->email,
            'userType' => $request->userType,
            'password' => $password,

        ];

        $user = User::create($data);
        if ($user) {
            Mail::to($request->email)->send(new InviteUser($emailinfo));
            return $this->sendResponse($user, 'Invite User successfully');
        } else {
            return $this->sendError([], 'Something Went Wrong!.');
        }

    }

}
