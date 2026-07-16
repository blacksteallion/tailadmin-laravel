<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ThemePalette extends Model
{
    protected $fillable = ['name', 'is_active', 'colors'];

    protected $casts = [
        'colors' => 'array',
        'is_active' => 'boolean',
    ];

    protected static function booted(): void
    {
        static::saved(function (self $palette) {
            if ($palette->is_active) {
                static::where('id', '!=', $palette->id)->update(['is_active' => false]);
            }
        });
    }

    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }
}
