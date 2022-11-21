<?php

namespace Database\Seeders;

use App\Models\Destination;
use Illuminate\Database\Seeder;

class DestinationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $destination = [
            [
                'name' => 'Hawai Waterpark',
                'open_time' => '08:00:00',
                'close_time' => '17:00:00',
                'price' => 100000,
                'rating' => 5.0,
                'location' => 'Kabupaten Malang, Jawa Timur',
                'description' => 'Taman rekreasi air dengan seluncuran warna-warni, kolam ombak & area panjat tebing anak, serta food court.'
            ]
        ];

        Destination::insert($destination);
    }
}
