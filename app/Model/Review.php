<?php

namespace App\Model;

use App\Model\BaseModel as BaseModel;
use App\Model\Product;
use App\User;
use Illuminate\Database\Eloquent\Model;

class Review extends BaseModel
{
    /*  mass aggienment  */
    protected $guarded = [];
    public function products()
    {
        return $this->belongsTo(Product::class, 'product_id');
    }
 public function user(){
        return $this->belongsTo(User::class);
    }
}
