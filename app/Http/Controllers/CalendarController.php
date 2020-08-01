<?php

namespace App\Http\Controllers;

use App\Model\Calendar;
use App\Model\BaseModel;
use Illuminate\Http\Request;
use App\Http\Resources\CalendarResource;
use App\Http\Controllers\API\BaseController as BaseController;
use Symfony\Component\HttpFoundation\Response;
class CalendarController extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
       return CalendarResource::collection(Calendar::latest()->get());
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validate($request, [
            'title' => 'required',
            'start_date' => 'required',
            'end_date' => 'required',
        ]);
        $event = [
            'title' => $request->title,
            'start_date' => $request->start_date,
            'end_date' => $request->end_date,
           
        ];
        /* store method in base model*/
        $data = Calendar::store($event);
        //dd('done');
        if ($data) {
            return $this->sendResponse(new CalendarResource($data), 'Event Store Successfully.');
        } else {
            return $this->sendError([], 'Something Went Wrong!.');
        }
        //dd($request->all());
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Model\Calendar  $calendar
     * @return \Illuminate\Http\Response
     */
    public function show( $id)
    {
        //dd($id);
        $data = Calendar::getOne($id);
       
        return $this->sendResponse(new CalendarResource($data),'');
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Model\Calendar  $calendar
     * @return \Illuminate\Http\Response
     */
    public function edit(Calendar $calendar)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Model\Calendar  $calendar
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $this->validate($request, [
            'title' => 'required',
            'start_date' => 'required',
            'end_date' => 'required',
        ]);
        $event = [
            'title' => $request->title,
            'start_date' => $request->start_date,
            'end_date' => $request->end_date,
        ];
        
        if ($event) {
            Calendar::updateData($id, $event);
            return $this->sendResponse([], 'Event Updated successfully');
        } else {
            return $this->sendError([], 'Something Went Wrong!.');
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Model\Calendar  $calendar
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $data = Calendar::deleteData($id);
        if ($data) {
           
            return $this->sendResponse([], 'Event Delete successfully');
        } else {
            return $this->sendError([], 'Something Went Wrong!.');
        }

    }
}
