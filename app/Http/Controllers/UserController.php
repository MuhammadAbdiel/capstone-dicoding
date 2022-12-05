<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Article;
use App\Models\Comment;
use App\Models\Wishlist;
use App\Models\Destination;
use App\Models\Transaction;
use Illuminate\Http\Request;
use App\Http\Resources\UserResource;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Hash;
use App\Http\Requests\UpdateProfileRequest;
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
            'comment' => $comment->load(['user', 'article']),
        ]);
    }

    public function getWishlists()
    {
        $userLogin = auth()->user();

        $wishlists = Wishlist::where('user_id', $userLogin->id)->get();

        return response()->json([
            'message' => 'success',
            'wishlists' => $wishlists->load(['user', 'destination.destination_galleries']),
        ]);
    }

    public function getComments(Article $article)
    {
        $articleComments = Comment::where('article_id', $article->id)->get();

        return response()->json([
            'message' => 'success',
            'comments' => $articleComments->load(['user', 'article']),
        ]);
    }

    public function getTransactions()
    {
        $user = auth()->user();

        $transactions = Transaction::where('user_id', $user->id)->get();

        return response()->json([
            'message' => 'success',
            'transactions' => $transactions->load(['user', 'detail_transactions.destination.destination_galleries']),
        ]);
    }

    public function checkWishlist(Destination $destination)
    {
        $userLogin = auth()->user();

        $wishlist = false;
        $userWishlist = Wishlist::where('user_id', $userLogin->id)->where('destination_id', $destination->id)->first();

        if (!empty($userWishlist)) {
            $wishlist = true;
        }

        return response()->json([
            'message' => 'success',
            'wishlist' => $wishlist,
        ]);
    }

    public function updateProfile(UpdateProfileRequest $request)
    {
        $user = User::where('id', auth()->user()->id)->first();

        $user->update($request->validated());

        return (new UserResource($user))->response()->setStatusCode(Response::HTTP_ACCEPTED);
    }

    public function changePassword(Request $request)
    {
        $user = auth()->user();

        $request->validate([
            'old_password' => ['required', 'string', 'min:8'],
            'password' => ['required', 'string', 'min:8'],
            'password_confirmation' => ['required', 'string', 'min:8', 'same:password'],
        ]);

        if (!Hash::check($request->old_password, $user->password)) {
            return response()->json([
                'message' => 'Old password is incorrect!',
            ], 422);
        }

        User::where('id', $user->id)->update([
            'password' => Hash::make($request->password),
        ]);

        return response()->json([
            'message' => 'Password has been changed!',
        ]);
    }

    public function getDataAdmin()
    {
        return new UserResource(User::where('role', 'admin')->first());
    }
}
