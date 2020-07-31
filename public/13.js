(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/schedule.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/schedule.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fullcalendar_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fullcalendar/vue */ "./node_modules/@fullcalendar/vue/dist/main.js");
/* harmony import */ var _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fullcalendar/daygrid */ "./node_modules/@fullcalendar/daygrid/main.js");
/* harmony import */ var _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fullcalendar/timegrid */ "./node_modules/@fullcalendar/timegrid/main.js");
/* harmony import */ var _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fullcalendar/interaction */ "./node_modules/@fullcalendar/interaction/main.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



 //import { INITIAL_EVENTS, createEventId } from './event-utils'

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    FullCalendar: _fullcalendar_vue__WEBPACK_IMPORTED_MODULE_0__["default"] // make the <FullCalendar> tag available

  },
  data: function data() {
    return {
      calendarOptions: {
        plugins: [_fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_1__["default"], _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_2__["default"], _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_3__["default"] // needed for dateClick
        ],
        headerToolbar: {
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay'
        },
        initialView: 'dayGridMonth',
        //initialEvents: INITIAL_EVENTS, // alternatively, use the `events` setting to fetch from a feed
        editable: true,
        selectable: true,
        selectMirror: true,
        dayMaxEvents: true,
        events: [{
          title: "event 1",
          date: "2020-07-06"
        }, {
          title: "event 2",
          date: "2020-07-30"
        }],
        //weekends: true,
        select: this.handleDateSelect,
        eventClick: this.handleEventClick //eventsSet: this.handleEvents

        /* you can update a remote database when these fire:
        eventAdd:
        eventChange:
        eventRemove:
        */

      },
      currentEvents: [{
        title: "event 2",
        date: "2020-07-3"
      }]
    };
  },
  methods: {
    handleWeekendsToggle: function handleWeekendsToggle() {
      this.calendarOptions.weekends = !this.calendarOptions.weekends; // update a property
    },
    handleDateSelect: function handleDateSelect(selectInfo) {
      var title = prompt('Please enter a new title for your event');
      var calendarApi = selectInfo.view.calendar;
      calendarApi.unselect(); // clear date selection

      if (title) {
        calendarApi.addEvent({
          id: '12',
          title: title,
          start: selectInfo.startStr,
          end: selectInfo.endStr,
          allDay: selectInfo.allDay
        });
      }
    },
    handleEventClick: function handleEventClick(clickInfo) {
      if (confirm("Are you sure you want to delete the event '".concat(clickInfo.event.title, "'"))) {
        clickInfo.event.remove();
      }
    },
    handleEvents: function handleEvents(events) {
      this.currentEvents = events;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/schedule.vue?vue&type=template&id=f2dbc1d4&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/schedule.vue?vue&type=template&id=f2dbc1d4&scoped=true& ***!
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
  return _c("div", { staticClass: "main_wrapper" }, [
    _c("div", { staticClass: "demo-app-sidebar" }, [
      _c("div", { staticClass: "demo-app-sidebar-section" }, [
        _c("h2", [
          _vm._v("All Events (" + _vm._s(_vm.currentEvents.length) + ")")
        ]),
        _vm._v(" "),
        _c(
          "ul",
          _vm._l(_vm.currentEvents, function(event) {
            return _c("li", { key: event.id }, [
              _c("b", [_vm._v(_vm._s(event.startStr))]),
              _vm._v(" "),
              _c("i", [_vm._v(_vm._s(event.title))])
            ])
          }),
          0
        )
      ])
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "demo-app-main" },
      [
        _c("FullCalendar", {
          staticClass: "demo-app-calendar",
          attrs: { options: _vm.calendarOptions },
          scopedSlots: _vm._u([
            {
              key: "eventContent",
              fn: function(arg) {
                return [
                  _c("b", [_vm._v(_vm._s(arg.timeText))]),
                  _vm._v(" "),
                  _c("i", [_vm._v(_vm._s(arg.event.title))])
                ]
              }
            }
          ])
        })
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/schedule.vue":
/*!*****************************************!*\
  !*** ./resources/js/views/schedule.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _schedule_vue_vue_type_template_id_f2dbc1d4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./schedule.vue?vue&type=template&id=f2dbc1d4&scoped=true& */ "./resources/js/views/schedule.vue?vue&type=template&id=f2dbc1d4&scoped=true&");
/* harmony import */ var _schedule_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./schedule.vue?vue&type=script&lang=js& */ "./resources/js/views/schedule.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _schedule_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _schedule_vue_vue_type_template_id_f2dbc1d4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _schedule_vue_vue_type_template_id_f2dbc1d4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "f2dbc1d4",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/schedule.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/schedule.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./resources/js/views/schedule.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_schedule_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./schedule.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/schedule.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_schedule_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/schedule.vue?vue&type=template&id=f2dbc1d4&scoped=true&":
/*!************************************************************************************!*\
  !*** ./resources/js/views/schedule.vue?vue&type=template&id=f2dbc1d4&scoped=true& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_schedule_vue_vue_type_template_id_f2dbc1d4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./schedule.vue?vue&type=template&id=f2dbc1d4&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/schedule.vue?vue&type=template&id=f2dbc1d4&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_schedule_vue_vue_type_template_id_f2dbc1d4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_schedule_vue_vue_type_template_id_f2dbc1d4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);