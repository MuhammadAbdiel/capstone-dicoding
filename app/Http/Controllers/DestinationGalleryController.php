<?php

namespace App\Http\Controllers;

use App\Models\DestinationGallery;
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
        //
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
        //
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
        //
    }
}
