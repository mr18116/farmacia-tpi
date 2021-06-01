<?php

namespace App\Http\Controllers;

use App\Models\CarritoHasProductos;
use Illuminate\Http\Request;

class CarritoHasProductosController extends Controller
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
        $result = false;
        $carritoHasProductos = '';

        if(CarritoHasProductos::where('carrito_id', '=', $request->carrito_id)->where('producto_id', '=', $request->producto_id)->exists()){
            $carritoHasProductos = CarritoHasProductos::where('carrito_id', '=', $request->carrito_id)->where('producto_id', '=', $request->producto_id)->first();
            CarritoHasProductos::where('carrito_id', '=', $request->carrito_id)->where('producto_id', '=', $request->producto_id)
            ->update(['cantidad' => $carritoHasProductos->cantidad + $request->cantidad]);
            $carritoHasProductos = CarritoHasProductos::where('carrito_id', '=', $request->carrito_id)->where('producto_id', '=', $request->producto_id)->first();
        } else {
            $carritoHasProductos = new CarritoHasProductos();
            $carritoHasProductos->carrito_id = $request->carrito_id;
            $carritoHasProductos->producto_id = $request->producto_id;
            $carritoHasProductos->cantidad = $request->cantidad;
        }

        $result = $carritoHasProductos->save();

        if($result){
            return response($carritoHasProductos, 201);
        } else {
            return response('fallo', 400);
        }
    }

    public function cantidadProducto(Request $request, $carrito_id, $producto_id)
    {
        /*$carritoHasProductos = CarritoHasProductos::where('carrito_id', '=', $carrito_id)->where('producto_id', '=', $producto_id)->first();
        $carritoHasProductos->cantidad = $request->cantidad;
        $result = $carritoHasProductos->save();
        if($result){
            return response($carritoHasProductos, 200);
        } else {
            return response('fallo', 400);
        }*/
        CarritoHasProductos::where('carrito_id', '=', $carrito_id)
        ->where('producto_id', '=', $producto_id)->update(['cantidad' => $request->cantidad]);
        $carritoHasProductos = CarritoHasProductos::where('carrito_id', '=', $carrito_id)->where('producto_id', '=', $producto_id)->first();
        return $carritoHasProductos;
    }

    public function delete($carrito_id, $producto_id)
    {
        $carritoHasProductos = CarritoHasProductos::where('carrito_id', '=', $carrito_id)->where('producto_id', '=', $producto_id)->delete();
        return $carritoHasProductos;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\CarritoHasProductos  $carritoHasProductos
     * @return \Illuminate\Http\Response
     */
    public function show(CarritoHasProductos $carritoHasProductos)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\CarritoHasProductos  $carritoHasProductos
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, CarritoHasProductos $carritoHasProductos)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\CarritoHasProductos  $carritoHasProductos
     * @return \Illuminate\Http\Response
     */
    public function destroy(CarritoHasProductos $carritoHasProductos)
    {
        //
    }
}
