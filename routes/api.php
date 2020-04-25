<?php


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

/* Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
}); */

Route::post('register', 'API\RegisterController@register');

Route::post('login', 'API\RegisterController@login');



// Route::middleware('auth:api')->group( function () {
//    Route::apiresource('products', 'ProductController');
// });

Route::apiresource('products', 'ProductController');

Route::group(['prefix'=>'products'],function(){
    Route::apiresource('/{product}/reviews', 'ReviewController');

});
