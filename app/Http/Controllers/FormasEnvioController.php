<?php

namespace App\Http\Controllers;

use App\Models\FormasEnvio;
use Illuminate\Http\Request;

class FormasEnvioController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return FormasEnvio::all();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $formasEnvio = new FormasEnvio();
        $formasEnvio->empresa = $request->empresa;
        $result = $formasEnvio->save();
        if($result){
            return response($formasEnvio, 201);
        } else {
            return response('fallo', 400);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\FormasEnvio  $formasEnvio
     * @return \Illuminate\Http\Response
     */
    public function show(FormasEnvio $formasEnvio)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\FormasEnvio  $formasEnvio
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $formasEnvio = FormasEnvio::find($id);
        $formasEnvio->empresa = $request->empresa;
        $result = $formasEnvio->save();
        if($result){
            return response($formasEnvio, 201);
        } else {
            return response('fallo', 400);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\FormasEnvio  $formasEnvio
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $formasEnvio = FormasEnvio::find($id);
        $formasEnvio->delete();
        return $formasEnvio;
    }
}
