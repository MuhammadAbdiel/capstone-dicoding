<?php

namespace App\Providers;

use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Gate;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     *
     * @var array<class-string, class-string>
     */
    protected $policies = [
        // 'App\Models\Model' => 'App\Policies\ModelPolicy',
    ];

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerPolicies();

        // Gate Articles
        Gate::define('create-article', function ($user) {
            return $user->role == 'admin';
        });
        Gate::define('update-article', function ($user) {
            return $user->role == 'admin';
        });
        Gate::define('delete-article', function ($user) {
            return $user->role == 'admin';
        });

        // Gate Categories
        Gate::define('create-category', function ($user) {
            return $user->role == 'admin';
        });
        Gate::define('show-category', function ($user) {
            return $user->role == 'admin';
        });
        Gate::define('update-category', function ($user) {
            return $user->role == 'admin';
        });
        Gate::define('delete-category', function ($user) {
            return $user->role == 'admin';
        });
    }
}