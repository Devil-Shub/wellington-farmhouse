(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/accounting/tab/invoice.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/accounting/tab/invoice.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
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
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    PlusCircleIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_2__["PlusCircleIcon"]
  },
  data: function data() {
    return {
      invoiceJobs: ''
    };
  },
  mounted: function mounted() {
    this.invoiceList();
  },
  methods: {
    invoiceList: function invoiceList() {
      var _this = this;

      _services_accounting_service__WEBPACK_IMPORTED_MODULE_3__["accountingService"].jobInvoices().then(function (response) {
        //handle response
        if (response.status) {
          _this.invoiceJobs = response.data;
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/accounting/tab/invoice.vue?vue&type=template&id=3d525e44&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/accounting/tab/invoice.vue?vue&type=template&id=3d525e44& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
                    _c("th", [_vm._v("Date")]),
                    _vm._v(" "),
                    _c("th", [_vm._v("Customer")]),
                    _vm._v(" "),
                    _c("th", [_vm._v("Job#")]),
                    _vm._v(" "),
                    _c("th", [_vm._v("Service")]),
                    _vm._v(" "),
                    _c("th", [_vm._v("Total")]),
                    _vm._v(" "),
                    _c("th", [_vm._v("In quick book")]),
                    _vm._v(" "),
                    _c("th", [_vm._v("Email")]),
                    _vm._v(" "),
                    _c("th", [_vm._v("Download")])
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "tbody",
                  _vm._l(_vm.invoiceJobs, function(invoice) {
                    return _c("tr", [
                      _c("td", [
                        _vm._v(_vm._s(_vm._f("formatDate")(invoice.updated_at)))
                      ]),
                      _vm._v(" "),
                      _c(
                        "td",
                        [
                          _c(
                            "router-link",
                            {
                              staticClass: "nav-item nav-link",
                              attrs: {
                                to:
                                  "/admin/customer/details/" +
                                  invoice.customer.id
                              }
                            },
                            [
                              _vm._v(
                                "\n                   " +
                                  _vm._s(invoice.customer.first_name) +
                                  "\n                  "
                              )
                            ]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "td",
                        [
                          _c(
                            "router-link",
                            {
                              staticClass: "nav-item nav-link",
                              attrs: { to: "/admin/jobs" }
                            },
                            [
                              _vm._v(
                                "\n                    " +
                                  _vm._s(invoice.id) +
                                  "\n                  "
                              )
                            ]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "td",
                        [
                          _c(
                            "router-link",
                            {
                              staticClass: "nav-item nav-link",
                              attrs: {
                                to: "/admin/service/edit/" + invoice.service.id
                              }
                            },
                            [
                              _vm._v(
                                "\n                    " +
                                  _vm._s(invoice.service.service_name) +
                                  "\n                  "
                              )
                            ]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("td", [_vm._v("$" + _vm._s(invoice.job_amount))]),
                      _vm._v(" "),
                      _c("td", [_vm._v("Sync")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("Email")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("Download")])
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

/***/ }),

/***/ "./resources/js/components/admin/accounting/tab/invoice.vue":
/*!******************************************************************!*\
  !*** ./resources/js/components/admin/accounting/tab/invoice.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _invoice_vue_vue_type_template_id_3d525e44___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./invoice.vue?vue&type=template&id=3d525e44& */ "./resources/js/components/admin/accounting/tab/invoice.vue?vue&type=template&id=3d525e44&");
/* harmony import */ var _invoice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./invoice.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/accounting/tab/invoice.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _invoice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _invoice_vue_vue_type_template_id_3d525e44___WEBPACK_IMPORTED_MODULE_0__["render"],
  _invoice_vue_vue_type_template_id_3d525e44___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/accounting/tab/invoice.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/accounting/tab/invoice.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/admin/accounting/tab/invoice.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_invoice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./invoice.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/accounting/tab/invoice.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_invoice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/accounting/tab/invoice.vue?vue&type=template&id=3d525e44&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/admin/accounting/tab/invoice.vue?vue&type=template&id=3d525e44& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_invoice_vue_vue_type_template_id_3d525e44___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./invoice.vue?vue&type=template&id=3d525e44& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/accounting/tab/invoice.vue?vue&type=template&id=3d525e44&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_invoice_vue_vue_type_template_id_3d525e44___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_invoice_vue_vue_type_template_id_3d525e44___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);