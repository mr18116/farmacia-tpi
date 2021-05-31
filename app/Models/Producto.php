<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\TipoProducto;
use App\Models\Categoria;
use App\Models\CarritoHasProductos;

class Producto extends Model
{
    use HasFactory;

    public function tipoProducto(){
        return $this->belongsToMany(TipoProducto::class, 'tipo_producto_has_productos');
    }

    public function categoria(){
        return $this->belongsToMany(Categoria::class, 'categoria_has_productos');
    }

    public function carritoHasProductos(){
        return $this->hasMany(CarritoHasProductos::class);
    }

    public function facturaHasProductos(){
        return $this->belongsToMany(FacturaHasProductos::class);
    }

}
