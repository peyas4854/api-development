(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/product.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/product.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_backend_product_productModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/backend/product/productModal */ "./resources/js/components/backend/product/productModal.vue");
/* harmony import */ var _helper_commonMethods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helper/commonMethods */ "./resources/js/helper/commonMethods.js");
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


/* harmony default export */ __webpack_exports__["default"] = ({
  "extends": _helper_commonMethods__WEBPACK_IMPORTED_MODULE_1__["default"],
  components: {
    productmodal: _components_backend_product_productModal__WEBPACK_IMPORTED_MODULE_0__["default"],
    commonMethod: _helper_commonMethods__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      product: "",
      message: "",
      modalID: "#add-edit-modal",
      dataset: {
        source: "http://127.0.0.1:8000/api/products",
        //same as data from server
        headers: ["Name", "Price", "Discount", "Stock"],
        colums: [{
          title: " Name",
          key: "name",
          type: "text"
        }, {
          title: " Price",
          key: "price",
          type: "text"
        }, {
          title: " Discount",
          key: "discount",
          type: "text"
        }, {
          title: " Stock",
          key: "stock",
          type: "text"
        }, {
          title: " Created By",
          key: "created_by",
          type: "text"
        }, {
          title: " Action",
          key: "action",
          type: "component"
        }]
      }
    };
  },
  mounted: function mounted() {
    var instance = this;
    this.$hub.$on("addEdit", function (id) {
      instance.addEdit(id);
    });
    this.modalCloseAction(this.modalID);
    this.$hub.$on("deleteMethod", function (id) {
      console.log("delete route", id);
      instance.axiosDelete("http://127.0.0.1:8000/api/products/" + id);
    });
  },
  created: function created() {//this.getProduct("http://127.0.0.1:8000/api/products");
    //this.setPreloader(true);
  },
  methods: {
    getProduct: function getProduct(route) {
      var instance = this;
      instance.axiosGet(route, function (response) {
        //console.log("paici response ", response);
        instance.product = response.data.data;
        instance.message = response.data.message;
        instance.setPreloader(false);
      }, function (response) {
        // console.log("paici 2", response);
        instance.setPreloader(true);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/product.vue?vue&type=template&id=5ecfa9c0&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/product.vue?vue&type=template&id=5ecfa9c0&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "main_wrapper" }, [
    _c("div", { staticClass: "main_wrapper_top_header" }, [
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "header_content_button" }, [
        _c(
          "button",
          {
            staticClass: "btn btn-primary app_primary_btn",
            attrs: { "data-toggle": "modal", "data-target": "#add-edit-modal" },
            on: {
              click: function($event) {
                return _vm.addEdit("")
              }
            }
          },
          [_vm._v("Add")]
        )
      ])
    ]),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "modal fade",
        attrs: {
          id: "add-edit-modal",
          tabindex: "-1",
          role: "dialog",
          "aria-hidden": "true"
        }
      },
      [
        _c(
          "div",
          {
            staticClass: "modal-dialog modal-dialog-centered",
            attrs: { role: "document" }
          },
          [
            _vm.isActive
              ? _c("productmodal", {
                  ref: "vuemodal",
                  staticClass: "modal-content",
                  attrs: { id: _vm.selectedItemId, modalID: _vm.modalID }
                })
              : _vm._e()
          ],
          1
        )
      ]
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "main_wrapper_card_content" },
      [_c("datatable", { attrs: { dataset: _vm.dataset } })],
      1
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "header_content my-auto" }, [
      _c("h4", [_vm._v("Product")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/product.vue":
/*!****************************************!*\
  !*** ./resources/js/views/product.vue ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _product_vue_vue_type_template_id_5ecfa9c0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product.vue?vue&type=template&id=5ecfa9c0&scoped=true& */ "./resources/js/views/product.vue?vue&type=template&id=5ecfa9c0&scoped=true&");
/* harmony import */ var _product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product.vue?vue&type=script&lang=js& */ "./resources/js/views/product.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _product_vue_vue_type_template_id_5ecfa9c0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _product_vue_vue_type_template_id_5ecfa9c0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "5ecfa9c0",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/product.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/product.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./resources/js/views/product.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./product.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/product.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/product.vue?vue&type=template&id=5ecfa9c0&scoped=true&":
/*!***********************************************************************************!*\
  !*** ./resources/js/views/product.vue?vue&type=template&id=5ecfa9c0&scoped=true& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_product_vue_vue_type_template_id_5ecfa9c0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./product.vue?vue&type=template&id=5ecfa9c0&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/product.vue?vue&type=template&id=5ecfa9c0&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_product_vue_vue_type_template_id_5ecfa9c0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_product_vue_vue_type_template_id_5ecfa9c0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);