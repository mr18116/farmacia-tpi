<?php

namespace App\Http\Controllers;

use App\Models\tipoUsuario;
use Illuminate\Http\Request;

class TipoUsuarioController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $tipoUsuario =  new tipoUsuario();
        $tipoUsuario->rol = $request->rol;
        $tipoUsuario->user_id = $request->user_id;
        $result = $tipoUsuario->save();
        if($result){
            return response($tipoUsuario, 201);
        } else {
            return response('fallo', 400);
        }
    }

    public function rol(int $user_id){
        $tipoUsuario = tipoUsuario::where('user_id', '=', $user_id)->first();
        return $tipoUsuario;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\tipoUsuario  $tipoUsuario
     * @return \Illuminate\Http\Response
     */
    public function show(tipoUsuario $tipoUsuario)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\tipoUsuario  $tipoUsuario
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, tipoUsuario $tipoUsuario)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\tipoUsuario  $tipoUsuario
     * @return \Illuminate\Http\Response
     */
    public function destroy(tipoUsuario $tipoUsuario)
    {
        //
    }
}
