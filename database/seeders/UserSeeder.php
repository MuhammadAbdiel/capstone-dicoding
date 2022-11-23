<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user = [
            [
                'name' => 'Admin 1',
                'username' => 'admin1',
                'email' => 'admin1@email.com',
                'password' => bcrypt('password'),
                'role' => 'admin',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'User 1',
                'username' => 'user1',
                'email' => 'user1@email.com',
                'password' => bcrypt('password'),
                'role' => 'user',
                'created_at' => now(),
                'updated_at' => now(),
            ]
        ];

        User::insert($user);
    }
}
