<?php

namespace App\Http\Controllers;

use App\Models\Producto;
use Illuminate\Database\Eloquent\Builder;
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

    public function ultimos($n)
    {
        $productos = Producto::orderBy('created_at', 'desc')->limit($n)->get();
        $productos->load(['categoria', 'tipoProducto']);
        return $productos;
    }

    function array_sort_by(&$arrIni, $col, $order = SORT_DESC)
    {
        $arrAux = array();
        foreach ($arrIni as $key=> $row)
        {
            $arrAux[$key] = is_object($row) ? $arrAux[$key] = $row->$col : $row[$col];
            $arrAux[$key] = strtolower($arrAux[$key]);
        }
        array_multisort($arrAux, $order, $arrIni);
    }

    public function masVendidos($n)
    {
        $productos = Producto::join('factura_has_productos', 'productos.id', '=', 'factura_has_productos.producto_id')
        ->join('facturas', 'factura_has_productos.factura_id', '=', 'facturas.id')
        ->select('factura_has_productos.*')->get();
        $productosAll = Producto::all();
        $masVendidos = [];
        foreach ($productosAll as $producto) {
            $p = new Producto();
            $p->id = $producto->id;
            $p->cantidad = 0;
            foreach ($productos as $value) {
                if ($producto->id == $value->producto_id) {
                    $p->cantidad += $value->cantidad;
                }
            }
            if ($p->cantidad > 0) {
                array_push($masVendidos, $p);
            }
        }
        $productoCantidadVendida = array();
        if (count($masVendidos) > 0) {
            $this->array_sort_by($masVendidos, 'cantidad', $order = SORT_DESC);
            if (count($masVendidos) > $n) {
                $masVendidos = array_slice($masVendidos, 0, $n);
            }
            foreach ($masVendidos as $value) {
                array_push($productoCantidadVendida, ['producto' => Producto::find($value->id), 'cantidadVendida' => $value->cantidad]);
            }
        }
        return $productoCantidadVendida;
    }

    public function productosByCategoria($categoria){
        $productos = Producto::join('categoria_has_productos', 'productos.id', '=', 'categoria_has_productos.producto_id')
        ->join('categorias', 'categoria_has_productos.categoria_id', '=', 'categorias.id')
        ->where('categorias.nombre', '=', $categoria)
        ->select('productos.*')
        ->get();
        $productos->load(['categoria', 'tipoProducto']);
        return $productos;
    }

    public function productosBusqueda($search)
    {
        $productos = Producto::where('nombre', 'like', '%' . $search . '%')
        ->orWhere('descripcion', 'like', '%' . $search . '%')
        ->orWhere('laboratorio', 'like', '%' . $search . '%')
        ->orWhere('indicaciones', 'like', '%' . $search . '%')
        ->get();
        $productos->load(['categoria', 'tipoProducto']);
        return $productos;
    }

    public function relacionados($producto_id, $categoria_id, $tipo_id, $laboratorio, $n)
    {
        $productosTipo = Producto::join('tipo_producto_has_productos', 'productos.id', '=', 'tipo_producto_has_productos.producto_id')
        ->join('tipo_productos', 'tipo_producto_has_productos.tipo_producto_id', '=', 'tipo_productos.id')
        ->where('tipo_productos.id', '=', $tipo_id)
        ->select('productos.*')
        ->get();

        $productosCategoria = Producto::join('categoria_has_productos', 'productos.id', '=', 'categoria_has_productos.producto_id')
        ->join('categorias', 'categoria_has_productos.categoria_id', '=', 'categorias.id')
        ->where('categorias.id', '=', $categoria_id)
        ->select('productos.*')
        ->get();

        $productosLaboratorio = Producto::where('laboratorio', '=', $laboratorio)->get();

        $productos = array();

        foreach ($productosTipo as $value) {
            if($value->id != $producto_id){
                array_push($productos, $value);
            }
        }
        foreach ($productosCategoria as $value) {
            if($value->id != $producto_id){
                array_push($productos, $value);
            }
        }
        foreach ($productosLaboratorio as $value) {
            if($value->id != $producto_id){
                array_push($productos, $value);
            }
        }
        shuffle($productos);
        if (count($productos) > $n) {
            $productos = array_slice($productos, 0, $n);
        }
        $productos = array_unique($productos);

        return $productos;
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
    public function show($id)
    {
        $producto = Producto::find($id);
        $producto->categoria;
        $producto->tipoProducto;
        return $producto;
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
        $result = $producto->save();
        if($result){
            /*$producto->categoria()->detach();
            $producto->tipoProducto()->detach();
            $producto->categoria()->attach($request->idsCategorias);
            $producto->tipoProducto()->attach($request->idsTipoProductos);
            $result = $producto->save();*/
            $producto->categoria()->sync($request->idsCategorias);
            $producto->tipoProducto()->sync($request->idsTipoProductos);
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
