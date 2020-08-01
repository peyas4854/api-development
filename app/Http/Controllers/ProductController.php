<?php

namespace App\Http\Controllers;
use App\Model\Product;
use App\Model\BaseModel;
use Illuminate\Http\Request;
use App\Http\Requests\ProductRequest;
use App\Http\Resources\ProductResource;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\API\BaseController as BaseController;
use Symfony\Component\HttpFoundation\Response;


class ProductController extends BaseController
{
    public function __construct()
    {

        //$this->middleware('auth');

    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

        //for access use route in web.php
        //dd(auth::user()->name);

        $product = product::all();
        return $this->sendResponse(ProductResource::collection($product),'Product Retrived Successfully');

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
    public function store(ProductRequest $request)
    {
        /* validation make by custom request class*/
         $product=[
            'user_id'=>$request->user_id,
            'name'=>$request->name,
            'detail'=>$request->detail,
            'price'=>$request->price,
            'stock'=>$request->stock,
            'discount'=>$request->discount,
         ];

        $data =Product::store($product);

        if($data){
            return $this->sendResponse([],'Product Store Successfully.');
        }else{
            return $this->sendError([],'Something Went Wrong!.');
        }

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Model\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function show(Product $product)
    {
        dd($product);
        return $this->sendResponse(new ProductResource($product),'Product Show successfully');
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Model\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function edit(Product $product)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Model\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function update(ProductRequest $request, Product $product)
    {

        /* validation use ProductRequest */
        $product->update([
            'user_id'=>$request->user_id,
            'name'=>$request->name,
            'detail'=>$request->detail,
            'price'=>$request->price,
            'stock'=>$request->stock,
            'discount'=>$request->discount,
        ]);

        if($product){
        return $this->sendResponse(new ProductResource($product),'Product Updated Successfully');
        }else{
        return $this->sendError([],'Something Went Wrong!');
        }

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Model\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function destroy(Product $product)
    {
        $product->delete();
        return $this->sendResponse([],'Product Deleted Successfully');

    }
}
