<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Producto;

class Categoria extends Model
{
    use HasFactory;

    public function producto(){
        return $this->belongsToMany(Producto::class, 'categoria_has_productos');
    }
}
