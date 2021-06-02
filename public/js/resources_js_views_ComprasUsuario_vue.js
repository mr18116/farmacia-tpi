(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_ComprasUsuario_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/ComprasUsuario.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/ComprasUsuario.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      headers: [{
        text: 'Fecha',
        value: 'created_at',
        sorteable: true
      }, {
        text: 'Direcion',
        value: 'direccion',
        sortable: true
      }, {
        text: 'Metodo de pago',
        value: 'metodo_pagos.tipo',
        sortable: true
      }, {
        text: 'Forma de envio',
        value: 'formas_envios.empresa',
        sortable: true
      }, {
        text: 'Total',
        value: 'total',
        sortable: true
      }],
      compras: []
    };
  },
  created: function created() {
    var _this = this;

    if (this.$store.state.user != null) {
      axios.get('/api/facturas-user/' + this.$store.state.user.id).then(function (response) {
        _this.compras = response.data;
      });
    }
  },
  watch: {
    '$store.state.user': function $storeStateUser(n, o) {
      var _this2 = this;

      if (this.$store.state.user != null) {
        axios.get('/api/facturas-user/' + this.$store.state.user.id).then(function (response) {
          _this2.compras = response.data;
        });
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/views/ComprasUsuario.vue":
/*!***********************************************!*\
  !*** ./resources/js/views/ComprasUsuario.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ComprasUsuario_vue_vue_type_template_id_c53fedd0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ComprasUsuario.vue?vue&type=template&id=c53fedd0& */ "./resources/js/views/ComprasUsuario.vue?vue&type=template&id=c53fedd0&");
/* harmony import */ var _ComprasUsuario_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ComprasUsuario.vue?vue&type=script&lang=js& */ "./resources/js/views/ComprasUsuario.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _ComprasUsuario_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _ComprasUsuario_vue_vue_type_template_id_c53fedd0___WEBPACK_IMPORTED_MODULE_0__.render,
  _ComprasUsuario_vue_vue_type_template_id_c53fedd0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/ComprasUsuario.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/ComprasUsuario.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/views/ComprasUsuario.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ComprasUsuario_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ComprasUsuario.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/ComprasUsuario.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ComprasUsuario_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/ComprasUsuario.vue?vue&type=template&id=c53fedd0&":
/*!******************************************************************************!*\
  !*** ./resources/js/views/ComprasUsuario.vue?vue&type=template&id=c53fedd0& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ComprasUsuario_vue_vue_type_template_id_c53fedd0___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ComprasUsuario_vue_vue_type_template_id_c53fedd0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ComprasUsuario_vue_vue_type_template_id_c53fedd0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ComprasUsuario.vue?vue&type=template&id=c53fedd0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/ComprasUsuario.vue?vue&type=template&id=c53fedd0&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/ComprasUsuario.vue?vue&type=template&id=c53fedd0&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/ComprasUsuario.vue?vue&type=template&id=c53fedd0& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
      _c("v-app-bar", { staticClass: "px-5", attrs: { color: "#0077c9" } }),
      _vm._v(" "),
      _c(
        "v-row",
        { attrs: { align: "center" } },
        [
          _c("v-col", { staticClass: "text-h1", attrs: { cols: "12" } }, [
            _vm._v("\n              Compras\n          ")
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-row",
        [
          _c(
            "v-col",
            { attrs: { cols: "12" } },
            [
              _c("v-data-table", {
                staticClass: "elevation-1",
                attrs: {
                  headers: _vm.headers,
                  items: _vm.compras,
                  "items-per-page": 10
                },
                scopedSlots: _vm._u([
                  {
                    key: "no-data",
                    fn: function() {
                      return [
                        _vm._v(
                          "\n                      No hay datos\n                  "
                        )
                      ]
                    },
                    proxy: true
                  }
                ])
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
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);