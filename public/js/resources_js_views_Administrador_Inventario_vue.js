(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_Administrador_Inventario_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Administrador/DataCategorias.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Administrador/DataCategorias.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      headers: [{
        text: 'Nombre',
        value: 'nombre',
        sorteable: true
      }, {
        text: 'Acciones',
        value: 'actions',
        sortable: false
      }],
      categorias: []
    };
  },
  created: function created() {
    var _this = this;

    axios__WEBPACK_IMPORTED_MODULE_0___default().get('/api/categoria').then(function (response) {
      _this.categorias = response.data;
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Administrador/DataTipoProductos.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Administrador/DataTipoProductos.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      headers: [{
        text: 'Nombre',
        value: 'nombre',
        sorteable: true
      }, {
        text: 'Acciones',
        value: 'actions',
        sortable: false
      }],
      tipos: []
    };
  },
  created: function created() {
    var _this = this;

    axios.get('/api/tipo_producto').then(function (response) {
      _this.categorias = response.data;
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Administrador/ModalEditarProducto.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Administrador/ModalEditarProducto.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      nuevaImagen: null,
      nuevaImagenUrl: ''
    };
  },
  props: ["editar", "producto", "opciones"],
  methods: {
    cerrarModal: function cerrarModal() {
      this.$emit("cerrarModal");
      this.nuevaImagen = null;
      this.nuevaImagenUrl = '';
    },
    guardarProducto: function guardarProducto() {
      this.$emit('guardarProducto');
    },
    editarProducto: function editarProducto() {
      this.$emit('editarProducto', this.producto);
      this.nuevaImagen = null;
      this.nuevaImagenUrl = '';
    }
  },
  watch: {
    nuevaImagen: function nuevaImagen() {
      this.nuevaImagenUrl = URL.createObjectURL(this.nuevaImagen);
      console.log(this.nuevaImagenUrl);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Administrador/Inventario.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Administrador/Inventario.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_Administrador_ModalEditarProducto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/Administrador/ModalEditarProducto */ "./resources/js/components/Administrador/ModalEditarProducto.vue");
/* harmony import */ var _components_Administrador_DataCategorias__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Administrador/DataCategorias */ "./resources/js/components/Administrador/DataCategorias.vue");
/* harmony import */ var _components_Administrador_DataTipoProductos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Administrador/DataTipoProductos */ "./resources/js/components/Administrador/DataTipoProductos.vue");
var _methods;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      productos: [],
      editar: false,
      productoEditar: {},
      page: 1,
      opciones: {}
    };
  },
  created: function created() {
    var ejemplo0 = {
      id: -1,
      nombre: "ALERCET JARABE FRASCO X 60 ML 0",
      imagen_url: "https://www.farmaciasannicolas.com/Producto/GetMultimediaProducto?idProducto=c4d90d93-d0ad-4873-8bf3-4f5052c19505&idMultimedia=e9363332-777b-4862-a180-9a6db039f588",
      precio: 8.95,
      cantidad: 0
    };
    this.productos.push(ejemplo0);

    for (var index = 0; index < 10; index++) {
      var ejemplo = {
        id: index,
        nombre: "ALERCET JARABE FRASCO X 60 ML " + (index + 1),
        imagen_url: "https://www.farmaciasannicolas.com/Producto/GetMultimediaProducto?idProducto=c4d90d93-d0ad-4873-8bf3-4f5052c19505&idMultimedia=e9363332-777b-4862-a180-9a6db039f588",
        precio: 8.95,
        cantidad: Math.floor(Math.random() * 20)
      };
      this.productos.push(ejemplo);
    }
  },
  components: {
    ModalEditarProducto: _components_Administrador_ModalEditarProducto__WEBPACK_IMPORTED_MODULE_0__.default,
    DataCategorias: _components_Administrador_DataCategorias__WEBPACK_IMPORTED_MODULE_1__.default,
    DataTipoProductos: _components_Administrador_DataTipoProductos__WEBPACK_IMPORTED_MODULE_2__.default
  },
  methods: (_methods = {
    nuevoProductoModal: function nuevoProductoModal() {
      this.editar = true;
      this.opciones = {
        disabled: false,
        btn_guardar: true,
        btn_texto: 'Guardar'
      };
    },
    editarProductoModal: function editarProductoModal(producto) {
      this.editar = true;
      this.opciones = {
        disabled: false,
        btn_guardar: true,
        btn_texto: 'Guardar'
      };
      this.productoEditar = producto;
    },
    detalleProductoModal: function detalleProductoModal(producto) {
      this.editar = true;
      this.opciones = {
        disabled: true,
        btn_editar: true,
        btn_texto: 'Editar'
      };
      this.productoEditar = producto;
    },
    guardarProducto: function guardarProducto() {
      console.log('guardar');
    },
    cerrar: function cerrar() {
      this.editar = false;
      this.productoEditar = {};
      this.opciones = {};
    }
  }, _defineProperty(_methods, "guardarProducto", function guardarProducto() {
    console.log("guardar");
  }), _defineProperty(_methods, "colorCard", function colorCard(cantidad) {
    var color = "teal lighten-3";

    if (cantidad == 0) {
      color = "red lighten-1";
    } else if (cantidad > 0 && cantidad <= 10) {
      color = "orange lighten-1";
    }

    return color;
  }), _methods)
});

/***/ }),

/***/ "./resources/js/components/Administrador/DataCategorias.vue":
/*!******************************************************************!*\
  !*** ./resources/js/components/Administrador/DataCategorias.vue ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DataCategorias_vue_vue_type_template_id_56699a87___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DataCategorias.vue?vue&type=template&id=56699a87& */ "./resources/js/components/Administrador/DataCategorias.vue?vue&type=template&id=56699a87&");
/* harmony import */ var _DataCategorias_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DataCategorias.vue?vue&type=script&lang=js& */ "./resources/js/components/Administrador/DataCategorias.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _DataCategorias_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _DataCategorias_vue_vue_type_template_id_56699a87___WEBPACK_IMPORTED_MODULE_0__.render,
  _DataCategorias_vue_vue_type_template_id_56699a87___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Administrador/DataCategorias.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Administrador/DataTipoProductos.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/components/Administrador/DataTipoProductos.vue ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DataTipoProductos_vue_vue_type_template_id_658f34a8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DataTipoProductos.vue?vue&type=template&id=658f34a8& */ "./resources/js/components/Administrador/DataTipoProductos.vue?vue&type=template&id=658f34a8&");
/* harmony import */ var _DataTipoProductos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DataTipoProductos.vue?vue&type=script&lang=js& */ "./resources/js/components/Administrador/DataTipoProductos.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _DataTipoProductos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _DataTipoProductos_vue_vue_type_template_id_658f34a8___WEBPACK_IMPORTED_MODULE_0__.render,
  _DataTipoProductos_vue_vue_type_template_id_658f34a8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Administrador/DataTipoProductos.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Administrador/ModalEditarProducto.vue":
/*!***********************************************************************!*\
  !*** ./resources/js/components/Administrador/ModalEditarProducto.vue ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ModalEditarProducto_vue_vue_type_template_id_497ec00a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ModalEditarProducto.vue?vue&type=template&id=497ec00a&scoped=true& */ "./resources/js/components/Administrador/ModalEditarProducto.vue?vue&type=template&id=497ec00a&scoped=true&");
/* harmony import */ var _ModalEditarProducto_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ModalEditarProducto.vue?vue&type=script&lang=js& */ "./resources/js/components/Administrador/ModalEditarProducto.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _ModalEditarProducto_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _ModalEditarProducto_vue_vue_type_template_id_497ec00a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _ModalEditarProducto_vue_vue_type_template_id_497ec00a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "497ec00a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Administrador/ModalEditarProducto.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/Administrador/Inventario.vue":
/*!*********************************************************!*\
  !*** ./resources/js/views/Administrador/Inventario.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Inventario_vue_vue_type_template_id_62897ec2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Inventario.vue?vue&type=template&id=62897ec2& */ "./resources/js/views/Administrador/Inventario.vue?vue&type=template&id=62897ec2&");
/* harmony import */ var _Inventario_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Inventario.vue?vue&type=script&lang=js& */ "./resources/js/views/Administrador/Inventario.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Inventario_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Inventario_vue_vue_type_template_id_62897ec2___WEBPACK_IMPORTED_MODULE_0__.render,
  _Inventario_vue_vue_type_template_id_62897ec2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Administrador/Inventario.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Administrador/DataCategorias.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/Administrador/DataCategorias.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DataCategorias_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DataCategorias.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Administrador/DataCategorias.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DataCategorias_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Administrador/DataTipoProductos.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/Administrador/DataTipoProductos.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DataTipoProductos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DataTipoProductos.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Administrador/DataTipoProductos.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DataTipoProductos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Administrador/ModalEditarProducto.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/Administrador/ModalEditarProducto.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalEditarProducto_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ModalEditarProducto.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Administrador/ModalEditarProducto.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalEditarProducto_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/Administrador/Inventario.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/views/Administrador/Inventario.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Inventario_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Inventario.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Administrador/Inventario.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Inventario_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Administrador/DataCategorias.vue?vue&type=template&id=56699a87&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/Administrador/DataCategorias.vue?vue&type=template&id=56699a87& ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DataCategorias_vue_vue_type_template_id_56699a87___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DataCategorias_vue_vue_type_template_id_56699a87___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DataCategorias_vue_vue_type_template_id_56699a87___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DataCategorias.vue?vue&type=template&id=56699a87& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Administrador/DataCategorias.vue?vue&type=template&id=56699a87&");


/***/ }),

/***/ "./resources/js/components/Administrador/DataTipoProductos.vue?vue&type=template&id=658f34a8&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/Administrador/DataTipoProductos.vue?vue&type=template&id=658f34a8& ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DataTipoProductos_vue_vue_type_template_id_658f34a8___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DataTipoProductos_vue_vue_type_template_id_658f34a8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DataTipoProductos_vue_vue_type_template_id_658f34a8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DataTipoProductos.vue?vue&type=template&id=658f34a8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Administrador/DataTipoProductos.vue?vue&type=template&id=658f34a8&");


/***/ }),

/***/ "./resources/js/components/Administrador/ModalEditarProducto.vue?vue&type=template&id=497ec00a&scoped=true&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/components/Administrador/ModalEditarProducto.vue?vue&type=template&id=497ec00a&scoped=true& ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalEditarProducto_vue_vue_type_template_id_497ec00a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalEditarProducto_vue_vue_type_template_id_497ec00a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalEditarProducto_vue_vue_type_template_id_497ec00a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ModalEditarProducto.vue?vue&type=template&id=497ec00a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Administrador/ModalEditarProducto.vue?vue&type=template&id=497ec00a&scoped=true&");


/***/ }),

/***/ "./resources/js/views/Administrador/Inventario.vue?vue&type=template&id=62897ec2&":
/*!****************************************************************************************!*\
  !*** ./resources/js/views/Administrador/Inventario.vue?vue&type=template&id=62897ec2& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Inventario_vue_vue_type_template_id_62897ec2___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Inventario_vue_vue_type_template_id_62897ec2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Inventario_vue_vue_type_template_id_62897ec2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Inventario.vue?vue&type=template&id=62897ec2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Administrador/Inventario.vue?vue&type=template&id=62897ec2&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Administrador/DataCategorias.vue?vue&type=template&id=56699a87&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Administrador/DataCategorias.vue?vue&type=template&id=56699a87& ***!
  \****************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("v-data-table", {
        staticClass: "elevation-1",
        attrs: {
          headers: _vm.headers,
          items: _vm.categorias,
          "items-per-page": 5
        },
        scopedSlots: _vm._u([
          {
            key: "top",
            fn: function() {
              return [
                _c(
                  "v-toolbar",
                  { attrs: { flat: "" } },
                  [
                    _c("v-toolbar-title", { staticClass: "text-h5" }, [
                      _vm._v("Categorias")
                    ]),
                    _vm._v(" "),
                    _c("v-spacer"),
                    _vm._v(" "),
                    _c("v-btn", { attrs: { color: "primary", dark: "" } }, [
                      _vm._v(
                        "\n                      Agregar Categoria\n                  "
                      )
                    ])
                  ],
                  1
                )
              ]
            },
            proxy: true
          },
          {
            key: "item.actions",
            fn: function(ref) {
              var item = ref.item
              return [
                _c("v-icon", { staticClass: "mr-2", attrs: { small: "" } }, [
                  _vm._v("\n                  mdi-pencil\n              ")
                ]),
                _vm._v(" "),
                _c("v-icon", { attrs: { small: "" } }, [
                  _vm._v("\n                  mdi-delete\n              ")
                ])
              ]
            }
          },
          {
            key: "no-data",
            fn: function() {
              return [_vm._v("\n              No hay datos\n          ")]
            },
            proxy: true
          }
        ])
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Administrador/DataTipoProductos.vue?vue&type=template&id=658f34a8&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Administrador/DataTipoProductos.vue?vue&type=template&id=658f34a8& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("v-data-table", {
        staticClass: "elevation-1",
        attrs: { headers: _vm.headers, items: _vm.tipos, "items-per-page": 5 },
        scopedSlots: _vm._u([
          {
            key: "top",
            fn: function() {
              return [
                _c(
                  "v-toolbar",
                  { attrs: { flat: "" } },
                  [
                    _c("v-toolbar-title", { staticClass: "text-h5" }, [
                      _vm._v("Tipos")
                    ]),
                    _vm._v(" "),
                    _c("v-spacer"),
                    _vm._v(" "),
                    _c("v-btn", { attrs: { color: "primary", dark: "" } }, [
                      _vm._v(
                        "\n                      Agregar Tipo\n                  "
                      )
                    ])
                  ],
                  1
                )
              ]
            },
            proxy: true
          },
          {
            key: "item.actions",
            fn: function(ref) {
              var item = ref.item
              return [
                _c("v-icon", { staticClass: "mr-2", attrs: { small: "" } }, [
                  _vm._v("\n                  mdi-pencil\n              ")
                ]),
                _vm._v(" "),
                _c("v-icon", { attrs: { small: "" } }, [
                  _vm._v("\n                  mdi-delete\n              ")
                ])
              ]
            }
          },
          {
            key: "no-data",
            fn: function() {
              return [_vm._v("\n              No hay datos\n          ")]
            },
            proxy: true
          }
        ])
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Administrador/ModalEditarProducto.vue?vue&type=template&id=497ec00a&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Administrador/ModalEditarProducto.vue?vue&type=template&id=497ec00a&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "v-dialog",
        {
          attrs: { persistent: "", "max-width": "vh" },
          model: {
            value: _vm.editar,
            callback: function($$v) {
              _vm.editar = $$v
            },
            expression: "editar"
          }
        },
        [
          _c(
            "v-card",
            [
              _c("v-card-title", [
                _c("span", { staticClass: "headline" }, [_vm._v("Editar")])
              ]),
              _vm._v(" "),
              _c(
                "v-card-text",
                [
                  _c(
                    "v-container",
                    [
                      _c(
                        "v-row",
                        [
                          _vm.nuevaImagenUrl == ""
                            ? _c(
                                "v-col",
                                { attrs: { cols: "12", sm: "4", md: "4" } },
                                [
                                  _c("v-img", {
                                    attrs: { src: _vm.producto.imagen_url }
                                  }),
                                  _vm._v(" "),
                                  _c("v-file-input", {
                                    attrs: {
                                      label: "File input",
                                      filled: "",
                                      "prepend-icon": "mdi-camera"
                                    },
                                    model: {
                                      value: _vm.nuevaImagen,
                                      callback: function($$v) {
                                        _vm.nuevaImagen = $$v
                                      },
                                      expression: "nuevaImagen"
                                    }
                                  })
                                ],
                                1
                              )
                            : _c(
                                "v-col",
                                { attrs: { cols: "12", sm: "4", md: "4" } },
                                [
                                  _c("v-img", {
                                    attrs: { src: _vm.nuevaImagenUrl }
                                  }),
                                  _vm._v(" "),
                                  _c("v-file-input", {
                                    attrs: {
                                      label: "File input",
                                      filled: "",
                                      "prepend-icon": "mdi-camera"
                                    },
                                    model: {
                                      value: _vm.nuevaImagen,
                                      callback: function($$v) {
                                        _vm.nuevaImagen = $$v
                                      },
                                      expression: "nuevaImagen"
                                    }
                                  })
                                ],
                                1
                              ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { attrs: { cols: "12", sm: "8" } },
                            [
                              _c(
                                "v-row",
                                [
                                  _c(
                                    "v-col",
                                    { attrs: { cols: "12", sm: "2" } },
                                    [
                                      _c("v-text-field", {
                                        attrs: { label: "ID", disabled: "" },
                                        model: {
                                          value: _vm.producto.id,
                                          callback: function($$v) {
                                            _vm.$set(_vm.producto, "id", $$v)
                                          },
                                          expression: "producto.id"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    { attrs: { cols: "12", sm: "10" } },
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          label: "Nombre",
                                          disabled: _vm.opciones.disabled
                                        },
                                        model: {
                                          value: _vm.producto.nombre,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.producto,
                                              "nombre",
                                              $$v
                                            )
                                          },
                                          expression: "producto.nombre"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    { attrs: { cols: "12" } },
                                    [
                                      _c("v-textarea", {
                                        attrs: {
                                          label: "Descripcion",
                                          disabled: _vm.opciones.disabled
                                        },
                                        model: {
                                          value: _vm.producto.descripcion,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.producto,
                                              "descripcion",
                                              $$v
                                            )
                                          },
                                          expression: "producto.descripcion"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    { attrs: { cols: "12", sm: "6" } },
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          label: "Precio",
                                          disabled: _vm.opciones.disabled
                                        },
                                        model: {
                                          value: _vm.producto.precio,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.producto,
                                              "precio",
                                              $$v
                                            )
                                          },
                                          expression: "producto.precio"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    { attrs: { cols: "12", sm: "6" } },
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          label: "Cantidad",
                                          disabled: _vm.opciones.disabled,
                                          type: "number"
                                        },
                                        model: {
                                          value: _vm.producto.cantidad,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.producto,
                                              "cantidad",
                                              $$v
                                            )
                                          },
                                          expression: "producto.cantidad"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    { attrs: { cols: "12" } },
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          label: "Laboratorio",
                                          disabled: _vm.opciones.disabled
                                        },
                                        model: {
                                          value: _vm.producto.laboratorio,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.producto,
                                              "laboratorio",
                                              $$v
                                            )
                                          },
                                          expression: "producto.laboratorio"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    { attrs: { cols: "12" } },
                                    [
                                      _c("v-textarea", {
                                        attrs: {
                                          label: "Indicaciones",
                                          disabled: _vm.opciones.disabled
                                        },
                                        model: {
                                          value: _vm.producto.indicaciones,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.producto,
                                              "indicaciones",
                                              $$v
                                            )
                                          },
                                          expression: "producto.indicaciones"
                                        }
                                      })
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-card-actions",
                [
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { color: "blue darken-1", text: "" },
                      on: { click: _vm.cerrarModal }
                    },
                    [_vm._v("\n                    Cerrar\n                ")]
                  ),
                  _vm._v(" "),
                  _vm.opciones.btn_editar
                    ? _c(
                        "v-btn",
                        {
                          attrs: { color: "blue darken-1", text: "" },
                          on: { click: _vm.editarProducto }
                        },
                        [
                          _vm._v(
                            "\n                    " +
                              _vm._s(_vm.opciones.btn_texto) +
                              "\n                "
                          )
                        ]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.opciones.btn_guardar
                    ? _c(
                        "v-btn",
                        {
                          attrs: { color: "blue darken-1", text: "" },
                          on: { click: _vm.guardarProducto }
                        },
                        [
                          _vm._v(
                            "\n                    " +
                              _vm._s(_vm.opciones.btn_texto) +
                              "\n                "
                          )
                        ]
                      )
                    : _vm._e()
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Administrador/Inventario.vue?vue&type=template&id=62897ec2&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Administrador/Inventario.vue?vue&type=template&id=62897ec2& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-container",
    { attrs: { fluid: "" } },
    [
      _c(
        "v-row",
        { attrs: { align: "center" } },
        [
          _c("v-col", { staticClass: "text-h1", attrs: { cols: "12" } }, [
            _vm._v("\n            Inventario\n        ")
          ]),
          _vm._v(" "),
          _c(
            "v-col",
            { attrs: { cols: "12", sm: "4" } },
            [
              _c(
                "v-btn",
                {
                  attrs: { block: "", color: "green" },
                  on: { click: _vm.nuevoProductoModal }
                },
                [
                  _c("v-icon", { attrs: { left: "" } }, [_vm._v("mdi-plus")]),
                  _vm._v("Nuevo Producto")
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-col",
            { attrs: { cols: "12", sm: "8" } },
            [
              _c("v-text-field", {
                attrs: {
                  "background-color": "white",
                  outlined: "",
                  "prepend-inner-icon": "mdi-magnify",
                  "hide-details": "true",
                  dense: ""
                }
              })
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-row",
        [
          _vm._l(_vm.productos, function(producto) {
            return _c(
              "v-col",
              {
                key: producto.id,
                attrs: { cols: "6", sm: "4", md: "3", lg: "2" }
              },
              [
                _c(
                  "v-card",
                  [
                    _c(
                      "v-app-bar",
                      {
                        attrs: {
                          color: _vm.colorCard(producto.cantidad),
                          flat: "",
                          dense: ""
                        }
                      },
                      [
                        _c("v-toolbar-title", [
                          _c("div", { staticClass: "text-subtitle-2" }, [
                            _vm._v(
                              "\n                            " +
                                _vm._s(producto.nombre) +
                                "\n                        "
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c("v-spacer"),
                        _vm._v(" "),
                        _c(
                          "v-btn",
                          {
                            attrs: { icon: "" },
                            on: {
                              click: function($event) {
                                return _vm.editarProductoModal(producto)
                              }
                            }
                          },
                          [_c("v-icon", [_vm._v("mdi-pencil")])],
                          1
                        ),
                        _vm._v(" "),
                        _c("v-icon", [_vm._v("mdi-delete")])
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "v-row",
                      { attrs: { align: "center", "no-gutters": "" } },
                      [
                        _c(
                          "v-col",
                          { attrs: { cols: "6" } },
                          [
                            _c("v-img", {
                              attrs: {
                                src: producto.imagen_url,
                                height: "100px",
                                contain: ""
                              }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "v-col",
                          { staticClass: "text-center", attrs: { cols: "6" } },
                          [
                            _c("div", [
                              _vm._v("Precio: " + _vm._s(producto.precio))
                            ]),
                            _vm._v(" "),
                            _c("div", [
                              _vm._v("Cantidad: " + _vm._s(producto.cantidad))
                            ]),
                            _vm._v(" "),
                            _c(
                              "v-btn",
                              {
                                attrs: { "x-small": "", color: "blue" },
                                on: {
                                  click: function($event) {
                                    return _vm.detalleProductoModal(producto)
                                  }
                                }
                              },
                              [_vm._v("Detalles")]
                            )
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ],
                  1
                )
              ],
              1
            )
          }),
          _vm._v(" "),
          _c(
            "v-col",
            { attrs: { cols: "12" } },
            [
              _c("v-pagination", {
                attrs: { length: 10 },
                model: {
                  value: _vm.page,
                  callback: function($$v) {
                    _vm.page = $$v
                  },
                  expression: "page"
                }
              })
            ],
            1
          )
        ],
        2
      ),
      _vm._v(" "),
      _c(
        "v-row",
        [
          _c(
            "v-col",
            { attrs: { cols: "12", md: "6" } },
            [_c("DataCategorias")],
            1
          ),
          _vm._v(" "),
          _c(
            "v-col",
            { attrs: { cols: "12", md: "6" } },
            [_c("DataTipoProductos")],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("ModalEditarProducto", {
        attrs: {
          editar: _vm.editar,
          producto: _vm.productoEditar,
          opciones: _vm.opciones
        },
        on: {
          editarProducto: _vm.editarProductoModal,
          guardarProducto: _vm.guardarProducto,
          cerrarModal: _vm.cerrar
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);