<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ArticleController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\DestinationController;
use App\Http\Controllers\Admin\AuthController as AdminAuthController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route Auth User
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

// Route get Articles
Route::get('articles', [ArticleController::class, 'index']);
Route::get('articles/{article}', [ArticleController::class, 'show']);

// Route get Categories
Route::get('categories', [CategoryController::class, 'index']);

// Route get Destinations
Route::get('destinations', [DestinationController::class, 'index']);
Route::get('destinations/{destination}', [DestinationController::class, 'show']);

Route::group(['prefix' => 'admin', 'namespace' => 'Admin'], function () {

  // Route Auth Admin
  Route::post('/register', [AdminAuthController::class, 'register']);
  Route::post('/login', [AdminAuthController::class, 'login']);

  Route::middleware(['auth:sanctum', 'admin'])->group(function () {

    // Route get Admin Login
    Route::get('/user', [AdminAuthController::class, 'getUserLoggedIn']);

    Route::post('/logout', [AdminAuthController::class, 'logout']);
  });
});

Route::middleware(['auth:sanctum', 'admin'])->group(function () {

  // Route resource Articles
  Route::resource('articles', ArticleController::class)->except(['index', 'create', 'show', 'edit']);

  // Route resource Categories
  Route::resource('categories', CategoryController::class)->except(['index', 'create', 'edit']);

  // Route get Users
  Route::get('users', [UserController::class, 'index']);
  Route::get('users/{user}', [UserController::class, 'show']);

  // Route resource Destinations
  Route::resource('destinations', DestinationController::class)->except(['index', 'create', 'show', 'edit']);
});

Route::middleware('auth:sanctum')->group(function () {

  // Route get User Login
  Route::get('/user', [AuthController::class, 'getUserLoggedIn']);

  // Route put wishlists
  Route::put('/wishlists/{destination}', [UserController::class, 'wishlist']);

  Route::post('/logout', [AuthController::class, 'logout']);
});
