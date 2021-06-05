<?php

use App\Http\Controllers\CarritoController;
use App\Http\Controllers\CarritoHasProductosController;
use App\Http\Controllers\CategoriaController;
use App\Http\Controllers\FacturaController;
use App\Http\Controllers\FormasEnvioController;
use App\Http\Controllers\MetodoPagoController;
use App\Http\Controllers\ProductoController;
use App\Http\Controllers\TipoProductoController;
use App\Http\Controllers\TipoUsuarioController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

/*Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::apiResources([
    'tipo_usuario' => TipoUsuarioController::class,
    'carrito' => CarritoController::class,
    'producto' => ProductoController::class,
    'categoria' => CategoriaController::class,
    'tipo_producto' => TipoProductoController::class,
    'factura' => FacturaController::class,
    'formas_envio' => FormasEnvioController::class,
    'metodo_pago' => MetodoPagoController::class,
]);

Route::get('carrito-user/{user_id}', [CarritoController::class, 'carritoByUser']);

Route::post('carrito-producto', [CarritoHasProductosController::class, 'store']);
Route::put('carrito-producto/{carrito_id}/{producto_id}', [CarritoHasProductosController::class, 'cantidadProducto']);
Route::delete('carrito-producto/{carrito_id}/{producto_id}', [CarritoHasProductosController::class, 'delete']);
Route::delete('carrito-producto/{carrito_id}', [CarritoHasProductosController::class, 'todosDelete']);

Route::get('rol-user/{user_id}', [TipoUsuarioController::class, 'rol']);

Route::get('productos-categoria/{categoria}', [ProductoController::class, 'productosByCategoria']);
Route::get('productos-ultimos/{n}', [ProductoController::class, 'ultimos']);
Route::get('productos-mas-comprados/{n}', [ProductoController::class, 'masVendidos']);
Route::get('productos-search/{search}', [ProductoController::class, 'productosBusqueda']);

Route::get('facturas-user/{user_id}', [FacturaController::class, 'facturasUser']);
