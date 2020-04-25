<?php

namespace App\Model;
use App\User;
use App\Model\Review;
use App\Model\BaseModel as BaseModel;
use Illuminate\Database\Eloquent\Model;

class Product extends BaseModel
{

    protected $guarded =[];

    public function reviews(){
        return $this->hasMany(Review::class);
    }
    public function user(){
        return $this->belongsTo(User::class);
    }
}
