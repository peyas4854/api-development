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


//Auth::routes();
Route::post('/login', 'API\RegisterController@login');
Route::get('/logout', 'API\RegisterController@logout');
Route::get('/admin', 'UserController@getAdmin');

Route::post('/admin/update', 'UserController@updateAdmin');

Route::get('/', 'API\RegisterController@index');



Route::get('/{any}', 'API\RegisterController@index')->where('any','.*');



