<?php

namespace App\Http\Requests;

use Illuminate\Support\Facades\Gate;
use Illuminate\Foundation\Http\FormRequest;

class UpdateDestinationRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return Gate::allows('update-destination');
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => ['string', 'max:255'],
            'open_time' => ['date_format:H:i:s'],
            'close_time' => ['date_format:H:i:s'],
            'price' => ['numeric', 'min:0'],
            'rating' => ['numeric', 'min:0', 'max:5'],
            'location' => ['string', 'max:255'],
            'description' => ['string'],
        ];
    }
}
