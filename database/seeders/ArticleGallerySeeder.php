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
            ]
        ];

        ArticleGallery::insert($articleGallery);
    }
}
