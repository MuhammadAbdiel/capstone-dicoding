<?php

namespace App\Http\Controllers;

use App\Models\Destination;
use Illuminate\Http\Request;
use App\Models\DestinationGallery;
use Illuminate\Support\Facades\Gate;
use Symfony\Component\HttpFoundation\Response;
use App\Http\Resources\DestinationGalleryResource;
use App\Http\Requests\StoreDestinationGalleryRequest;
use App\Http\Requests\UpdateDestinationGalleryRequest;

class DestinationGalleryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        abort_if(Gate::denies('index-destination-gallery'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return new DestinationGalleryResource(DestinationGallery::with(['destination'])->latest()->get());
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
     * @param  \App\Http\Requests\StoreDestinationGalleryRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreDestinationGalleryRequest $request)
    {
        // 
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\DestinationGallery  $destinationGallery
     * @return \Illuminate\Http\Response
     */
    public function show(DestinationGallery $destinationGallery)
    {
        abort_if(Gate::denies('show-destination-gallery'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return new DestinationGalleryResource($destinationGallery->load(['destination']));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\DestinationGallery  $destinationGallery
     * @return \Illuminate\Http\Response
     */
    public function edit(DestinationGallery $destinationGallery)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateDestinationGalleryRequest  $request
     * @param  \App\Models\DestinationGallery  $destinationGallery
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateDestinationGalleryRequest $request, DestinationGallery $destinationGallery)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\DestinationGallery  $destinationGallery
     * @return \Illuminate\Http\Response
     */
    public function destroy(DestinationGallery $destinationGallery)
    {
        abort_if(Gate::denies('delete-destination-gallery'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $destinationGallery->delete();

        return response(null, Response::HTTP_NO_CONTENT);
    }
}
