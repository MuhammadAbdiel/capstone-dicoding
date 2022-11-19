<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DestinationGallery extends Model
{
    use HasFactory;

    protected $guarded = ['id'];

    public function destination()
    {
        return $this->belongsTo(Destination::class);
    }
}
