<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
    use HasFactory;

    protected $guarded = ['id'];

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function article_galleries()
    {
        return $this->hasMany(ArticleGallery::class);
    }

    public function comments()
    {
        return $this->hasMany(Comment::class);
    }
}
