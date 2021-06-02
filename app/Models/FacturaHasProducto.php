<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Factura;
use App\Models\Producto;

class FacturaHasProducto extends Model
{
    use HasFactory;

    public function factura(){
        return $this->hasOne(Factura::class);
    }

    public function producto(){
        return $this->hasOne(Producto::class);
    }
}
