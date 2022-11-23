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
                'name' => 'Teknologi',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Hiburan',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Peraturan',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ];

        Category::insert($category);
    }
}
