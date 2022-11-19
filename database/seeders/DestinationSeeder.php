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
                'rating' => 5.0,
                'location' => 'Kabupaten Malang, Jawa Timur',
                'description' => 'Taman rekreasi air dengan seluncuran warna-warni, kolam ombak & area panjat tebing anak, serta food court.'
            ]
        ];

        Destination::insert($destination);
    }
}
