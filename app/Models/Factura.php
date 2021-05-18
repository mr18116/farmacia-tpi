<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;
use App\Models\FormasEnvio;
use App\Models\MetodoPago;
use App\Models\FacturaHasProducto;

class Factura extends Model
{
    use HasFactory;

    public function user(){
        return $this->belongsTo(User::class);
    }

    public function formasEnvio(){
        return $this->hasOne(FormasEnvio::class);
    }

    public function metodoPagos(){
        return $this->hasOne(MetodoPago::class);
    }

    public function facturaHasProductos(){
        return $this->hasMany(FacturaHasProducto::class);
    }
}
