<?php

namespace App\Http\Controllers;

use App\Models\ArticleGallery;
use Illuminate\Support\Facades\Gate;
use App\Http\Resources\ArticleGalleryResource;
use Symfony\Component\HttpFoundation\Response;
use App\Http\Requests\StoreArticleGalleryRequest;
use App\Http\Requests\UpdateArticleGalleryRequest;

class ArticleGalleryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        abort_if(Gate::denies('index-article-gallery'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return new ArticleGalleryResource(ArticleGallery::with(['article'])->latest()->get());
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
     * @param  \App\Http\Requests\StoreArticleGalleryRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreArticleGalleryRequest $request)
    {
        abort_if(Gate::denies('create-article-gallery'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $articleGallery = ArticleGallery::create($request->validated());

        return (new ArticleGalleryResource($articleGallery))->response()->setStatusCode(Response::HTTP_CREATED);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\ArticleGallery  $articleGallery
     * @return \Illuminate\Http\Response
     */
    public function show(ArticleGallery $articleGallery)
    {
        abort_if(Gate::denies('show-article-gallery'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return new ArticleGalleryResource($articleGallery->load(['article']));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\ArticleGallery  $articleGallery
     * @return \Illuminate\Http\Response
     */
    public function edit(ArticleGallery $articleGallery)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateArticleGalleryRequest  $request
     * @param  \App\Models\ArticleGallery  $articleGallery
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateArticleGalleryRequest $request, ArticleGallery $articleGallery)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\ArticleGallery  $articleGallery
     * @return \Illuminate\Http\Response
     */
    public function destroy(ArticleGallery $articleGallery)
    {
        abort_if(Gate::denies('delete-article-gallery'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $articleGallery->delete();

        return response(null, Response::HTTP_NO_CONTENT);
    }
}
