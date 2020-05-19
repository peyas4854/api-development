<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class BaseModel extends Model
{
    public static function store($data)
    {
        return get_called_class()::create($data);
    }
    public static function updateData($id,$data)
    {
        return get_called_class()::where('id',$id)->update($data);
    }
}
