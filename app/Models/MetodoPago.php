<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Factura;

class MetodoPago extends Model
{
    use HasFactory;

    public function facturas(){
        return $this->hasMany(Factura::class);
    }
}
