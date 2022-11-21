<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Resources\UserResource;
use Illuminate\Support\Facades\Gate;
use Symfony\Component\HttpFoundation\Response;

class UserController extends Controller
{
    public function index()
    {
        abort_if(Gate::denies('index-user'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return new UserResource(User::with(['articles', 'wishlists', 'transactions'])->latest()->get());
    }

    public function show(User $user)
    {
        abort_if(Gate::denies('show-user'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return new UserResource($user->load(['articles', 'wishlists', 'transactions']));
    }
}
