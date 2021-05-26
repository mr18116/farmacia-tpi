<?php

use App\Http\Controllers\CarritoController;
use App\Http\Controllers\CategoriaController;
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
]);

Route::get('carrito-user/{user_id}', [CarritoController::class, 'carritoByUser']);

Route::get('rol-user/{user_id}', [TipoUsuarioController::class, 'rol']);

Route::get('productos-categoria/{categoria}', [ProductoController::class, 'productosByCategoria']);

Route::get('productos-ultimos/{n}', [ProductoController::class, 'ultimos']);

Route::get('productos-mas-comprados/{n}', [ProductoController::class, 'masVendidos']);
