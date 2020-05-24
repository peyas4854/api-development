<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Model\Product;
use App\Model\Review;
use App\User;
use Faker\Generator as Faker;

$factory->define(Review::class, function (Faker $faker) {
    return [
        'product_id' => function () {
            return product::all()->random();
        },
        'user_id' => function () {
            return user::all()->random();
        },
        'review' => $faker->paragraph,
        'star' => $faker->numberBetween(1, 5),

    ];
});
