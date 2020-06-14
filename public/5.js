(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/customer/tab/records.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/customer/tab/records.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var _services_customer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../_services/customer.service */ "./resources/js/_services/customer.service.js");
/* harmony import */ var _helpers_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../_helpers/router */ "./resources/js/_helpers/router.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    PlusCircleIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_1__["PlusCircleIcon"]
  },
  data: function data() {
    return {
      records: '',
      jobs: '',
      page: 1,
      perPage: 9,
      pages: []
    };
  },
  computed: {
    displayedPosts: function displayedPosts() {
      return this.paginate(this.jobs);
    }
  },
  watch: {
    jobs: function jobs() {
      this.setPages();
    }
  },
  filters: {
    trimWords: function trimWords(value) {
      return value.split(" ").splice(0, 20).join(" ") + '...';
    }
  },
  mounted: function mounted() {
    this.getResult();
    this.myFunction();
  },
  methods: {
    getResult: function getResult() {
      var _this = this;

      _services_customer_service__WEBPACK_IMPORTED_MODULE_2__["customerService"].getCustomerRecord(this.$route.params.id).then(function (response) {
        //handle response
        if (response.status) {
          _this.records = response.data;
          _this.jobs = response.data.jobs;
        } else {
          _this.$toast.open({
            message: response.message,
            type: "error",
            position: "top-right"
          });
        }
      });
    },
    myFunction: function myFunction() {
      var input, filter, table, tr, td, i, txtValue;
      input = document.getElementById("myInput");
      filter = input.value.toUpperCase();
      table = document.getElementById("myTable");
      tr = table.getElementsByTagName("tr");

      for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[1];

        if (td) {
          txtValue = td.textContent || td.innerText;

          if (txtValue.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
          } else {
            tr[i].style.display = "none";
          }
        }
      }
    },
    setPages: function setPages() {
      var numberOfPages = Math.ceil(this.jobs.length / this.perPage);

      for (var index = 1; index <= numberOfPages; index++) {
        this.pages.push(index);
      }
    },
    paginate: function paginate(jobs) {
      var page = this.page;
      var perPage = this.perPage;
      var from = page * perPage - perPage;
      var to = page * perPage;
      return jobs.slice(from, to);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/customer/tab/records.vue?vue&type=template&id=14e812e2&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/customer/tab/records.vue?vue&type=template&id=14e812e2& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
    "v-app",
    [
      _c(
        "v-container",
        [
          _c(
            "v-row",
            [
              _c("h4", { staticClass: "main-title" }, [
                _vm._v("\n          Customer Records\n        ")
              ]),
              _vm._v(" "),
              _c(
                "v-col",
                {
                  staticClass: "cust-record-content",
                  attrs: { sm: "12", cols: "12" }
                },
                [
                  _c("v-col", { staticClass: "p-0", attrs: { sm: "2" } }, [
                    _c("div", { staticClass: "single-record" }, [
                      _c("span", { staticClass: "record-timeline" }, [
                        _vm._v(
                          "\n                Last 12 Months\n              "
                        )
                      ]),
                      _vm._v(" "),
                      _c("span", { staticClass: "record-price" }, [
                        _vm._v(
                          "\n                $" +
                            _vm._s(_vm.records.monthamount) +
                            "\n              "
                        )
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("v-col", { staticClass: "p-0", attrs: { sm: "2" } }, [
                    _c("div", { staticClass: "single-record" }, [
                      _c("span", { staticClass: "record-timeline" }, [
                        _vm._v("\n                Life Time\n              ")
                      ]),
                      _vm._v(" "),
                      _c("span", { staticClass: "record-price" }, [
                        _vm._v(
                          "\n                $" +
                            _vm._s(_vm.records.allamount) +
                            "\n              "
                        )
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("v-col", { staticClass: "p-0", attrs: { sm: "2" } }, [
                    _c("div", { staticClass: "single-record" }, [
                      _c("span", { staticClass: "record-timeline" }, [
                        _vm._v("\n                Total Farms\n              ")
                      ]),
                      _vm._v(" "),
                      _c("span", { staticClass: "record-price" }, [
                        _vm._v(
                          "\n                " +
                            _vm._s(_vm.records.farmrecord) +
                            "\n              "
                        )
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("v-col", { staticClass: "p-0", attrs: { sm: "2" } }, [
                    _c("div", { staticClass: "single-record" }, [
                      _c("span", { staticClass: "record-timeline" }, [
                        _vm._v("\n                Total Jobs\n              ")
                      ]),
                      _vm._v(" "),
                      _c("span", { staticClass: "record-price" }, [
                        _vm._v(
                          "\n                " +
                            _vm._s(_vm.records.totaljobs) +
                            "\n              "
                        )
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("v-col", { staticClass: "p-0", attrs: { sm: "2" } }, [
                    _c("div", { staticClass: "single-record" }, [
                      _c("span", { staticClass: "record-timeline" }, [
                        _vm._v("\n                Member Since\n              ")
                      ]),
                      _vm._v(" "),
                      _c("span", { staticClass: "record-price" }, [
                        _vm._v(
                          "\n                 " +
                            _vm._s(
                              _vm._f("formatDate")(_vm.records.memebersince)
                            ) +
                            "\n              "
                        )
                      ])
                    ])
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c("v-col", { attrs: { sm: "12", cols: "12" } }, [
                _c("input", {
                  attrs: {
                    type: "text",
                    id: "myInput",
                    placeholder: "Search for names..",
                    title: "Type in a name"
                  },
                  on: {
                    keyup: function($event) {
                      return _vm.myFunction()
                    }
                  }
                }),
                _vm._v(" "),
                _c("table", { attrs: { id: "myTable" } }, [
                  _c("thead", [
                    _c("tr", [
                      _c("th", { staticClass: "text-left" }, [
                        _vm._v("Job_id")
                      ]),
                      _vm._v(" "),
                      _c("th", { staticClass: "text-left" }, [
                        _vm._v("Farm Location")
                      ]),
                      _vm._v(" "),
                      _c("th", { staticClass: "text-left" }, [
                        _vm._v("Start Date")
                      ]),
                      _vm._v(" "),
                      _c("th", { staticClass: "text-left" }, [
                        _vm._v("Start Time")
                      ]),
                      _vm._v(" "),
                      _c("th", { staticClass: "text-left" }, [_vm._v("Techs")]),
                      _vm._v(" "),
                      _c("th", { staticClass: "text-left" }, [_vm._v("Price")]),
                      _vm._v(" "),
                      _c("th", { staticClass: "text-left" }, [_vm._v("Status")])
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "tbody",
                    _vm._l(_vm.displayedPosts, function(record) {
                      return _c("tr", [
                        _c("td", [_vm._v(_vm._s(record.id))]),
                        _vm._v(" "),
                        _c("td", [
                          _vm._v(
                            _vm._s(record.farm.farm_address) +
                              " " +
                              _vm._s(record.farm.farm_unit) +
                              " " +
                              _vm._s(record.farm.farm_city) +
                              " " +
                              _vm._s(record.farm.farm_province) +
                              " " +
                              _vm._s(record.farm.farm_zipcode)
                          )
                        ]),
                        _vm._v(" "),
                        _c("td", [
                          _vm._v(
                            _vm._s(_vm._f("formatDate")(record.created_at))
                          )
                        ]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(record.time_slots_id))]),
                        _vm._v(" "),
                        _c(
                          "td",
                          [
                            record.truck_driver_id
                              ? [_vm._v("Truck driver name")]
                              : _vm._e(),
                            _vm._v(" "),
                            !record.truck_driver_id
                              ? [_vm._v("Not Assigned Yet")]
                              : _vm._e(),
                            _vm._v(" "),
                            record.skidsteer_driver_id
                              ? [_vm._v("Skidsteer driver name")]
                              : _vm._e(),
                            _vm._v(" "),
                            !record.skidsteer_driver_id
                              ? [_vm._v("Not Assigned Yet")]
                              : _vm._e()
                          ],
                          2
                        ),
                        _vm._v(" "),
                        _c("td", [_vm._v("$" + _vm._s(record.job_amount))]),
                        _vm._v(" "),
                        !record.repeating_job
                          ? _c("td", [_vm._v("Scheduled")])
                          : _vm._e(),
                        _vm._v(" "),
                        record.repeating_job
                          ? _c("td", [_vm._v("Rescheduled")])
                          : _vm._e()
                      ])
                    }),
                    0
                  )
                ]),
                _vm._v(" "),
                _c(
                  "nav",
                  { attrs: { "aria-label": "Page navigation example" } },
                  [
                    _c("ul", { staticClass: "pagination" }, [
                      _c("li", { staticClass: "page-item" }, [
                        _vm.page != 1
                          ? _c(
                              "button",
                              {
                                staticClass: "page-link",
                                attrs: { type: "button" },
                                on: {
                                  click: function($event) {
                                    _vm.page--
                                  }
                                }
                              },
                              [_vm._v(" Previous ")]
                            )
                          : _vm._e()
                      ]),
                      _vm._v(" "),
                      _c(
                        "li",
                        { staticClass: "page-item" },
                        _vm._l(
                          _vm.pages.slice(_vm.page - 1, _vm.page + 5),
                          function(pageNumber) {
                            return _c(
                              "button",
                              {
                                staticClass: "page-link",
                                attrs: { type: "button" },
                                on: {
                                  click: function($event) {
                                    _vm.page = pageNumber
                                  }
                                }
                              },
                              [_vm._v(" " + _vm._s(pageNumber) + " ")]
                            )
                          }
                        ),
                        0
                      ),
                      _vm._v(" "),
                      _c("li", { staticClass: "page-item" }, [
                        _vm.page < _vm.pages.length
                          ? _c(
                              "button",
                              {
                                staticClass: "page-link",
                                attrs: { type: "button" },
                                on: {
                                  click: function($event) {
                                    _vm.page++
                                  }
                                }
                              },
                              [_vm._v(" Next ")]
                            )
                          : _vm._e()
                      ])
                    ])
                  ]
                )
              ])
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

/***/ "./resources/js/components/admin/customer/tab/records.vue":
/*!****************************************************************!*\
  !*** ./resources/js/components/admin/customer/tab/records.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _records_vue_vue_type_template_id_14e812e2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./records.vue?vue&type=template&id=14e812e2& */ "./resources/js/components/admin/customer/tab/records.vue?vue&type=template&id=14e812e2&");
/* harmony import */ var _records_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./records.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/customer/tab/records.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _records_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _records_vue_vue_type_template_id_14e812e2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _records_vue_vue_type_template_id_14e812e2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/customer/tab/records.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/customer/tab/records.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/admin/customer/tab/records.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_records_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./records.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/customer/tab/records.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_records_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/customer/tab/records.vue?vue&type=template&id=14e812e2&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/admin/customer/tab/records.vue?vue&type=template&id=14e812e2& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_records_vue_vue_type_template_id_14e812e2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./records.vue?vue&type=template&id=14e812e2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/customer/tab/records.vue?vue&type=template&id=14e812e2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_records_vue_vue_type_template_id_14e812e2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_records_vue_vue_type_template_id_14e812e2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);