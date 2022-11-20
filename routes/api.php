<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ArticleController;
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

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

Route::get('articles', [ArticleController::class, 'index']);
Route::get('articles/{article}', [ArticleController::class, 'show']);

Route::group(['prefix' => 'admin', 'namespace' => 'Admin'], function () {
  Route::post('/register', [AdminAuthController::class, 'register']);
  Route::post('/login', [AdminAuthController::class, 'login']);

  Route::middleware(['auth:sanctum', 'admin'])->group(function () {
    Route::get('/user', [AdminAuthController::class, 'getUserLoggedIn']);

    Route::post('/logout', [AdminAuthController::class, 'logout']);
  });
});

Route::middleware(['auth:sanctum', 'admin'])->group(function () {
  Route::resource('articles', ArticleController::class)->except(['index', 'create', 'show', 'edit']);
});

Route::middleware('auth:sanctum')->group(function () {
  Route::get('/user', [AuthController::class, 'getUserLoggedIn']);

  Route::post('/logout', [AuthController::class, 'logout']);
});
