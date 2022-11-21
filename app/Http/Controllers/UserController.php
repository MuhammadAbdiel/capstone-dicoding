<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Destination;
use Illuminate\Http\Request;
use App\Http\Resources\UserResource;
use App\Models\Wishlist;
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

    public function wishlist(Destination $destination)
    {
        $userLogin = auth()->user();

        $wishlist = false;
        $userWishlist = Wishlist::where('user_id', $userLogin->id)->where('destination_id', $destination->id)->first();

        if (empty($userWishlist)) {
            Wishlist::create([
                'user_id' => $userLogin->id,
                'destination_id' => $destination->id,
            ]);

            $wishlist = true;
        } else {
            $userWishlist->delete();
        }

        return response()->json([
            'message' => 'success',
            'wishlist' => $wishlist,
        ]);
    }
}
