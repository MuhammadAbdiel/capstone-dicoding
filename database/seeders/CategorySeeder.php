<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $category = [
            [
                'name' => 'Technology',
                'created_at' => now(),
                'updated_at' => now(),
            ]
        ];

        Category::insert($category);
    }
}
