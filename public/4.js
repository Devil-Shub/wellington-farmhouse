(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/accounting/tab/salary.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/accounting/tab/salary.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../_helpers/router */ "./resources/js/_helpers/router.js");
/* harmony import */ var _config_test_env__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../config/test.env */ "./resources/js/config/test.env.js");
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var _services_accounting_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../_services/accounting.service */ "./resources/js/_services/accounting.service.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    PlusCircleIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_2__["PlusCircleIcon"]
  },
  data: function data() {
    return {
      salaryJobs: ''
    };
  },
  mounted: function mounted() {
    this.invoiceList();
  },
  methods: {
    invoiceList: function invoiceList() {
      var _this = this;

      _services_accounting_service__WEBPACK_IMPORTED_MODULE_3__["accountingService"].jobSalary().then(function (response) {
        //handle response
        if (response.status) {
          _this.salaryJobs = response.data;
        } else {
          _this.$toast.open({
            message: response.message,
            type: "error",
            position: "top-right"
          });
        }
      });
    }
  },
  updated: function updated() {
    setTimeout(function () {
      $(document).ready(function () {
        $('#jobpayment').DataTable();
      });
    }, 1000);
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/accounting/tab/salary.vue?vue&type=template&id=64866483&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/accounting/tab/salary.vue?vue&type=template&id=64866483& ***!
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
          _c("v-col", { attrs: { sm: "12", cols: "12" } }, [
            _c(
              "table",
              {
                staticClass: "table table-striped table-bordered",
                staticStyle: { width: "100%" },
                attrs: { id: "example" }
              },
              [
                _c("thead", [
                  _c("tr", [
                    _c("th", [_vm._v("Image")]),
                    _vm._v(" "),
                    _c("th", [_vm._v("Employee Name")]),
                    _vm._v(" "),
                    _c("th", [_vm._v("Contact Number")]),
                    _vm._v(" "),
                    _c("th", [_vm._v("Designation")]),
                    _vm._v(" "),
                    _c("th", [_vm._v("Month")]),
                    _vm._v(" "),
                    _c("th", [_vm._v("Year")]),
                    _vm._v(" "),
                    _c("th", [_vm._v("Total Salary")]),
                    _vm._v(" "),
                    _c("th", [_vm._v("View Detail")])
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "tbody",
                  _vm._l(_vm.salaryJobs, function(salary, index) {
                    return _c("tr", [
                      _c("td", [_vm._v(_vm._s(index + 1))]),
                      _vm._v(" "),
                      _c(
                        "td",
                        [
                          _c(
                            "router-link",
                            {
                              staticClass: "nav-item nav-link",
                              attrs: {
                                to: "/admin/truckdriver/edit/" + salary.user.id
                              }
                            },
                            [_vm._v(_vm._s(salary.user.first_name))]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(salary.user.phone))]),
                      _vm._v(" "),
                      _c(
                        "td",
                        [
                          salary.user.driver.driver_type
                            ? [_vm._v("Truck Driver")]
                            : _vm._e(),
                          _vm._v(" "),
                          !salary.user.driver.driver_type
                            ? [_vm._v("Skidsteer Driver")]
                            : _vm._e()
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(_vm._s(_vm._f("formatMonth")(salary.updated_at)))
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(_vm._s(_vm._f("formatYear")(salary.updated_at)))
                      ]),
                      _vm._v(" "),
                      _c("td", [_vm._v("$" + _vm._s(salary.salary))]),
                      _vm._v(" "),
                      _c("td", [_vm._v("View Details")])
                    ])
                  }),
                  0
                )
              ]
            )
          ])
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

/***/ "./resources/js/_services/accounting.service.js":
/*!******************************************************!*\
  !*** ./resources/js/_services/accounting.service.js ***!
  \******************************************************/
/*! exports provided: accountingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "accountingService", function() { return accountingService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _helpers_request_options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_helpers/request-options */ "./resources/js/_helpers/request-options.js");
/* harmony import */ var _helpers_handle_response__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_helpers/handle-response */ "./resources/js/_helpers/handle-response.js");
/* harmony import */ var _config_test_env__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config/test.env */ "./resources/js/config/test.env.js");




var currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](JSON.parse(localStorage.getItem("currentUser")));
var accountingService = {
  jobInvoices: jobInvoices,
  jobPayments: jobPayments,
  jobSalary: jobSalary,
  apiUrl: _config_test_env__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl,
  currentUrl: '',
  currentUser: currentUserSubject.asObservable(),

  get currentUserValue() {
    return currentUserSubject.value;
  }

};

function jobInvoices() {
  return fetch(this.apiUrl + "admin/job-invoices", _helpers_request_options__WEBPACK_IMPORTED_MODULE_1__["requestOptions"].get()).then(_helpers_handle_response__WEBPACK_IMPORTED_MODULE_2__["handleResponse"]).then(function (user) {
    // store user details and passport token in local storage to keep user logged in between page refreshes
    return user;
  });
}

function jobPayments() {
  return fetch(this.apiUrl + "admin/job-payment", _helpers_request_options__WEBPACK_IMPORTED_MODULE_1__["requestOptions"].get()).then(_helpers_handle_response__WEBPACK_IMPORTED_MODULE_2__["handleResponse"]).then(function (user) {
    // store user details and passport token in local storage to keep user logged in between page refreshes
    return user;
  });
}

function jobSalary() {
  return fetch(this.apiUrl + "admin/job-salary", _helpers_request_options__WEBPACK_IMPORTED_MODULE_1__["requestOptions"].get()).then(_helpers_handle_response__WEBPACK_IMPORTED_MODULE_2__["handleResponse"]).then(function (user) {
    // store user details and passport token in local storage to keep user logged in between page refreshes
    return user;
  });
}

/***/ }),

/***/ "./resources/js/components/admin/accounting/tab/salary.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/components/admin/accounting/tab/salary.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _salary_vue_vue_type_template_id_64866483___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./salary.vue?vue&type=template&id=64866483& */ "./resources/js/components/admin/accounting/tab/salary.vue?vue&type=template&id=64866483&");
/* harmony import */ var _salary_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./salary.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/accounting/tab/salary.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _salary_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _salary_vue_vue_type_template_id_64866483___WEBPACK_IMPORTED_MODULE_0__["render"],
  _salary_vue_vue_type_template_id_64866483___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/accounting/tab/salary.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/accounting/tab/salary.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/admin/accounting/tab/salary.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_salary_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./salary.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/accounting/tab/salary.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_salary_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/accounting/tab/salary.vue?vue&type=template&id=64866483&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/admin/accounting/tab/salary.vue?vue&type=template&id=64866483& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_salary_vue_vue_type_template_id_64866483___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./salary.vue?vue&type=template&id=64866483& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/accounting/tab/salary.vue?vue&type=template&id=64866483&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_salary_vue_vue_type_template_id_64866483___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_salary_vue_vue_type_template_id_64866483___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);