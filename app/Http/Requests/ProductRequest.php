<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ProductRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'user_id'=>'required',
            'name'=>'required|max:255|unique:Products',
            'detail'=>'required',
            'price'=>'required|max:4',
            'stock'=>'required|max:4',
            'discount'=>'required|max:2',
        ];
    }
}
