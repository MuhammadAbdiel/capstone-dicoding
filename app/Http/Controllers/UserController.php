<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Article;
use App\Models\Comment;
use App\Models\Wishlist;
use App\Models\Destination;
use Illuminate\Http\Request;
use App\Http\Resources\UserResource;
use Illuminate\Support\Facades\Gate;
use Symfony\Component\HttpFoundation\Response;

class UserController extends Controller
{
    public function index()
    {
        abort_if(Gate::denies('index-user'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return new UserResource(User::with(['wishlists', 'transactions', 'comments'])->latest()->get());
    }

    public function show(User $user)
    {
        abort_if(Gate::denies('show-user'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return new UserResource($user->load(['wishlists', 'transactions', 'comments']));
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

    public function comment(Article $article, Request $request)
    {
        $userLogin = auth()->user();

        $comment = Comment::create([
            'user_id' => $userLogin->id,
            'article_id' => $article->id,
            'content' => $request->content,
        ]);

        return response()->json([
            'message' => 'success',
            'comment' => $comment,
        ]);
    }

    public function getWishlists()
    {
        $userLogin = auth()->user();

        $wishlists = Wishlist::where('user_id', $userLogin->id)->get();

        return response()->json([
            'message' => 'success',
            'wishlists' => $wishlists->load(['user', 'destination']),
        ]);
    }
}
