<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ArticleController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\DestinationController;
use App\Http\Controllers\TransactionController;
use App\Http\Controllers\ArticleGalleryController;
use App\Http\Controllers\DestinationGalleryController;
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

// Route get Comments based on Article ID
Route::get('/comments/{article}', [UserController::class, 'getComments']);

// Prefix admin, namespace Admin
Route::group(['prefix' => 'admin', 'namespace' => 'Admin'], function () {

  // Route Auth Admin
  Route::post('/register', [AdminAuthController::class, 'register']);
  Route::post('/login', [AdminAuthController::class, 'login']);

  // Middleware Admin
  Route::middleware(['auth:sanctum', 'admin'])->group(function () {

    // Route get Admin Login
    Route::get('/user', [AdminAuthController::class, 'getUserLoggedIn']);

    Route::post('/logout', [AdminAuthController::class, 'logout']);
  });
});

// Middleware Admin
Route::middleware(['auth:sanctum', 'admin'])->group(function () {

  // Route resource Articles
  Route::resource('articles', ArticleController::class)->except(['index', 'create', 'show', 'edit']);

  // Route put Article Galleries via Link
  Route::put('galleries/{article}', [ArticleController::class, 'store_image']);

  // Route put Article Galleries via Upload File
  // Route::post('galleries/{article}/upload', [ArticleController::class, 'upload_image']);

  // Route resource Article Galleries
  Route::resource('article_galleries', ArticleGalleryController::class)->except(['create', 'store', 'edit', 'update']);

  // Route resource Categories
  Route::resource('categories', CategoryController::class)->except(['index', 'create', 'edit']);

  // Route get Users
  Route::get('users', [UserController::class, 'index']);
  Route::get('users/{user}', [UserController::class, 'show']);

  // Route resource Destinations
  Route::resource('destinations', DestinationController::class)->except(['index', 'create', 'show', 'edit']);

  // Route put Destination Galleries via Link
  Route::put('galleries/{destination}', [DestinationController::class, 'store_image']);

  // Route resource Destination Galleries
  Route::resource('destination_galleries', DestinationGalleryController::class)->except(['create', 'store', 'edit', 'update']);

  // Route resource Transactions
  Route::resource('transactions', TransactionController::class)->except(['create', 'store', 'edit', 'destroy']);

  // Route resource Comments
  Route::resource('comments', CommentController::class)->except(['create', 'store', 'edit', 'update']);
});

Route::middleware('auth:sanctum')->group(function () {

  // Route get User Login
  Route::get('/user', [AuthController::class, 'getUserLoggedIn']);

  // Route put Update Profile
  Route::put('/user/update', [UserController::class, 'updateProfile']);

  // Route put Change Password
  Route::put('/user/change-password', [UserController::class, 'changePassword']);

  // Route put Wishlists
  Route::put('/wishlists/{destination}', [UserController::class, 'wishlist']);

  // Route get Check Wishlists
  Route::get('/wishlists/{destination}', [UserController::class, 'checkWishlist']);

  // Route put Comments
  Route::put('/comments/{article}', [UserController::class, 'comment']);

  // Route put Orders
  Route::put('/orders/{destination}', [DestinationController::class, 'order']);

  // Route get Data Admin
  Route::get('/admin/data', [UserController::class, 'getDataAdmin']);

  // Route get Wishlists based on User Login
  Route::get('/user/wishlists', [UserController::class, 'getWishlists']);

  // Route get Transactions based on User Login
  Route::get('/user/transactions', [UserController::class, 'getTransactions']);

  Route::post('/logout', [AuthController::class, 'logout']);
});
