<?php

namespace App\Model;

use App\Model\Product;
use Illuminate\Database\Eloquent\Model;
use App\Model\BaseModel as BaseModel;


class Review extends BaseModel
{
   /*  mass aggienment  */
    protected $guarded =[];

    /* relation with product */
    public function products(){
        return $this->belongsTo(Product::class);
    }
}
