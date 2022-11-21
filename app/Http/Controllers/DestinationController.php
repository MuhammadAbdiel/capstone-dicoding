<?php

namespace App\Http\Controllers;

use App\Models\Destination;
use Illuminate\Support\Facades\Gate;
use App\Http\Resources\DestinationResource;
use App\Http\Requests\StoreDestinationRequest;
use Symfony\Component\HttpFoundation\Response;
use App\Http\Requests\UpdateDestinationRequest;

class DestinationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return new DestinationResource(Destination::with(['destination_galleries', 'wishlists', 'detail_transactions'])->latest()->get());
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
     * @param  \App\Http\Requests\StoreDestinationRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreDestinationRequest $request)
    {
        abort_if(Gate::denies('create-destination'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $destination = Destination::create($request->validated());

        return (new DestinationResource($destination))->response()->setStatusCode(Response::HTTP_CREATED);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Destination  $destination
     * @return \Illuminate\Http\Response
     */
    public function show(Destination $destination)
    {
        return new DestinationResource($destination->load(['destination_galleries', 'wishlists', 'detail_transactions']));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Destination  $destination
     * @return \Illuminate\Http\Response
     */
    public function edit(Destination $destination)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateDestinationRequest  $request
     * @param  \App\Models\Destination  $destination
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateDestinationRequest $request, Destination $destination)
    {
        abort_if(Gate::denies('update-destination'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $destination->update($request->validated());

        return (new DestinationResource($destination))->response()->setStatusCode(Response::HTTP_ACCEPTED);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Destination  $destination
     * @return \Illuminate\Http\Response
     */
    public function destroy(Destination $destination)
    {
        abort_if(Gate::denies('delete-destination'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $destination->delete();

        return response(null, Response::HTTP_NO_CONTENT);
    }
}
