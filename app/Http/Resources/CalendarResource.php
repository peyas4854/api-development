<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class CalendarResource extends JsonResource
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
            'id'=> $this->id,
            'title' => $this->title,
            'start' => date('Y-m-d', strtotime(str_replace(['.', '/'], '-',  $this->start_date))),
            'end'   => date('Y-m-d', strtotime(str_replace(['.', '/'], '-',  $this->end_date))),
            'color' => '#26c6da',
            'textColor' => '#fff'
        ];
    }
}
