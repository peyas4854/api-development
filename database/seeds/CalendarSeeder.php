<?php

use Illuminate\Database\Seeder;

class CalendarSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('calendars')->insert([
           
            [
                'title'=>'first one ',
                'start_date'=>'2020-08-01 09:00:00',
                'end_date'=>'2020-08-01 09:00:00',
                'created_at' => '2020-08-05 06:00:00',
                'updated_at' => '2020-08-05 04:00:00',
            ],
            [
                'title'=>'event two ',
                'start_date'=>'2020-08-05 09:00:00',
                'end_date'=>'2020-08-09 09:00:00',
                'created_at' => '2020-08-05 06:00:00',
                'updated_at' => '2020-08-05 04:00:00',
            ],
        ]);
    }
}
