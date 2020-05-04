<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

/* Route::get('/', function () {
    return view('welcome');
}); */

Auth::routes();
Route::resource('products', 'ProductController');
Route::group(['prefix'=>'products'],function(){
    Route::apiresource('/{product}/reviews', 'ReviewController');

});
Route::get('/', 'HomeController@index')->name('home');
Route::get('/{any}', 'HomeController@index')->where('any','.*');
//Route::get('/{any}/{any}', 'HomeController@index')->name('home');

