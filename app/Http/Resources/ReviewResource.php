<?php

namespace App\Http\Resources;

use App\Http\Resources\UserResource;
use Illuminate\Http\Resources\Json\JsonResource;

class ReviewResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'product_id' => $this->product_id,
            //'product_info' => new productResource($this->products),
            //'product' => $this->products,
            'user' => new UserResource($this->user),
            'review' => $this->review,
            'star' => $this->star,
            'created_at' => $this->created_at->diffForHumans(),

        ];
    }
}
