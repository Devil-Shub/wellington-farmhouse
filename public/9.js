(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/customer/tab/farm.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/customer/tab/farm.vue?vue&type=script&lang=js& ***!
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
/* harmony import */ var vue_google_autocomplete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-google-autocomplete */ "./node_modules/vue-google-autocomplete/src/VueGoogleAutocomplete.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    VueGoogleAutocomplete: vue_google_autocomplete__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  data: function data() {
    return {
      docError: false,
      editSwitch: false,
      disabled: 0,
      prefixs: ["Ms.", "Mr.", "Mrs."],
      isLoading: false,
      items: [],
      model: null,
      valid: true,
      manager_img: "",
      apiUrl: _config_test_env__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl,
      addForm: {
        farm_id: "",
        farm_images: [],
        latitude: "",
        longitude: "",
        farm_address: "",
        farm_unit: "",
        farm_city: "",
        farm_province: "",
        farm_zipcode: "",
        farm_active: true,
        manager_id: "",
        manager_image: "",
        manager_prefix: "",
        manager_name: "",
        manager_email: "",
        manager_phone: "",
        manager_address: "",
        manager_city: "",
        manager_province: "",
        manager_zipcode: "",
        manager_id_card: "",
        manager_card_image: ""
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
  mounted: function mounted() {
    var _this = this;

    this.$refs.address.focus();
    _services_customer_service__WEBPACK_IMPORTED_MODULE_1__["customerService"].getCustomer(this.$route.params.id).then(function (response) {
      //handle response
      if (response.status) {
        var farmDetails = response.data.customer_manager[0].farms;
        var managerDetails = response.data.customer_manager[0]; //set farm values

        _this.addForm = {
          farm_id: farmDetails.id,
          farm_images: [],
          latitude: farmDetails.latitude,
          longitude: farmDetails.longitude,
          farm_address: farmDetails.farm_address,
          farm_unit: farmDetails.farm_unit,
          farm_city: farmDetails.farm_city,
          farm_province: farmDetails.farm_province,
          farm_zipcode: farmDetails.farm_zipcode,
          farm_active: farmDetails.farm_active == 1 ? true : false,
          manager_id: managerDetails.id,
          manager_image: managerDetails.user_image,
          manager_prefix: managerDetails.prefix,
          manager_name: managerDetails.first_name,
          manager_email: managerDetails.email,
          manager_phone: managerDetails.phone,
          manager_address: managerDetails.address,
          manager_city: managerDetails.city,
          manager_province: managerDetails.state,
          manager_zipcode: managerDetails.zip_code,
          manager_id_card: managerDetails.manager.identification_number,
          manager_card_image: managerDetails.document
        };
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
  created: function created() {
    this.manager_image = "/images/avatar.png";
  },
  methods: {
    getAddressData: function getAddressData(addressData, placeResultData, id) {
      this.addForm.latitude = addressData.latitude;
      this.addForm.longitude = addressData.longitude;
      this.addForm.farm_address = addressData.route;
    },
    //farm images process
    handleProcessFile1: function handleProcessFile1(error, file) {
      this.addForm.farm_images.push(file.serverId);
    },
    //manager image process
    handleProcessFile2: function handleProcessFile2(error, file) {
      this.manager_img = "../../" + file.serverId;
      this.addForm.manager_image = file.serverId;
    },
    //manager id card image process
    handleProcessFile3: function handleProcessFile3(error, file) {
      this.addForm.manager_card_image = file.serverId; //this.docError = false;
    },
    update: function update() {
      var _this2 = this;

      console.log(this.addForm);

      if (this.$refs.form.validate()) {
        _services_customer_service__WEBPACK_IMPORTED_MODULE_1__["customerService"].add(this.addForm).then(function (response) {
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
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/customer/tab/farm.vue?vue&type=template&id=cfef2c74&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/customer/tab/farm.vue?vue&type=template&id=cfef2c74& ***!
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
                      staticClass: "customer-form",
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
                              _c("h4", { staticClass: "main-title" }, [
                                _vm._v("Farm Section")
                              ]),
                              _vm._v(" "),
                              _c(
                                "v-row",
                                [
                                  _c(
                                    "v-col",
                                    { attrs: { cols: "12", md: "12" } },
                                    [
                                      _c("file-pond", {
                                        ref: "pond",
                                        attrs: {
                                          name: "uploadImage",
                                          "label-idle": "Farm Images",
                                          "allow-multiple": "true",
                                          server: _vm.serverOptions,
                                          files: _vm.myFiles,
                                          "allow-file-type-validation": "true",
                                          "accepted-file-types":
                                            "image/jpeg, image/png",
                                          disabled: _vm.disabled == 0
                                        },
                                        on: {
                                          processfile: _vm.handleProcessFile1
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
                                      _c("vue-google-autocomplete", {
                                        ref: "address",
                                        staticClass: "form-control mt-4",
                                        attrs: {
                                          id: "map",
                                          placeholder:
                                            "Please type your address",
                                          country: "us",
                                          disabled: _vm.disabled == 0
                                        },
                                        on: {
                                          placechanged: _vm.getAddressData
                                        },
                                        model: {
                                          value: _vm.addForm.farm_address,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.addForm,
                                              "farm_address",
                                              $$v
                                            )
                                          },
                                          expression: "addForm.farm_address"
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
                                            [_vm._v("Apt/Unit")]
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
                                              rules: [
                                                function(v) {
                                                  return (
                                                    !!v ||
                                                    "Farm apt/unit is required"
                                                  )
                                                }
                                              ],
                                              disabled: _vm.disabled == 0
                                            },
                                            model: {
                                              value: _vm.addForm.farm_unit,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.addForm,
                                                  "farm_unit",
                                                  $$v
                                                )
                                              },
                                              expression: "addForm.farm_unit"
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
                                              required: "",
                                              rules: [
                                                function(v) {
                                                  return (
                                                    !!v ||
                                                    "Farm city is required"
                                                  )
                                                }
                                              ],
                                              disabled: _vm.disabled == 0
                                            },
                                            model: {
                                              value: _vm.addForm.farm_city,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.addForm,
                                                  "farm_city",
                                                  $$v
                                                )
                                              },
                                              expression: "addForm.farm_city"
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
                                              required: "",
                                              rules: [
                                                function(v) {
                                                  return (
                                                    !!v ||
                                                    "Farm province is required"
                                                  )
                                                }
                                              ],
                                              disabled: _vm.disabled == 0
                                            },
                                            model: {
                                              value: _vm.addForm.farm_province,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.addForm,
                                                  "farm_province",
                                                  $$v
                                                )
                                              },
                                              expression:
                                                "addForm.farm_province"
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
                                            [_vm._v("Zip Code")]
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
                                              rules: [
                                                function(v) {
                                                  return (
                                                    !!v ||
                                                    "Farm zip code is required"
                                                  )
                                                }
                                              ],
                                              disabled: _vm.disabled == 0
                                            },
                                            model: {
                                              value: _vm.addForm.farm_zipcode,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.addForm,
                                                  "farm_zipcode",
                                                  $$v
                                                )
                                              },
                                              expression: "addForm.farm_zipcode"
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
                                      _c("v-switch", {
                                        staticClass: "mx-2",
                                        attrs: { label: "Is Active" },
                                        model: {
                                          value: _vm.addForm.farm_active,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.addForm,
                                              "farm_active",
                                              $$v
                                            )
                                          },
                                          expression: "addForm.farm_active"
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
                            "v-col",
                            { attrs: { cols: "12", md: "12" } },
                            [
                              _c("h3", [_vm._v("Manager Details")]),
                              _vm._v(" "),
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
                                            attrs: { src: _vm.manager_img }
                                          })
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c("file-pond", {
                                        ref: "pond",
                                        attrs: {
                                          name: "uploadImage",
                                          "label-idle": "Add Profile Pic",
                                          "allow-multiple": "false",
                                          server: _vm.serverOptions,
                                          files: _vm.myFiles,
                                          "allow-file-type-validation": "true",
                                          "accepted-file-types":
                                            "image/jpeg, image/png",
                                          disabled: _vm.disabled == 0
                                        },
                                        on: {
                                          processfile: _vm.handleProcessFile2
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
                                              label: "Select",
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
                                              value: _vm.addForm.manager_prefix,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.addForm,
                                                  "manager_prefix",
                                                  $$v
                                                )
                                              },
                                              expression:
                                                "addForm.manager_prefix"
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
                                              rules: [
                                                function(v) {
                                                  return (
                                                    !!v ||
                                                    "Manager name is required"
                                                  )
                                                }
                                              ],
                                              disabled: _vm.disabled == 0
                                            },
                                            model: {
                                              value: _vm.addForm.manager_name,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.addForm,
                                                  "manager_name",
                                                  $$v
                                                )
                                              },
                                              expression: "addForm.manager_name"
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
                                            [_vm._v("E-mail")]
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
                                              disabled: _vm.disabled == 0,
                                              name: "email",
                                              required: ""
                                            },
                                            model: {
                                              value: _vm.addForm.manager_email,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.addForm,
                                                  "manager_email",
                                                  $$v
                                                )
                                              },
                                              expression:
                                                "addForm.manager_email"
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
                                              value: _vm.addForm.manager_phone,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.addForm,
                                                  "manager_phone",
                                                  $$v
                                                )
                                              },
                                              expression:
                                                "addForm.manager_phone"
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
                                              required: "",
                                              rules: [
                                                function(v) {
                                                  return (
                                                    !!v || "address is required"
                                                  )
                                                }
                                              ],
                                              disabled: _vm.disabled == 0
                                            },
                                            model: {
                                              value:
                                                _vm.addForm.manager_address,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.addForm,
                                                  "manager_address",
                                                  $$v
                                                )
                                              },
                                              expression:
                                                "addForm.manager_address"
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
                                              required: "",
                                              rules: [
                                                function(v) {
                                                  return (
                                                    !!v || "City is required"
                                                  )
                                                }
                                              ],
                                              disabled: _vm.disabled == 0
                                            },
                                            model: {
                                              value: _vm.addForm.manager_city,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.addForm,
                                                  "manager_city",
                                                  $$v
                                                )
                                              },
                                              expression: "addForm.manager_city"
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
                                            [_vm._v("State")]
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
                                              rules: [
                                                function(v) {
                                                  return (
                                                    !!v ||
                                                    "Province is required"
                                                  )
                                                }
                                              ],
                                              disabled: _vm.disabled == 0
                                            },
                                            model: {
                                              value:
                                                _vm.addForm.manager_province,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.addForm,
                                                  "manager_province",
                                                  $$v
                                                )
                                              },
                                              expression:
                                                "addForm.manager_province"
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
                                            [_vm._v("zipcode")]
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
                                              value:
                                                _vm.addForm.manager_zipcode,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.addForm,
                                                  "manager_zipcode",
                                                  $$v
                                                )
                                              },
                                              expression:
                                                "addForm.manager_zipcode"
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
                                            [_vm._v("Id CardNo")]
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
                                                    "Card Id number is required"
                                                  )
                                                }
                                              ],
                                              disabled: _vm.disabled == 0,
                                              required: ""
                                            },
                                            model: {
                                              value:
                                                _vm.addForm.manager_id_card,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.addForm,
                                                  "manager_id_card",
                                                  $$v
                                                )
                                              },
                                              expression:
                                                "addForm.manager_id_card"
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
                                    { attrs: { cols: "4", md: "4" } },
                                    [
                                      _c("file-pond", {
                                        ref: "pond",
                                        attrs: {
                                          name: "uploadImage",
                                          "label-idle": "Upload Id Card Image",
                                          "allow-multiple": "false",
                                          server: _vm.serverOptions,
                                          files: _vm.myFiles,
                                          "allow-file-type-validation": "true",
                                          "accepted-file-types":
                                            "image/jpeg, image/png",
                                          disabled: _vm.disabled == 0
                                        },
                                        on: {
                                          processfile: _vm.handleProcessFile3
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

/***/ "./resources/js/components/admin/customer/tab/farm.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/admin/customer/tab/farm.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _farm_vue_vue_type_template_id_cfef2c74___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./farm.vue?vue&type=template&id=cfef2c74& */ "./resources/js/components/admin/customer/tab/farm.vue?vue&type=template&id=cfef2c74&");
/* harmony import */ var _farm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./farm.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/customer/tab/farm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _farm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _farm_vue_vue_type_template_id_cfef2c74___WEBPACK_IMPORTED_MODULE_0__["render"],
  _farm_vue_vue_type_template_id_cfef2c74___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/customer/tab/farm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/customer/tab/farm.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/admin/customer/tab/farm.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_farm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./farm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/customer/tab/farm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_farm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/customer/tab/farm.vue?vue&type=template&id=cfef2c74&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/admin/customer/tab/farm.vue?vue&type=template&id=cfef2c74& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_farm_vue_vue_type_template_id_cfef2c74___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./farm.vue?vue&type=template&id=cfef2c74& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/customer/tab/farm.vue?vue&type=template&id=cfef2c74&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_farm_vue_vue_type_template_id_cfef2c74___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_farm_vue_vue_type_template_id_cfef2c74___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);