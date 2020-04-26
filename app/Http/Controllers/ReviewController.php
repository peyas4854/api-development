<?php

namespace App\Http\Controllers;

use App\Model\Review;
use App\Model\Product;
use App\Model\BaseModel;
use Illuminate\Http\Request;
use App\Http\Resources\ReviewResource;
use App\Http\Controllers\API\BaseController;

class ReviewController extends BaseController
{

    public function __construct()
    {
        //$this->middleware('auth:api');
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Product $product)
    {
        return $this->sendResponse(
        ReviewResource::collection($product->reviews),
        'Review retrived successfully'
         );
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
    public function store(Product $product,Request $request)
    {
        $this->validate($request,[
            'customer'=>'required',
            'review'=>'required',
            'star'=>'required|integer|between:1,5',
        ]);
        $review=[
            'product_id'=>$product->id,
            'customer'=>$request->customer,
            'review'=>$request->review,
            'star'=>$request->star,
             ];

            /* store method in base model*/
            $data =Review::store($review);

            if($data){
                return $this->sendResponse(new ReviewResource($data),'Review Store Successfully.');
            }else{
                return $this->sendError([],'Something Went Wrong!.');
            }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Model\Review  $review
     * @return \Illuminate\Http\Response
     */
    public function show(Product $product,Review $review)
    {

        return $this->sendResponse(new ReviewResource($review),'Review retrived successfully');
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Model\Review  $review
     * @return \Illuminate\Http\Response
     */
    public function edit(Review $review)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Model\Review  $review
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request,Product $product, Review $review)
    {

        /*  validation make by validate class*/
        $this->validate($request,[
            'customer'=>'required',
            'review'=>'required',
            'star'=>'required|integer|between:1,5',
        ]);
        /* product_id get by Product $product & insert by relation. */
        $review->update([
            'customer'=>$request->customer,
            'review'=>$request->review,
            'star'=>$request->star,
             ]);

            if($review){
                return $this->sendResponse(new ReviewResource($review),'Review Updated Successfully.');
            }else{
                return $this->sendError([],'Something Went Wrong!.');
            }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Model\Review  $review
     * @return \Illuminate\Http\Response
     */
    public function destroy(Product $product,Review $review)
    {

        $review->delete();
        return $this->sendResponse([],'Review deleted successfully');
    }
}
