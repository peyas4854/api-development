<?php

use App\Model\Product;
use App\Model\Review;
use App\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UsersTableSeeder::class);

        factory(User::class,100)->create();
        factory(product::class,200)->create();
        factory(review::class,100)->create();
    }
}
