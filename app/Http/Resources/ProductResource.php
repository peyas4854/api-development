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
            'detail' => $this->detail,
            'price' => $this->price,
            'stock' => $this->stock,
            'discount' => $this->discount,
            'created_by' => $this->user->name,
            'user_id' => $this->user->id,
            'total_review' => count($this->reviews),
            'avg_rating' => $this->reviews->count() > 0 ? round($this->reviews->sum('star') / $this->reviews->count()) : 0,
            'reviews' => ReviewResource::collection($this->reviews),
            //'created_at' => $this->created_at->format('d/m/Y'),
            //'updated_at' => $this->updated_at->diffForHumans(),

        ];
    }
}
