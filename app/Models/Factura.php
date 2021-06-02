<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;
use App\Models\FormasEnvio;
use App\Models\MetodoPago;
use App\Models\FacturaHasProducto;
use App\Models\Producto;

class Factura extends Model
{
    use HasFactory;

    public function user(){
        return $this->belongsTo(User::class);
    }

    public function formasEnvios(){
        return $this->belongsTo(FormasEnvio::class);
    }

    public function metodoPagos(){
        return $this->belongsTo(MetodoPago::class);
    }

    public function facturaHasProductos(){
        return $this->belongsToMany(FacturaHasProducto::class);
    }

    public function productos(){
        return $this->belongsToMany(Producto::class, 'factura_has_productos')->withPivot('cantidad');
    }
}
