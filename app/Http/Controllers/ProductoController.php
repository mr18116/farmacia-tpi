<?php

namespace App\Http\Controllers;

use App\Models\Producto;
use Illuminate\Http\Request;

class ProductoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $productos = Producto::all();
        $productos->load(['categoria', 'tipoProducto']);
        return $productos;
    }

    public function ultimos(int $n)
    {
        $productos = Producto::all()->orderBy('created_at', 'desc')->limit($n)->get();
        return $productos;
    }

    public function productosByCategoria(int $n){
        
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $producto = new Producto();
        $producto->nombre = $request->nombre;
        $producto->imagen_url = $request->imagen_url;
        $producto->descripcion = $request->descripcion;
        $producto->precio = $request->precio;
        $producto->laboratorio = $request->laboratorio;
        $producto->cantidad = $request->cantidad;
        $producto->indicaciones = $request->indicaciones;
        $result = $producto->save();
        if($result){
            $producto->categoria()->attach($request->idsCategorias);
            $producto->tipoProducto()->attach($request->idsTipoProductos);
            $result = $producto->save();
            return response($producto, 201);
        } else {
            return response('fallo', 400);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Producto  $producto
     * @return \Illuminate\Http\Response
     */
    public function show(Producto $producto)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Producto  $producto
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $producto = Producto::find($id);
        $producto->nombre = $request->nombre;
        $producto->imagen_url = $request->imagen_url;
        $producto->descripcion = $request->descripcion;
        $producto->precio = $request->precio;
        $producto->laboratorio = $request->laboratorio;
        $producto->cantidad = $request->cantidad;
        $producto->indicaciones = $request->indicaciones;
        $producto->categoria()->attach($request->idsCategorias);
        $producto->tipoProducto()->attach($request->idsTipoProductos);
        $result = $producto->save();
        if($result){
            return response($producto, 201);
        } else {
            return response('fallo', 400);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Producto  $producto
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $producto = Producto::find($id);
        $producto->delete();
        return $producto;
    }
}
