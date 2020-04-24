<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Model\Product;
use App\User;
use Faker\Generator as Faker;

$factory->define(Product::class, function (Faker $faker) {
    return [
        'name'=>$faker->word,
        'user_id'=>function(){
            return user::all()->random();
        },
        'detail'=>$faker->paragraph,
        'price'=>$faker->numberBetween(100,2000),
        'stock'=>$faker->randomDigit,
        'discount'=>$faker->numberBetween(2,30),
    ];
});
