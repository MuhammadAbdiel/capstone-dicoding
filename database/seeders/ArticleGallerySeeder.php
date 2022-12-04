<?php

namespace Database\Seeders;

use App\Models\ArticleGallery;
use Illuminate\Database\Seeder;

class ArticleGallerySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $articleGallery = [
            [
                'article_id' => 1,
                'image' => 'https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_1234/https://hawaiwaterpark.com/wp-content/uploads/2021/08/peraturan-di-hawai-waterpark.jpeg',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'article_id' => 2,
                'image' => 'https://jtp.id/images/news/20220830092151_Screenshot_833.png',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'article_id' => 3,
                'image' => 'https://malangnightparadise.com/wp-content/uploads/2021/09/taman-dinosaurus.jpeg',
                'created_at' => now(),
                'updated_at' => now()
            ]
        ];

        ArticleGallery::insert($articleGallery);
    }
}
