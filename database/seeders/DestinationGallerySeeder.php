<?php

namespace Database\Seeders;

use App\Models\DestinationGallery;
use Illuminate\Database\Seeder;

class DestinationGallerySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $destinationGallery = [
            [
                'destination_id' => 1,
                'image' => 'https://dolanyok.com/wp-content/uploads/2019/10/hawai-waterpark-1.jpg',
            ],
            [
                'destination_id' => 1,
                'image' => 'https://i.ytimg.com/vi/CAoEelwIDIY/maxresdefault.jpg',
            ],
            [
                'destination_id' => 1,
                'image' => 'https://awsimages.detik.net.id/community/media/visual/2022/06/07/hawai-waterpark-di-malang-1_169.jpeg?w=1200',
            ]
        ];

        DestinationGallery::insert($destinationGallery);
    }
}
