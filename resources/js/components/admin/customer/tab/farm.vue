<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col cols="12" md="12">
          <v-form class="customer-form" ref="form" v-model="valid" lazy-validation>
            <v-row>
              <v-col cols="12" md="12">
                <h4 class="main-title">Farm Section</h4>
                <v-row>
                  <v-col cols="12" md="12">
                    <file-pond
                      name="uploadImage"
                      ref="pond"
                      label-idle="Farm Images"
                      allow-multiple="true"
                      v-bind:server="serverOptions"
                      v-bind:files="myFiles"
                      allow-file-type-validation="true"
                      accepted-file-types="image/jpeg, image/png"
                      v-on:processfile="handleProcessFile1"
                      :disabled="disabled == 0"
                    />
                  </v-col>
                  <v-col cols="3" md="3">
                    <vue-google-autocomplete
                      ref="address"
                      id="map"
                      class="form-control mt-4"
                      placeholder="Please type your address"
                      v-on:placechanged="getAddressData"
                      country="us"
                      v-model="addForm.farm_address"
                        :disabled="disabled == 0"
                    ></vue-google-autocomplete>
                  </v-col>
                  <v-col cols="3" md="3">
                    <v-col cols="4" sm="4" class="pl-0 pt-0 pb-0">
                      <label class="ft-normal">Apt/Unit</label>
                    </v-col>
                    <v-col cols="8" sm="8" class="p-0 ml-m4">
                      <v-text-field
                        v-model="addForm.farm_unit"
                        required
                        :rules="[v => !!v || 'Farm apt/unit is required']"
                        class="disabled-tag"
                        :disabled="disabled == 0"
                      ></v-text-field>
                    </v-col>
                  </v-col>
                  <v-col cols="3" md="3">
                    <v-col cols="4" sm="4" class="pl-0 pt-0 pb-0">
                      <label class="ft-normal">City</label>
                    </v-col>
                    <v-col cols="8" sm="8" class="p-0 ml-m4">
                      <v-text-field
                        v-model="addForm.farm_city"
                        required
                        :rules="[v => !!v || 'Farm city is required']"
                        class="disabled-tag"
                        :disabled="disabled == 0"
                      ></v-text-field>
                    </v-col>
                  </v-col>
                  <v-col cols="3" md="3">
                    <v-col cols="4" sm="4" class="pl-0 pt-0 pb-0">
                      <label class="ft-normal">Province</label>
                    </v-col>
                    <v-col cols="8" sm="8" class="p-0 ml-m4">
                      <v-text-field
                        v-model="addForm.farm_province"
                        required
                        :rules="[v => !!v || 'Farm province is required']"
                        class="disabled-tag"
                        :disabled="disabled == 0"
                      ></v-text-field>
                    </v-col>
                  </v-col>
                  <v-col cols="3" md="3">
                    <v-col cols="4" sm="4" class="pl-0 pt-0 pb-0">
                      <label class="ft-normal">Zip Code</label>
                    </v-col>
                    <v-col cols="8" sm="8" class="p-0 ml-m4">
                      <v-text-field
                        v-model="addForm.farm_zipcode"
                        required
                        :rules="[v => !!v || 'Farm zip code is required']"
                        class="disabled-tag"
                        :disabled="disabled == 0"
                      ></v-text-field>
                    </v-col>
                  </v-col>
                  <v-col cols="3" md="3">
                    <v-switch v-model="addForm.farm_active" class="mx-2" label="Is Active"></v-switch>
                  </v-col>
                </v-row>
              </v-col>
              <v-col cols="12" md="12">
              <h3>Manager Details</h3>
		 <v-row>
                <v-col cols="12" md="12">
                <div
                class="v-avatar v-list-item__avatar"
                style="height: 40px; min-width: 40px; width: 40px;"
              >
                <img :src="manager_img" />
              </div>
                  <file-pond
                    name="uploadImage"
                    ref="pond"
                    label-idle="Add Profile Pic"
                    allow-multiple="false"
                    v-bind:server="serverOptions"
                    v-bind:files="myFiles"
                    allow-file-type-validation="true"
                    accepted-file-types="image/jpeg, image/png"
                    v-on:processfile="handleProcessFile2"
                    :disabled="disabled == 0"
                  />
                </v-col>
                <v-col cols="3" md="3">
                  <v-col cols="4" sm="4" class="pl-0 pt-0 pb-0">
                    <label class="ft-normal">Prefix</label>
                  </v-col>
                  <v-col cols="8" sm="8" class="p-0 ml-m4">
                    <v-select 
                      v-model="addForm.manager_prefix"
                      :items="prefixs"
                      label="Select"
                      :rules="[v => !!v || 'Prefix is required']"
                      class="disabled-tag"
                      :disabled="disabled == 0"
                    ></v-select>
                  </v-col>
                </v-col>
                <v-col cols="3" md="3">
                  <v-col cols="4" sm="4" class="pl-0 pt-0 pb-0">
                    <label class="ft-normal">Name</label>
                  </v-col>
                  <v-col cols="8" sm="8" class="p-0 ml-m4">
                    <v-text-field
                      v-model="addForm.manager_name"
                      required
                      :rules="[v => !!v || 'Manager name is required']"
                      class="disabled-tag"
                      :disabled="disabled == 0"
                    ></v-text-field>
                  </v-col>
                </v-col>
                <v-col cols="3" md="3">
                  <v-col cols="4" sm="4" class="pl-0 pt-0 pb-0">
                    <label class="ft-normal">E-mail</label>
                  </v-col>
                  <v-col cols="8" sm="8" class="p-0 ml-m4">
                    <v-text-field
                      v-model="addForm.manager_email"
                      :rules="emailRules"
                      :disabled="disabled == 0"
                      class="disabled-tag"
                      name="email"
                      required
                    ></v-text-field>
                  </v-col>
                </v-col>
                <v-col cols="3" md="3">
                  <v-col cols="4" sm="4" class="pl-0 pt-0 pb-0">
                    <label class="ft-normal">Phone</label>
                  </v-col>
                  <v-col cols="8" sm="8" class="p-0 ml-m4">
                    <v-text-field
                      v-model="addForm.manager_phone"
                      :rules="phoneRules"
                      :disabled="disabled == 0"
                      class="disabled-tag"
                      required
                      maxlength="10"
                    ></v-text-field>
                  </v-col>
                </v-col>
                <v-col cols="3" md="3">
                  <v-col cols="4" sm="4" class="pl-0 pt-0 pb-0">
                    <label class="ft-normal">Address</label>
                  </v-col>
                  <v-col cols="8" sm="8" class="p-0 ml-m4">
                    <v-text-field
                      v-model="addForm.manager_address"
                      required
                      :rules="[v => !!v || 'address is required']"
                      class="disabled-tag"
                      :disabled="disabled == 0"
                    ></v-text-field>
                  </v-col>
                </v-col>
                <v-col cols="3" md="3">
                  <v-col cols="4" sm="4" class="pl-0 pt-0 pb-0">
                    <label class="ft-normal">City</label>
                  </v-col>
                  <v-col cols="8" sm="8" class="p-0 ml-m4">
                    <v-text-field
                      v-model="addForm.manager_city"
                      required
                      :rules="[v => !!v || 'City is required']"
                      class="disabled-tag"
                      :disabled="disabled == 0"
                    ></v-text-field>
                  </v-col>
                </v-col>
                <v-col cols="3" md="3">
                  <v-col cols="4" sm="4" class="pl-0 pt-0 pb-0">
                    <label class="ft-normal">State</label>
                  </v-col>
                  <v-col cols="8" sm="8" class="p-0 ml-m4">
                    <v-text-field
                      v-model="addForm.manager_province"
                      required
                      :rules="[v => !!v || 'Province is required']"
                      class="disabled-tag"
                      :disabled="disabled == 0"
                    ></v-text-field>
                  </v-col>
                </v-col>
                <v-col cols="3" md="3">
                  <v-col cols="4" sm="4" class="pl-0 pt-0 pb-0">
                    <label class="ft-normal">zipcode</label>
                  </v-col>
                  <v-col cols="8" sm="8" class="p-0 ml-m4">
                    <v-text-field
                      v-model="addForm.manager_zipcode"
                      :rules="[v => !!v || 'Zip code is required']"
                      class="disabled-tag"
                      :disabled="disabled == 0"
                      required
                    ></v-text-field>
                  </v-col>
                </v-col>
                <v-col cols="3" md="3">
                  <v-col cols="4" sm="4" class="pl-0 pt-0 pb-0">
                    <label class="ft-normal">Id CardNo</label>
                  </v-col>
                  <v-col cols="8" sm="8" class="p-0 ml-m4">
                    <v-text-field
                      v-model="addForm.manager_id_card"
                      :rules="[v => !!v || 'Card Id number is required']"
                      class="disabled-tag"
                      :disabled="disabled == 0"
                      required
                    ></v-text-field>
                  </v-col>
                </v-col>
                <v-col cols="4" md="4">
                  <file-pond
                    name="uploadImage"
                    ref="pond"
                    label-idle="Upload Id Card Image"
                    allow-multiple="false"
                    v-bind:server="serverOptions"
                    v-bind:files="myFiles"
                    allow-file-type-validation="true"
                    accepted-file-types="image/jpeg, image/png"
                    v-on:processfile="handleProcessFile3"
                    :disabled="disabled == 0"
                  />
                </v-col>
                <v-col cols="2" md="2">
                  <v-switch v-model="editSwitch" class="mx-2" label="Edit" @click="disabled = (disabled + 1) % 2"></v-switch>
                </v-col>
               </v-row>            
              </v-col>
              <v-btn color="success" class="mr-4 custom-save-btn ml-4" @click="update">Submit</v-btn>
            </v-row>
          </v-form>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import { required } from "vuelidate/lib/validators";
import { customerService } from "../../../../_services/customer.service";
import { router } from "../../../../_helpers/router";
import { environment } from "../../../../config/test.env";
import VueGoogleAutocomplete from "vue-google-autocomplete";
export default {
  components: {
    VueGoogleAutocomplete
  },
  data() {
    return {
     docError: false,
     editSwitch: false,
     disabled: 0,
    prefixs: ['Ms.', 'Mr.', 'Mrs.'],
    isLoading: false,
    items: [],
    model: null,
      valid: true,
      manager_img: "",
      apiUrl: environment.apiUrl,
      
      addForm: {
        farm_id: '',
        farm_images: [],
        latitude: '',
	longitude: '',
	farm_address: '',
	farm_unit: '',
	farm_city: '',
	farm_province: '',
	farm_zipcode: '',
	farm_active: true,
        manager_id: '',
	manager_image: '',
	manager_prefix: '',
	manager_name: '',
	manager_email: '',
	manager_phone: '',
	manager_address: '',
	manager_city: '',
	manager_province: '',
	manager_zipcode: '',
	manager_id_card: '',
	manager_card_image: ''
      },
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+/.test(v) || "E-mail must be valid"
      ],
      phoneRules: [
        v => !!v || "Phone number is required",
        v => /^\d*$/.test(v) || "Enter valid number",
        v => v.length >= 10 || "Enter valid number length"
      ],
      rules: [
        value =>
          !value ||
          value.size < 2000000 ||
          "Avatar size should be less than 2 MB!"
      ],
      myFiles: []
    };
  },
  mounted() {
    this.$refs.address.focus();
    customerService.getCustomer(this.$route.params.id).then(response => {
    //handle response
      if (response.status) {
   	console.log(response.data.customer_manager)
      } else {
        this.$toast.open({
          message: response.message,
          type: "error",
          position: "top-right"
        });
      }
    });
  },
  computed: {
    serverOptions() {
      const currentUser = JSON.parse(localStorage.getItem("currentUser"));
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
    url() {
      if (this.file) {
        let parsedUrl = new URL(this.file);
        return [parsedUrl.pathname];
      } else {
        return null;
      }
    }
  },
  created() {
    this.manager_image = "/images/avatar.png";
  },
  methods: {
    getAddressData: function(addressData, placeResultData, id) {
      this.addForm.latitude = addressData.latitude;
      this.addForm.longitude = addressData.longitude;
      this.addForm.farm_address = addressData.route;
    },
   //farm images process
   handleProcessFile1: function(error, file) {
      this.addForm.farm_images.push(file.serverId);
    },
    //manager image process
    handleProcessFile2: function(error, file) {
       this.manager_img = "../../"+file.serverId;
      this.addForm.manager_image = file.serverId;
    },
    //manager id card image process
    handleProcessFile3: function(error, file) {
      this.addForm.manager_card_image = file.serverId;
      //this.docError = false;
    },
    update() {
      console.log(this.addForm);
      if (this.$refs.form.validate()) {
        customerService.add(this.addForm).then(response => {
          //handle response
          if (response.status) {
            this.$toast.open({
              message: response.message,
              type: "success",
              position: "top-right"
            });
            //redirect to login
            //router.push("/admin/customer");
          } else {
            this.$toast.open({
              message: response.message,
              type: "error",
              position: "top-right"
            });
          }
        });
      }
    }
  }
};
</script>
