<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateArticleRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'title' => ['string', 'max:255'],
            'image' => ['image', 'file', 'max:5120'],
            'content' => ['string'],
            'category_id' => ['integer', 'exists:categories,id'],
            'user_id' => ['integer', 'exists:users,id'],
        ];
    }
}
