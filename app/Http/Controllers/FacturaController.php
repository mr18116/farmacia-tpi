<?php

namespace App\Http\Controllers;

use App\Models\Factura;
use Illuminate\Http\Request;

class FacturaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $factura = Factura::all();
        $factura->load(['formasEnvios', 'metodoPagos', 'user', 'productos']);
        return $factura;
    }

    public function facturasUser($user_id)
    {
        $factura = Factura::where('user_id', '=', $user_id)->get();
        $factura->load(['formasEnvios', 'metodoPagos', 'user', 'productos']);
        return $factura;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $factura = new Factura();
        $factura->user_id = $request->user_id;
        $factura->formas_envios_id = $request->formas_envios_id;
        $factura->metodo_pagos_id = $request->metodo_pagos_id;
        $factura->direccion = $request->direccion;
        $factura->total = $request->total;
        $result = $factura->save();
        if($result){
            for ($i=0; $i < count($request->idsProductos); $i++) { 
                $factura->productos()->attach($request->idsProductos[$i], ['cantidad' => $request->cantidades[$i]]);
            }
            $result = $factura->save();
            return response($factura, 201);
        } else {
            return response('fallo', 400);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Factura  $factura
     * @return \Illuminate\Http\Response
     */
    public function show(Factura $factura)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Factura  $factura
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Factura $factura)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Factura  $factura
     * @return \Illuminate\Http\Response
     */
    public function destroy(Factura $factura)
    {
        //
    }
}
