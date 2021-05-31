<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Carrito;
use App\Models\Producto;

class CarritoHasProductos extends Model
{
    use HasFactory;

    public function carrito(){
        return $this->belongsTo(Carrito::class);
    }

    public function producto(){
        return $this->belongsTo(Producto::class);
    }
}
    
