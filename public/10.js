(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/customer/tab/info.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/customer/tab/info.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_customer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../_services/customer.service */ "./resources/js/_services/customer.service.js");
/* harmony import */ var _helpers_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../_helpers/router */ "./resources/js/_helpers/router.js");
/* harmony import */ var _config_test_env__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../config/test.env */ "./resources/js/config/test.env.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  data: function data() {
    return {
      prefixs: ['Ms.', 'Mr.', 'Mrs.'],
      isLoading: false,
      editSwitch: false,
      disabled: 0,
      items: [],
      model: null,
      valid: true,
      avatar: null,
      apiUrl: _config_test_env__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl,
      imgUrl: _config_test_env__WEBPACK_IMPORTED_MODULE_3__["environment"].imgUrl,
      addForm: {
        id: "",
        prefix: "",
        customer_name: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        province: "",
        user_image: null,
        zipcode: '',
        is_active: ''
      },
      emailRules: [function (v) {
        return !!v || "E-mail is required";
      }, function (v) {
        return /.+@.+/.test(v) || "E-mail must be valid";
      }],
      phoneRules: [function (v) {
        return !!v || "Phone number is required";
      }, function (v) {
        return /^\d*$/.test(v) || "Enter valid number";
      }, function (v) {
        return v.length >= 10 || "Enter valid number length";
      }],
      rules: [function (value) {
        return !value || value.size < 2000000 || "Avatar size should be less than 2 MB!";
      }],
      myFiles: []
    };
  },
  watch: {
    editSwitch: function editSwitch(newValue) {
      if (newValue == true) {// console.log('yes');
      } else {// console.log('no');
        }
    }
  },
  mounted: function mounted() {
    var _this = this;

    _services_customer_service__WEBPACK_IMPORTED_MODULE_1__["customerService"].getCustomer(this.$route.params.id).then(function (response) {
      //handle response
      if (response.status) {
        _this.addForm = {
          id: response.data.id,
          prefix: response.data.prefix,
          customer_name: response.data.first_name,
          phone: response.data.phone,
          email: response.data.email,
          city: response.data.city,
          province: response.data.state,
          country: response.data.country,
          user_image: response.data.user_image,
          address: response.data.address,
          zipcode: response.data.zip_code,
          is_active: response.data.is_active
        };

        if (response.data.user_image) {
          _this.avatar = _this.imgUrl + response.data.user_image;
        } else {
          _this.avatar = "/images/avatar.png";
        }
      } else {
        _this.$toast.open({
          message: response.message,
          type: "error",
          position: "top-right"
        });
      }
    });
  },
  computed: {
    serverOptions: function serverOptions() {
      var currentUser = JSON.parse(localStorage.getItem("currentUser"));
      return {
        url: this.apiUrl,
        withCredentials: false,
        process: {
          url: "uploadImage",
          headers: {
            Authorization: "Bearer " + currentUser.data.access_token
          }
        }
      };
    },
    url: function url() {
      if (this.file) {
        var parsedUrl = new URL(this.file);
        return [parsedUrl.pathname];
      } else {
        return null;
      }
    }
  },
  methods: {
    handleProcessFile: function handleProcessFile(error, file) {
      this.avatar = this.imgUrl + file.serverId;
      this.addForm.user_image = file.serverId;
    },
    update: function update() {
      var _this2 = this;

      if (this.$refs.form.validate()) {
        _services_customer_service__WEBPACK_IMPORTED_MODULE_1__["customerService"].edit(this.addForm).then(function (response) {
          //handle response
          if (response.status) {
            _this2.$toast.open({
              message: response.message,
              type: "success",
              position: "top-right"
            }); //redirect to login
            //router.push("/admin/customer");

          } else {
            _this2.$toast.open({
              message: response.message,
              type: "error",
              position: "top-right"
            });
          }
        });
      }
    },
    Delete: function Delete() {}
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/customer/tab/info.vue?vue&type=template&id=6afefa3e&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/customer/tab/info.vue?vue&type=template&id=6afefa3e& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
              _c(
                "v-col",
                { attrs: { cols: "12", md: "12" } },
                [
                  _c(
                    "v-form",
                    {
                      ref: "form",
                      attrs: { "lazy-validation": "" },
                      model: {
                        value: _vm.valid,
                        callback: function($$v) {
                          _vm.valid = $$v
                        },
                        expression: "valid"
                      }
                    },
                    [
                      _c(
                        "v-row",
                        [
                          _c(
                            "v-col",
                            { attrs: { cols: "12", md: "12" } },
                            [
                              _c(
                                "v-row",
                                [
                                  _c(
                                    "v-col",
                                    { attrs: { cols: "12", md: "12" } },
                                    [
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "v-avatar v-list-item__avatar",
                                          staticStyle: {
                                            height: "40px",
                                            "min-width": "40px",
                                            width: "40px"
                                          }
                                        },
                                        [
                                          _c("img", {
                                            attrs: { src: _vm.avatar }
                                          })
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c("file-pond", {
                                        ref: "pond",
                                        attrs: {
                                          name: "uploadImage",
                                          "label-idle": "Add Profile pic...",
                                          "allow-multiple": "false",
                                          server: _vm.serverOptions,
                                          files: _vm.myFiles,
                                          "allow-file-type-validation": "true",
                                          "accepted-file-types":
                                            "image/jpeg, image/png",
                                          disabled: _vm.disabled == 0
                                        },
                                        on: {
                                          processfile: _vm.handleProcessFile
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    { attrs: { cols: "3", md: "3" } },
                                    [
                                      _c(
                                        "v-col",
                                        {
                                          staticClass: "pl-0 pt-0 pb-0",
                                          attrs: { cols: "4", sm: "4" }
                                        },
                                        [
                                          _c(
                                            "label",
                                            { staticClass: "ft-normal" },
                                            [_vm._v("Prefix")]
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-col",
                                        {
                                          staticClass: "p-0 ml-m4",
                                          attrs: { cols: "8", sm: "8" }
                                        },
                                        [
                                          _c("v-select", {
                                            staticClass: "disabled-tag",
                                            attrs: {
                                              items: _vm.prefixs,
                                              rules: [
                                                function(v) {
                                                  return (
                                                    !!v || "Prefix is required"
                                                  )
                                                }
                                              ],
                                              disabled: _vm.disabled == 0
                                            },
                                            model: {
                                              value: _vm.addForm.prefix,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.addForm,
                                                  "prefix",
                                                  $$v
                                                )
                                              },
                                              expression: "addForm.prefix"
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
                                    "v-col",
                                    { attrs: { cols: "3", sm: "3" } },
                                    [
                                      _c(
                                        "v-col",
                                        {
                                          staticClass: "pl-0 pt-0 pb-0",
                                          attrs: { cols: "4", sm: "4" }
                                        },
                                        [
                                          _c(
                                            "label",
                                            { staticClass: "ft-normal" },
                                            [_vm._v("Name")]
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-col",
                                        {
                                          staticClass: "p-0 ml-m4",
                                          attrs: { cols: "8", sm: "8" }
                                        },
                                        [
                                          _c("v-text-field", {
                                            staticClass: "disabled-tag",
                                            attrs: {
                                              required: "",
                                              disabled: _vm.disabled == 0,
                                              rules: [
                                                function(v) {
                                                  return (
                                                    !!v ||
                                                    "Customer name is required"
                                                  )
                                                }
                                              ]
                                            },
                                            model: {
                                              value: _vm.addForm.customer_name,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.addForm,
                                                  "customer_name",
                                                  $$v
                                                )
                                              },
                                              expression:
                                                "addForm.customer_name"
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
                                    "v-col",
                                    { attrs: { cols: "3", md: "3" } },
                                    [
                                      _c(
                                        "v-col",
                                        {
                                          staticClass: "pl-0 pt-0 pb-0",
                                          attrs: { cols: "4", sm: "4" }
                                        },
                                        [
                                          _c(
                                            "label",
                                            { staticClass: "ft-normal" },
                                            [_vm._v("Email")]
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-col",
                                        {
                                          staticClass: "p-0 ml-m4",
                                          attrs: { cols: "8", sm: "8" }
                                        },
                                        [
                                          _c("v-text-field", {
                                            staticClass: "disabled-tag",
                                            attrs: {
                                              rules: _vm.emailRules,
                                              name: "email",
                                              disabled: _vm.disabled == 0,
                                              required: ""
                                            },
                                            model: {
                                              value: _vm.addForm.email,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.addForm,
                                                  "email",
                                                  $$v
                                                )
                                              },
                                              expression: "addForm.email"
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
                                    "v-col",
                                    { attrs: { cols: "3", md: "3" } },
                                    [
                                      _c(
                                        "v-col",
                                        {
                                          staticClass: "pl-0 pt-0 pb-0",
                                          attrs: { cols: "4", sm: "4" }
                                        },
                                        [
                                          _c(
                                            "label",
                                            { staticClass: "ft-normal" },
                                            [_vm._v("Phone")]
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-col",
                                        {
                                          staticClass: "p-0 ml-m4",
                                          attrs: { cols: "8", sm: "8" }
                                        },
                                        [
                                          _c("v-text-field", {
                                            staticClass: "disabled-tag",
                                            attrs: {
                                              rules: _vm.phoneRules,
                                              disabled: _vm.disabled == 0,
                                              required: "",
                                              maxlength: "10"
                                            },
                                            model: {
                                              value: _vm.addForm.phone,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.addForm,
                                                  "phone",
                                                  $$v
                                                )
                                              },
                                              expression: "addForm.phone"
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
                                    "v-col",
                                    { attrs: { cols: "3", md: "3" } },
                                    [
                                      _c(
                                        "v-col",
                                        {
                                          staticClass: "pl-0 pt-0 pb-0",
                                          attrs: { cols: "4", sm: "4" }
                                        },
                                        [
                                          _c(
                                            "label",
                                            { staticClass: "ft-normal" },
                                            [_vm._v("Address")]
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-col",
                                        {
                                          staticClass: "p-0 ml-m4",
                                          attrs: { cols: "8", sm: "8" }
                                        },
                                        [
                                          _c("v-text-field", {
                                            staticClass: "disabled-tag",
                                            attrs: {
                                              disabled: _vm.disabled == 0,
                                              required: "",
                                              rules: [
                                                function(v) {
                                                  return (
                                                    !!v || "address is required"
                                                  )
                                                }
                                              ]
                                            },
                                            model: {
                                              value: _vm.addForm.address,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.addForm,
                                                  "address",
                                                  $$v
                                                )
                                              },
                                              expression: "addForm.address"
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
                                    "v-col",
                                    { attrs: { cols: "3", md: "3" } },
                                    [
                                      _c(
                                        "v-col",
                                        {
                                          staticClass: "pl-0 pt-0 pb-0",
                                          attrs: { cols: "4", sm: "4" }
                                        },
                                        [
                                          _c(
                                            "label",
                                            { staticClass: "ft-normal" },
                                            [_vm._v("City")]
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-col",
                                        {
                                          staticClass: "p-0 ml-m4",
                                          attrs: { cols: "8", sm: "8" }
                                        },
                                        [
                                          _c("v-text-field", {
                                            staticClass: "disabled-tag",
                                            attrs: {
                                              disabled: _vm.disabled == 0,
                                              required: "",
                                              rules: [
                                                function(v) {
                                                  return (
                                                    !!v || "City is required"
                                                  )
                                                }
                                              ]
                                            },
                                            model: {
                                              value: _vm.addForm.city,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.addForm,
                                                  "city",
                                                  $$v
                                                )
                                              },
                                              expression: "addForm.city"
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
                                    "v-col",
                                    { attrs: { cols: "3", md: "3" } },
                                    [
                                      _c(
                                        "v-col",
                                        {
                                          staticClass: "pl-0 pt-0 pb-0",
                                          attrs: { cols: "4", sm: "4" }
                                        },
                                        [
                                          _c(
                                            "label",
                                            { staticClass: "ft-normal" },
                                            [_vm._v("Province")]
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-col",
                                        {
                                          staticClass: "p-0 ml-m4",
                                          attrs: { cols: "8", sm: "8" }
                                        },
                                        [
                                          _c("v-text-field", {
                                            staticClass: "disabled-tag",
                                            attrs: {
                                              disabled: _vm.disabled == 0,
                                              required: "",
                                              rules: [
                                                function(v) {
                                                  return (
                                                    !!v ||
                                                    "Province is required"
                                                  )
                                                }
                                              ]
                                            },
                                            model: {
                                              value: _vm.addForm.province,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.addForm,
                                                  "province",
                                                  $$v
                                                )
                                              },
                                              expression: "addForm.province"
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
                                    "v-col",
                                    { attrs: { cols: "3", md: "3" } },
                                    [
                                      _c(
                                        "v-col",
                                        {
                                          staticClass: "pl-0 pt-0 pb-0",
                                          attrs: { cols: "4", sm: "4" }
                                        },
                                        [
                                          _c(
                                            "label",
                                            { staticClass: "ft-normal" },
                                            [_vm._v("ZipCode")]
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-col",
                                        {
                                          staticClass: "p-0 ml-m4",
                                          attrs: { cols: "8", sm: "8" }
                                        },
                                        [
                                          _c("v-text-field", {
                                            staticClass: "disabled-tag",
                                            attrs: {
                                              rules: [
                                                function(v) {
                                                  return (
                                                    !!v ||
                                                    "Zip code is required"
                                                  )
                                                }
                                              ],
                                              disabled: _vm.disabled == 0,
                                              required: ""
                                            },
                                            model: {
                                              value: _vm.addForm.zipcode,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.addForm,
                                                  "zipcode",
                                                  $$v
                                                )
                                              },
                                              expression: "addForm.zipcode"
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
                                    "v-col",
                                    { attrs: { cols: "2", md: "2" } },
                                    [
                                      _c("v-switch", {
                                        staticClass: "mx-2",
                                        attrs: { label: "Is Active" },
                                        model: {
                                          value: _vm.addForm.is_active,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.addForm,
                                              "is_active",
                                              $$v
                                            )
                                          },
                                          expression: "addForm.is_active"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    { attrs: { cols: "2", md: "2" } },
                                    [
                                      _c("v-switch", {
                                        staticClass: "mx-2",
                                        attrs: { label: "Edit" },
                                        on: {
                                          click: function($event) {
                                            _vm.disabled =
                                              (_vm.disabled + 1) % 2
                                          }
                                        },
                                        model: {
                                          value: _vm.editSwitch,
                                          callback: function($$v) {
                                            _vm.editSwitch = $$v
                                          },
                                          expression: "editSwitch"
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
                          ),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            {
                              staticClass: "mr-4 custom-save-btn ml-4",
                              attrs: { color: "success" },
                              on: { click: _vm.update }
                            },
                            [_vm._v("Submit")]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            {
                              staticClass: "mr-4 custom-save-btn ml-4",
                              attrs: { color: "success" },
                              on: { click: _vm.Delete }
                            },
                            [_vm._v("Delete")]
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
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/admin/customer/tab/info.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/admin/customer/tab/info.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _info_vue_vue_type_template_id_6afefa3e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./info.vue?vue&type=template&id=6afefa3e& */ "./resources/js/components/admin/customer/tab/info.vue?vue&type=template&id=6afefa3e&");
/* harmony import */ var _info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./info.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/customer/tab/info.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _info_vue_vue_type_template_id_6afefa3e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _info_vue_vue_type_template_id_6afefa3e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/customer/tab/info.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/customer/tab/info.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/admin/customer/tab/info.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./info.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/customer/tab/info.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/customer/tab/info.vue?vue&type=template&id=6afefa3e&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/admin/customer/tab/info.vue?vue&type=template&id=6afefa3e& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_info_vue_vue_type_template_id_6afefa3e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./info.vue?vue&type=template&id=6afefa3e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/customer/tab/info.vue?vue&type=template&id=6afefa3e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_info_vue_vue_type_template_id_6afefa3e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_info_vue_vue_type_template_id_6afefa3e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);