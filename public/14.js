(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/calendar.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/calendar.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fullcalendar_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fullcalendar/vue */ "./node_modules/@fullcalendar/vue/dist/main.js");
/* harmony import */ var _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fullcalendar/daygrid */ "./node_modules/@fullcalendar/daygrid/main.js");
/* harmony import */ var _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fullcalendar/timegrid */ "./node_modules/@fullcalendar/timegrid/main.js");
/* harmony import */ var _fullcalendar_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fullcalendar/list */ "./node_modules/@fullcalendar/list/main.js");
/* harmony import */ var _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fullcalendar/interaction */ "./node_modules/@fullcalendar/interaction/main.js");
/* harmony import */ var _helper_commonMethods__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helper/commonMethods */ "./resources/js/helper/commonMethods.js");
/* harmony import */ var _components_base_preloader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/base/preloader */ "./resources/js/components/base/preloader.vue");
/* harmony import */ var _components_backend_product_productModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/backend/product/productModal */ "./resources/js/components/backend/product/productModal.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  "extends": _helper_commonMethods__WEBPACK_IMPORTED_MODULE_5__["default"],
  components: {
    FullCalendar: _fullcalendar_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    productmodal: _components_backend_product_productModal__WEBPACK_IMPORTED_MODULE_7__["default"]
  },
  data: function data() {
    return {
      calendarOptions: {
        plugins: [_fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_1__["default"], _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_2__["default"], _fullcalendar_list__WEBPACK_IMPORTED_MODULE_3__["default"], _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_4__["default"]],
        weekends: true,
        initialView: "dayGridMonth",
        dateClick: this.handleDateClick,
        headerToolbar: {
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay"
        },
        selectable: true,
        events: [] // events: [
        //   {
        //     title: "event 1",
        //     start: "2020-08-03",
        //     end: "2020-08-05",
        //     // className: "bg-color",
        //     //  backgroundColor: "blue",
        //     //borderColor: "black",
        //     //textColor: "red",
        //     editable: true,
        //   },
        //   {
        //     title: "event 2",
        //     date: "2020-08-24",
        //   },
        // ],

      },
      modalID: "#add-edit-modal"
    };
  },
  mounted: function mounted() {
    var instance = this;
    this.$hub.$on("addEdit", function (id) {
      instance.addEdit(id);
    });
    this.modalCloseAction(this.modalID);
  },
  created: function created() {
    this.getevent("/event");
  },
  methods: {
    getevent: function getevent(route) {
      var instance = this;
      instance.axiosGet(route, function (response) {
        console.log("response", response.data.data);
        instance.calendarOptions.events = response.data.data; //preloader set globally in comoon axois
      }, function (error) {
        console.log("user erro", error);
      });
    },
    handleDateClick: function handleDateClick(arg) {
      alert("date click! " + arg.dateStr);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/calendar.vue?vue&type=template&id=2c47dc3d&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/calendar.vue?vue&type=template&id=2c47dc3d&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c("div", { staticClass: "main_wrapper" }, [
      _c("div", { staticClass: "main_wrapper_top_header" }, [
        _vm._m(0),
        _vm._v(" "),
        _c("div", { staticClass: "header_content_button" }, [
          _c(
            "button",
            {
              staticClass: "btn btn-primary app_primary_btn",
              attrs: {
                "data-toggle": "modal",
                "data-target": "#add-edit-modal"
              },
              on: {
                click: function($event) {
                  return _vm.addEdit("")
                }
              }
            },
            [_vm._v("Add")]
          )
        ])
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
      [
        _vm.preLoader == true
          ? _c("preloader")
          : _c(
              "div",
              [_c("FullCalendar", { attrs: { options: _vm.calendarOptions } })],
              1
            )
      ],
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
      _c("h4", [_vm._v("Calendar")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/calendar.vue":
/*!*****************************************!*\
  !*** ./resources/js/views/calendar.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _calendar_vue_vue_type_template_id_2c47dc3d_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calendar.vue?vue&type=template&id=2c47dc3d&scoped=true& */ "./resources/js/views/calendar.vue?vue&type=template&id=2c47dc3d&scoped=true&");
/* harmony import */ var _calendar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calendar.vue?vue&type=script&lang=js& */ "./resources/js/views/calendar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _calendar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _calendar_vue_vue_type_template_id_2c47dc3d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _calendar_vue_vue_type_template_id_2c47dc3d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "2c47dc3d",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/calendar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/calendar.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./resources/js/views/calendar.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_calendar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./calendar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/calendar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_calendar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/calendar.vue?vue&type=template&id=2c47dc3d&scoped=true&":
/*!************************************************************************************!*\
  !*** ./resources/js/views/calendar.vue?vue&type=template&id=2c47dc3d&scoped=true& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_calendar_vue_vue_type_template_id_2c47dc3d_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./calendar.vue?vue&type=template&id=2c47dc3d&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/calendar.vue?vue&type=template&id=2c47dc3d&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_calendar_vue_vue_type_template_id_2c47dc3d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_calendar_vue_vue_type_template_id_2c47dc3d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);