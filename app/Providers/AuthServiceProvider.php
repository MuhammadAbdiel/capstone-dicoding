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

        // Gate user
        Gate::define('index-user', function ($user) {
            return $user->role == 'admin';
        });
        Gate::define('show-user', function ($user) {
            return $user->role == 'admin';
        });

        // Gate Destination
        Gate::define('create-destination', function ($user) {
            return $user->role == 'admin';
        });
        Gate::define('update-destination', function ($user) {
            return $user->role == 'admin';
        });
        Gate::define('delete-destination', function ($user) {
            return $user->role == 'admin';
        });

        // Gate Destination Gallery
        Gate::define('index-destination-gallery', function ($user) {
            return $user->role == 'admin';
        });
        Gate::define('create-destination-gallery', function ($user) {
            return $user->role == 'admin';
        });
        Gate::define('show-destination-gallery', function ($user) {
            return $user->role == 'admin';
        });
        Gate::define('delete-destination-gallery', function ($user) {
            return $user->role == 'admin';
        });

        // Gate Article Gallery
        Gate::define('index-article-gallery', function ($user) {
            return $user->role == 'admin';
        });
        Gate::define('create-article-gallery', function ($user) {
            return $user->role == 'admin';
        });
        Gate::define('show-article-gallery', function ($user) {
            return $user->role == 'admin';
        });
        Gate::define('delete-article-gallery', function ($user) {
            return $user->role == 'admin';
        });

        // Gate Transaction
        Gate::define('index-transaction', function ($user) {
            return $user->role == 'admin';
        });
        Gate::define('show-transaction', function ($user) {
            return $user->role == 'admin';
        });
        Gate::define('update-transaction', function ($user) {
            return $user->role == 'admin';
        });

        // Gate Comment
        Gate::define('index-comment', function ($user) {
            return $user->role == 'admin';
        });
        Gate::define('show-comment', function ($user) {
            return $user->role == 'admin';
        });
        Gate::define('delete-comment', function ($user) {
            return $user->role == 'admin';
        });
    }
}
