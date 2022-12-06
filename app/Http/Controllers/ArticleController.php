<?php

namespace App\Http\Controllers;

use App\Models\Article;
use Illuminate\Http\Request;
use App\Models\ArticleGallery;
use Illuminate\Support\Facades\Gate;
use App\Http\Resources\ArticleResource;
use Illuminate\Support\Facades\Storage;
use App\Http\Requests\StoreArticleRequest;
use App\Http\Requests\UpdateArticleRequest;
use App\Http\Resources\ArticleGalleryResource;
use Symfony\Component\HttpFoundation\Response;
use App\Http\Requests\StoreArticleGalleryRequest;
use Illuminate\Support\Facades\Validator;

class ArticleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return new ArticleResource(Article::with(['category', 'article_galleries', 'comments'])->latest()->get());
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreArticleRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreArticleRequest $request)
    {
        abort_if(Gate::denies('create-article'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $article = Article::create($request->validated());

        return (new ArticleResource($article))->response()->setStatusCode(Response::HTTP_CREATED);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Article  $article
     * @return \Illuminate\Http\Response
     */
    public function show(Article $article)
    {
        return new ArticleResource($article->load(['category', 'article_galleries', 'comments']));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Article  $article
     * @return \Illuminate\Http\Response
     */
    public function edit(Article $article)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateArticleRequest  $request
     * @param  \App\Models\Article  $article
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateArticleRequest $request, Article $article)
    {
        abort_if(Gate::denies('update-article', $article), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $article->update($request->validated());

        return (new ArticleResource($article))->response()->setStatusCode(Response::HTTP_ACCEPTED);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Article  $article
     * @return \Illuminate\Http\Response
     */
    public function destroy(Article $article)
    {
        abort_if(Gate::denies('delete-article', $article), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $article->delete();

        return response(null, Response::HTTP_NO_CONTENT);
    }

    // public function upload_image(Request $request, Article $article)
    // {
    // abort_if(Gate::denies('create-article-gallery', $article), Response::HTTP_FORBIDDEN, '403 Forbidden');

    // $validatedData = $request->validated();
    // $validatedData['article_id'] = $article->id;
    // $validatedData['image'] = $request->file('image')->store('article_galleries');

    // $articleGallery = ArticleGallery::create($validatedData);

    //     $validator = Validator::make($request->all(), [
    //         'image' => ['required', 'image', 'file', 'mimes:jpeg,png,jpg,gif,svg', 'max:5120'],
    //     ]);

    //     if ($validator->fails()) {
    //         return response()->json([
    //             'message' => 'error',
    //             'errors' => $validator->errors(),
    //         ], Response::HTTP_UNPROCESSABLE_ENTITY);
    //     }

    //     $image = $request->file('image');
    //     $image->store('article_galleries');

    //     $articleGallery = ArticleGallery::create([
    //         'article_id' => $article->id,
    //         'image' => 'storage/article_galleries/' . $image->hashName(),
    //     ]);

    //     return (new ArticleGalleryResource($articleGallery->load('article')))->response()->setStatusCode(Response::HTTP_CREATED);
    // }
}
