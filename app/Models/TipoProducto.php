<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TipoProducto extends Model
{
    use HasFactory;

    public function producto(){
        return $this->belongsToMany(Producto::class, 'tipo_producto_has_productos');
    }
}
