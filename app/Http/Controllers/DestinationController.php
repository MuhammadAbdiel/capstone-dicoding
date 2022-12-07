<?php

namespace App\Http\Controllers;

use App\Models\Destination;
use App\Models\Transaction;
use Illuminate\Http\Request;
use App\Models\DetailTransaction;
use App\Models\DestinationGallery;
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

    public function order(Destination $destination, Request $request)
    {
        $request->validate([
            'quantity' => ['required', 'integer', 'min:1'],
        ]);

        $total_price = $destination->price * $request->quantity;

        $transaction = Transaction::where('user_id', auth()->user()->id)->where('transaction_status', 1)->first();

        if (empty($transaction)) {
            $transaction = Transaction::create([
                'user_id' => auth()->user()->id,
                'transaction_status' => 1,
                'total_price' => $total_price,
            ]);
        } else {
            $transaction->total_price += $total_price;
            $transaction->update();
        }

        DetailTransaction::create([
            'transaction_id' => $transaction->id,
            'destination_id' => $destination->id,
            'quantity' => $request->quantity,
            'price' => $total_price,
        ]);

        return response()->json([
            'message' => 'success',
            'data' => $transaction->load(['user', 'detail_transactions']),
        ]);
    }
}
