<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Factura;

class FormasEnvio extends Model
{
    use HasFactory;

    public function facturas(){
        return $this->belongsToMany(Factura::class);
    }

}
