(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/jobs/tab/AssignedJobs.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/jobs/tab/AssignedJobs.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../_helpers/router */ "./resources/js/_helpers/router.js");
/* harmony import */ var _services_job_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../_services/job.service */ "./resources/js/_services/job.service.js");
/* harmony import */ var _config_test_env__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../config/test.env */ "./resources/js/config/test.env.js");
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: {
    PlusCircleIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_3__["PlusCircleIcon"]
  },
  data: function data() {
    return {
      tab: null,
      items: ["All Jobs", "Assigned Jobs", "Completed Jobs", "Open Jobs", "Repeating Jobs", "Unpaid Jobs"],
      assignedJobs: "",
      headers: [{
        text: 'Image',
        align: 'left',
        sortable: false,
        value: 'image'
      }, {
        text: 'Job Summary',
        value: 'summary'
      }, {
        text: 'Sort By',
        value: 'sort'
      }, {
        text: 'Techs',
        value: 'techs'
      }, {
        text: 'Time',
        value: 'time'
      }, {
        text: 'Distance',
        value: 'distance'
      }, {
        text: 'Payment',
        value: 'payment'
      }, {
        text: 'Chat',
        value: 'chat'
      }],
      jobsDetails: [{
        image: '',
        summary: 999,
        sort: '',
        time: 9,
        distance: 30,
        payment: 999,
        chat: ''
      }]
    };
  },
  created: function created() {},
  mounted: function mounted() {
    this.getResults();
  },
  methods: {
    getResults: function getResults() {
      var _this = this;

      _services_job_service__WEBPACK_IMPORTED_MODULE_1__["jobService"].joblist().then(function (response) {
        //handle response
        if (response.status) {
          _this.alljobs = response.data;
          console.log(_this.alljobs);
        } else {
          _this.$toast.open({
            message: response.message,
            type: "error",
            position: "top-right"
          });
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/jobs/tab/AssignedJobs.vue?vue&type=template&id=462b2afc&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/jobs/tab/AssignedJobs.vue?vue&type=template&id=462b2afc& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
    "v-container",
    {
      staticClass: "pt-0",
      attrs: { id: "dashboard", fluid: "", tag: "section" }
    },
    [
      _c(
        "v-row",
        [
          _c("v-data-table", {
            staticClass: "wd-100",
            attrs: { headers: _vm.headers, items: _vm.jobsDetails },
            scopedSlots: _vm._u([
              {
                key: "items",
                fn: function(props) {
                  return [
                    _c("td", [_vm._v(_vm._s(props.item.image))]),
                    _vm._v(" "),
                    _c("td", { staticClass: "text-xs-right" }, [
                      _vm._v(_vm._s(props.item.summary))
                    ]),
                    _vm._v(" "),
                    _c("td", { staticClass: "text-xs-right" }, [
                      _vm._v(_vm._s(props.item.sort))
                    ]),
                    _vm._v(" "),
                    _c("td", { staticClass: "text-xs-right" }, [
                      _vm._v(_vm._s(props.item.techs))
                    ]),
                    _vm._v(" "),
                    _c("td", { staticClass: "text-xs-right" }, [
                      _vm._v(_vm._s(props.item.time))
                    ]),
                    _vm._v(" "),
                    _c("td", { staticClass: "text-xs-right" }, [
                      _vm._v(_vm._s(props.item.distance))
                    ]),
                    _vm._v(" "),
                    _c("td", { staticClass: "text-xs-right" }, [
                      _vm._v(_vm._s(props.item.payment))
                    ]),
                    _vm._v(" "),
                    _c("td", { staticClass: "text-xs-right" }, [
                      _vm._v(_vm._s(props.item.chat))
                    ])
                  ]
                }
              }
            ])
          })
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

/***/ "./resources/js/components/admin/jobs/tab/AssignedJobs.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/components/admin/jobs/tab/AssignedJobs.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AssignedJobs_vue_vue_type_template_id_462b2afc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AssignedJobs.vue?vue&type=template&id=462b2afc& */ "./resources/js/components/admin/jobs/tab/AssignedJobs.vue?vue&type=template&id=462b2afc&");
/* harmony import */ var _AssignedJobs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AssignedJobs.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/jobs/tab/AssignedJobs.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AssignedJobs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AssignedJobs_vue_vue_type_template_id_462b2afc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AssignedJobs_vue_vue_type_template_id_462b2afc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/jobs/tab/AssignedJobs.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/jobs/tab/AssignedJobs.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/admin/jobs/tab/AssignedJobs.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AssignedJobs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AssignedJobs.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/jobs/tab/AssignedJobs.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AssignedJobs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/jobs/tab/AssignedJobs.vue?vue&type=template&id=462b2afc&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/admin/jobs/tab/AssignedJobs.vue?vue&type=template&id=462b2afc& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AssignedJobs_vue_vue_type_template_id_462b2afc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AssignedJobs.vue?vue&type=template&id=462b2afc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/jobs/tab/AssignedJobs.vue?vue&type=template&id=462b2afc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AssignedJobs_vue_vue_type_template_id_462b2afc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AssignedJobs_vue_vue_type_template_id_462b2afc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);