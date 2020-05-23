(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/singleproduct.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/singleproduct.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helper_commonMethods__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper/commonMethods */ "./resources/js/helper/commonMethods.js");
/* harmony import */ var _components_base_preloader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/base/preloader */ "./resources/js/components/base/preloader.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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



/* harmony default export */ __webpack_exports__["default"] = ({
  "extends": _helper_commonMethods__WEBPACK_IMPORTED_MODULE_0__["default"],
  components: {
    preLoader: _components_base_preloader__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      id: this.$route.params.id,
      reviewData: "",
      review: ""
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapGetters"])(["User"]), {
    avg_review: function avg_review() {
      var total = this.reviewData.reduce(function (prev, cur) {
        return prev + cur.star;
      }, 0);
      return Math.round(total / this.reviewData.length);
    }
  }),
  created: function created() {
    console.log(["product id", this.id], ["user", this.User]);
    this.getreview("http://127.0.0.1:8000/api/products/" + this.id + "/reviews");
  },
  methods: {
    getreview: function getreview(route) {
      var instance = this;
      instance.preLoader = true;
      instance.axiosGet(route, function (response) {
        console.log("paici response ", response);
        instance.reviewData = response.data.data;
        var url = "https://dummyimage.com/vga";
      }, function (response) {
        console.log("paici 2", response);
      });
    },
    submitReview: function submitReview() {
      var instance = this;
      instance.inputField = {
        customer: this.User.name,
        review: this.review,
        star: 3
      };
      console.log("input", instance.inputField);
      instance.postDataMethod("http://127.0.0.1:8000/api/products/" + this.id + "/reviews", this.inputField);
    },
    postDataSuccess: function postDataSuccess(response) {
      this.review = "";
      console.log("reponse", response);
      this.getreview("http://127.0.0.1:8000/api/products/" + this.id + "/reviews");
    },
    postDataError: function postDataError(error) {
      //this.errors = error.errors;
      console.log("error", error);
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/singleproduct.vue?vue&type=style&index=0&id=07a539b8&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/singleproduct.vue?vue&type=style&index=0&id=07a539b8&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.flex1[data-v-07a539b8] {\n  flex: 1;\n}\n.flex2[data-v-07a539b8] {\n  flex: 2;\n}\n.card-body.review-content[data-v-07a539b8] {\n  border-bottom: 1px solid black;\n}\n.rating_number[data-v-07a539b8] {\n  height: rem;\n  padding: 20px;\n  justify-content: center;\n  display: flex;\n  align-items: center;\n  font-size: 40px;\n  font-weight: 600;\n  font-family: Roboto;\n  color: #02000a;\n}\n.checked[data-v-07a539b8] {\n  color: orange;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/singleproduct.vue?vue&type=style&index=0&id=07a539b8&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/singleproduct.vue?vue&type=style&index=0&id=07a539b8&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./singleproduct.vue?vue&type=style&index=0&id=07a539b8&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/singleproduct.vue?vue&type=style&index=0&id=07a539b8&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/singleproduct.vue?vue&type=template&id=07a539b8&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/singleproduct.vue?vue&type=template&id=07a539b8&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    [
      _vm.preLoader == true
        ? _c("preLoader")
        : _c("div", [
            _c("div", { staticClass: "image" }, [
              _c("img", {
                staticClass: "figure-img img-fluid rounded",
                attrs: { src: "https://dummyimage.com/vga", alt: "image" }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "rating-div mb-3" }, [
              _c("div", { staticClass: "card" }, [
                _c("div", { staticClass: "card-body" }, [
                  _c("h3", [_vm._v("Rating")]),
                  _vm._v(" "),
                  _c("div", { staticClass: "top d-flex flex-row" }, [
                    _c("div", { staticClass: "flex1" }, [
                      _c("div", { staticClass: "rating_number" }, [
                        _vm._v(_vm._s(_vm.avg_review) + "/5")
                      ])
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "flex2" }, [_vm._v("name")]),
                    _vm._v(" "),
                    _c("div", { staticClass: "flex1" }, [
                      _c("div", { staticClass: "rating_number" }, [
                        _vm._v(
                          "\n                " +
                            _vm._s(_vm.reviewData.length) +
                            "\n                "
                        ),
                        _c("span", { staticClass: "h6 ml-2 my-auto" }, [
                          _vm._v("Review")
                        ])
                      ])
                    ])
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "product-review" }, [
              _c(
                "div",
                { staticClass: "card" },
                _vm._l(_vm.reviewData, function(reviews, i) {
                  return _c(
                    "div",
                    { key: i, staticClass: "card-body review-content" },
                    [
                      _c("div", { staticClass: "d-flex" }, [
                        _c(
                          "p",
                          { staticClass: "flex1" },
                          _vm._l(reviews.star, function(star, i) {
                            return _c("span", {
                              key: i,
                              staticClass: "fa fa-star checked"
                            })
                          }),
                          0
                        ),
                        _vm._v(" "),
                        _c("p", {}, [_vm._v(_vm._s(reviews.created_at))])
                      ]),
                      _vm._v(" "),
                      _c("p", [_vm._v(_vm._s(reviews.review))]),
                      _vm._v(" "),
                      _c("p", [_vm._v("By " + _vm._s(reviews.customer_name))])
                    ]
                  )
                }),
                0
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "create-review" }, [
              _c("div", { staticClass: "card" }, [
                _c("div", { staticClass: "card-body" }, [
                  _c("label", { attrs: { for: "description" } }, [
                    _vm._v("Review")
                  ]),
                  _vm._v(" "),
                  _c("textarea", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.review,
                        expression: "review"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      type: "text",
                      placeholder: "Want to give a review ..."
                    },
                    domProps: { value: _vm.review },
                    on: {
                      keypress: function($event) {
                        if (
                          !$event.type.indexOf("key") &&
                          _vm._k(
                            $event.keyCode,
                            "enter",
                            13,
                            $event.key,
                            "Enter"
                          )
                        ) {
                          return null
                        }
                        return _vm.submitReview()
                      },
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.review = $event.target.value
                      }
                    }
                  })
                ])
              ])
            ])
          ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/singleproduct.vue":
/*!**********************************************!*\
  !*** ./resources/js/views/singleproduct.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _singleproduct_vue_vue_type_template_id_07a539b8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./singleproduct.vue?vue&type=template&id=07a539b8&scoped=true& */ "./resources/js/views/singleproduct.vue?vue&type=template&id=07a539b8&scoped=true&");
/* harmony import */ var _singleproduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./singleproduct.vue?vue&type=script&lang=js& */ "./resources/js/views/singleproduct.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _singleproduct_vue_vue_type_style_index_0_id_07a539b8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./singleproduct.vue?vue&type=style&index=0&id=07a539b8&scoped=true&lang=css& */ "./resources/js/views/singleproduct.vue?vue&type=style&index=0&id=07a539b8&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _singleproduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _singleproduct_vue_vue_type_template_id_07a539b8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _singleproduct_vue_vue_type_template_id_07a539b8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "07a539b8",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/singleproduct.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/singleproduct.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/views/singleproduct.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_singleproduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./singleproduct.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/singleproduct.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_singleproduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/singleproduct.vue?vue&type=style&index=0&id=07a539b8&scoped=true&lang=css&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/views/singleproduct.vue?vue&type=style&index=0&id=07a539b8&scoped=true&lang=css& ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_singleproduct_vue_vue_type_style_index_0_id_07a539b8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./singleproduct.vue?vue&type=style&index=0&id=07a539b8&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/singleproduct.vue?vue&type=style&index=0&id=07a539b8&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_singleproduct_vue_vue_type_style_index_0_id_07a539b8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_singleproduct_vue_vue_type_style_index_0_id_07a539b8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_singleproduct_vue_vue_type_style_index_0_id_07a539b8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_singleproduct_vue_vue_type_style_index_0_id_07a539b8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_singleproduct_vue_vue_type_style_index_0_id_07a539b8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/views/singleproduct.vue?vue&type=template&id=07a539b8&scoped=true&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/views/singleproduct.vue?vue&type=template&id=07a539b8&scoped=true& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_singleproduct_vue_vue_type_template_id_07a539b8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./singleproduct.vue?vue&type=template&id=07a539b8&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/singleproduct.vue?vue&type=template&id=07a539b8&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_singleproduct_vue_vue_type_template_id_07a539b8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_singleproduct_vue_vue_type_template_id_07a539b8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);