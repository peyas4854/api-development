<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ProductResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        //return parent::toArray($request);

        return [
            'id' => $this->id,
            'name' => $this->name,
            'description' => $this->detail,
            'price' => $this->price,
            'stock' => $this->stock,
            'discount' => $this->discount,
            'created_by'=>$this->user_id,
            'reviews'=>ReviewResource::collection($this->reviews),
            //'created_at' => $this->created_at->format('d/m/Y'),
            //'updated_at' => $this->updated_at->diffForHumans(),

        ];
    }
}
