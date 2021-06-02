<?php

namespace App\Http\Controllers;

use App\Models\MetodoPago;
use Illuminate\Http\Request;

class MetodoPagoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return MetodoPago::all();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $metodoPago = new MetodoPago();
        $metodoPago->tipo = $request->tipo;
        $result = $metodoPago->save();
        if($result){
            return response($metodoPago, 201);
        } else {
            return response('fallo', 400);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\MetodoPago  $metodoPago
     * @return \Illuminate\Http\Response
     */
    public function show(MetodoPago $metodoPago)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\MetodoPago  $metodoPago
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $metodoPago = MetodoPago::find($id);
        $metodoPago->tipo = $request->tipo;
        $result = $metodoPago->save();
        if($result){
            return response($metodoPago, 201);
        } else {
            return response('fallo', 400);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\MetodoPago  $metodoPago
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $metodoPago = MetodoPago::find($id);
        $metodoPago->delete();
        return $metodoPago;
    }
}
