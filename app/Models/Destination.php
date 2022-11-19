<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Destination extends Model
{
    use HasFactory;

    protected $guarded = ['id'];

    public function destination_galleries()
    {
        return $this->hasMany(DestinationGallery::class);
    }

    public function wishlists()
    {
        return $this->hasMany(Wishlist::class);
    }

    public function detail_transactions()
    {
        return $this->hasMany(DetailTransaction::class);
    }
}
