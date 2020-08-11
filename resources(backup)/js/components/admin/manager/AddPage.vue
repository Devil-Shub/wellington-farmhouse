<template>
  <v-app>
    <v-container fluid>
      <v-row>
<<<<<<< HEAD
      <div class="bread_crum">
      <ul>
        <li>
          <h4 class="main-title text-left top_heading">
            Add New Manager
            <span class="right-bor"></span>
          </h4>
        </li>
        <li>
          <router-link to="/admin/dashboard" class="home_svg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-home h-5 w-5 mb-1 stroke-current text-primary"
            >
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16px"
                height="16px"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-chevrons-right w-4 h-4"
              >
                <polyline points="13 17 18 12 13 7" />
                <polyline points="6 17 11 12 6 7" />
              </svg>
            </span>
          </router-link>
        </li>
        <li>
          <router-link to="/admin/services">
            List
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16px"
                height="16px"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-chevrons-right w-4 h-4"
              >
                <polyline points="13 17 18 12 13 7" />
                <polyline points="6 17 11 12 6 7" />
              </svg>
            </span>
          </router-link>
        </li>
        <li>Add</li>
      </ul>
    </div>
     
        <v-col cols="12" md="12" class="new_driver" id="new_driver">
          <v-form ref="form" v-model="valid" class="v-form custom_form_field" lazy-validation @submit="update">
            <v-row>   
=======
     <h4 class="main-title text-left">Add New Manager</h4>
        <v-col cols="12" md="12" class="new_driver">
          <v-form ref="form" v-model="valid" lazy-validation @submit="update">
            <v-row>
>>>>>>> 53143c306eb7b086df0f8b6f7c0959876d89c757
            <v-col cols="12" md="12">
             <div
                class="v-avatar v-list-item__avatar"
                style="height: 80px; min-width: 80px; width: 80px;"
              >
                <img :src="avatar" />
<<<<<<< HEAD
              </div> 
=======
              </div>
>>>>>>> 53143c306eb7b086df0f8b6f7c0959876d89c757
            </v-col>

              <v-col cols="12" md="12" class="custom-img-holder">
                <file-pond
                  name="uploadImage"
                  ref="pond"
                  label-idle="Drop files here..."
                  v-bind:allow-multiple="false"
                  v-bind:server="serverOptions"
                  v-bind:files="myFiles"
                  v-on:addfilestart="setUploadIndex"
                  allow-file-type-validation="true"
                  accepted-file-types="image/jpeg, image/png"
                  v-on:processfile="handleProcessFile"
                  v-on:processfilerevert="handleRemoveFile"
                />
                <div class="v-messages theme--light error--text" role="alert" v-if="profileImgError">
                    <div class="v-messages__wrapper">
                      <div class="v-messages__message">Profile image is required</div>
                    </div>
                  </div>
              </v-col>
              <v-col cols="6" md="6" class="pl-0 manager-cols">
                <v-col cols="12" md="12" class="custom-col">
                  <v-col sm="4" class="label-align pt-0">
                    <label>Manager name</label>
                  </v-col>
                  <v-col sm="7" class="pt-0">
                    <v-text-field
                      v-model="addForm.first_name"
                      required
                      :rules="[v => !!v || 'Manager name is required']"
                       label="Enter Name"
                       placeholder
                    ></v-text-field>
                  </v-col>
                </v-col>
                <v-col cols="12" md="12" class="custom-col">
                  <v-col sm="4" class="label-align pt-0">
                    <label>E-mail</label>
                  </v-col>
                  <v-col sm="7" class="pt-0">
                    <v-text-field
                      v-model="addForm.email"
                      :rules="emailRules"
                      name="email"
                      required
                       label="Enter Email"
                       placeholder
                    ></v-text-field>
                  </v-col>
                </v-col>
                <v-col cols="12" md="12" class="custom-col">
                  <v-col sm="4" class="label-align pt-0">
                    <label>Address</label>
                  </v-col>
                  <v-col sm="7" class="pt-0">
                    <v-text-field
                      v-model="addForm.address"
                      required
                      :rules="[v => !!v || 'address is required']"
                       label="Enter Address"
                       placeholder
                    ></v-text-field>
                  </v-col>
                </v-col>
                <v-col cols="12" md="12" class="custom-col">
                  <v-col sm="4" class="label-align pt-0">
                    <label>City</label>
                  </v-col>
                  <v-col sm="7" class="pt-0">
                    <v-text-field
                      v-model="addForm.city"
                      required
                      :rules="[v => !!v || 'City is required']"
                      label="Enter City"
                       placeholder
                    ></v-text-field>
                  </v-col>
                </v-col>
                <v-col cols="12" md="12" class="custom-col">
                  <v-col sm="4" class="label-align pt-0">
                    <label>State</label>
                  </v-col>
                  <v-col sm="7" class="pt-0">
                    <v-text-field
                      v-model="addForm.state"
                      required
                      :rules="[v => !!v || 'State is required']"
                       label="Enter State"
                       placeholder
                    ></v-text-field>
                  </v-col>
                </v-col>

                <v-col cols="12" md="12" class="custom-col">
                  <v-col sm="4" class="label-align pt-0">
                    <label>Country</label>
                  </v-col>
                  <v-col sm="7" class="pt-0">
                    <v-text-field
                      v-model="addForm.country"
                      required
                      :rules="[v => !!v || 'Country is required']"
                       label="Enter Country"
                       placeholder
                    ></v-text-field>
                  </v-col>
                </v-col>
              </v-col>

              <v-col cols="6" md="6" class="pl-0 manager-cols">
                <v-col cols="12" md="12" class="custom-col">
                  <v-col sm="4" class="label-align pt-0">
                    <label>Zipcode</label>
                  </v-col>
                  <v-col sm="7" class="pt-0">
                    <v-text-field
                      v-model="addForm.manager_zipcode"
                      :rules="[v => !!v || 'Zip code is required']"
                      required
                       label="Enter Zip code"
                       placeholder
                    ></v-text-field>
                  </v-col>
                </v-col>
                <v-col cols="12" md="12" class="custom-col">
                  <v-col sm="4" class="label-align pt-0">
                    <label>Mobile Number</label>
                  </v-col>
                  <v-col sm="7" class="pt-0">
                    <v-text-field
                      v-model="addForm.manager_phone"
                      :rules="phoneRules"
                      required
                        label="Enter Number"
                       placeholder
                      maxlength="10"
                    ></v-text-field>
                  </v-col>
                </v-col>
                <v-col cols="12" md="12" class="custom-col">
                  <v-col sm="4" class="label-align pt-0">
                    <label>Identification number</label>
                  </v-col>
                  <v-col sm="7" class="pt-0">
                    <v-text-field
                      v-model="addForm.identification_number"
                      required
                      :rules="[v => !!v || 'Identification number is required']"
                       label="Enter Number"
                       placeholder
                    ></v-text-field>
                  </v-col>
                </v-col>

                <v-col cols="12" md="12" class="custom-col calendar-col">
                  <v-col sm="4" class="label-align pt-0">
                    <label>Joining Date</label>
                  </v-col>
                  <v-col sm="7" class="pt-0">
                  <v-menu
                    v-model="menu1"
                    :close-on-content-click="false"
                    :nudge-right="40"
                    transition="scale-transition"
                    offset-y
                    min-width="290px"
                  >
                    <template v-slot:activator="{ on }">
                      <v-text-field
                        v-model="date"
                        prepend-icon="event"
                        readonly
                        v-on="on"
                        required
                        :rules="[v => !!v || 'Joining date is required']"
                        label="Enter Date"
                       placeholder
                      ></v-text-field>
                    </template>
                    <v-date-picker v-model="date" @input="menu1 = false"></v-date-picker>
                  </v-menu>
                  </v-col>
                </v-col>

                <v-col cols="12" md="12" class="custom-col calendar-col">
                  <v-col sm="4" class="label-align pt-0">
                    <label>Releaving date(if required)</label>
                  </v-col>
                  <v-col sm="7" class="pt-0">
                  <v-menu
                    v-model="menu2"
                    :close-on-content-click="false"
                    :nudge-right="40"
                    transition="scale-transition"
                    offset-y
                    min-width="290px"

                  >
                    <template v-slot:activator="{ on }">
                      <v-text-field
                        v-model="date1"
                        prepend-icon="event"
                        readonly
                        label="Enter Date"
                       placeholder
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker v-model="date1" @input="menu2 = false"></v-date-picker>
                  </v-menu>
                  </v-col>
                </v-col>
                <v-col cols="12" md="12" class="custom-col">
                  <v-col sm="4" class="label-align pt-0">
                    <label>Manager Salary</label>
                  </v-col>
                  <v-col sm="7" class="pt-0">
                    <v-text-field
                      v-model="addForm.salary"
                      required
                       
                      :rules="salaryRules"
                        label="Enter"
                       placeholder
                    ></v-text-field>
                  </v-col>
                </v-col>
                <v-col cols="12" md="12" class="custom-col custom-img-holder">
                <!-- single id document -->
                <div class="col-img-holder">
                  <file-pond
                    name="uploadImage"
                    ref="pond"
		    v-bind:required="true"
		   :rules="documentRules"
                    label-idle="Identification Document..."
                    v-bind:allow-multiple="false"
                    v-bind:server="serverOptions"
                    v-bind:files="myFiles"
                    v-on:addfilestart="setUploadIndex"
                    allow-file-type-validation="true"
                    accepted-file-types="image/jpeg, image/png"
                    v-on:processfile="handleProcessFile1"
                v-on:processfilerevert="handleRemoveFile1"
                  />
		<div class="v-messages theme--light error--text" role="alert" v-if="docError">
		<div class="v-messages__wrapper"><div class="v-messages__message">Document upload is required</div></div>
		</div>
                  </div>
                  <!-- ends here -->
                </v-col>
              </v-col>

              <v-btn :loading="loading" :disabled="loading" color="success" type="submit" class="mr-4 custom-save-btn ml-4 manager-save" @click="update">Submit</v-btn>
            </v-row>
          </v-form>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import { required } from "vuelidate/lib/validators";
import { managerService } from "../../../_services/manager.service";
import { router } from "../../../_helpers/router";
import { environment } from "../../../config/test.env";

export default {
  components: {
    //      'image-component': imageVUE,
  },
  data() {
    return {
      loading: null,
      docError: false,
      valid: true,
      avatar: null,
      menu2: false,
      uploadInProgress: false,
      profileImgError: false,
      menu1: false,
      date: "",
      date1: "",
      apiUrl: environment.apiUrl,
      addForm: {
        first_name: "",
        city: "",
        email: "",
        state: "",
        country: "",
        user_image: null,
        phone: "",
        role_id: 2,
        document: "",
        joining_date: "",
        releaving_date: "",
        identification_number: "",
        salary: "",
        manager_phone: "",
        manager_zipcode: "",
        address: ""
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
      salaryRules: [
        v => !!v || "Manager salary is required",
        v => /^\d*$/.test(v) || "Enter valid number"
      ],
      documentRules: [
        v => !!v || "Manager salary is rdfdfdfequired"
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
        },
        revert:{
          url: "deleteImage",
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
    this.avatar = "/images/avatar.png";
  },
  methods: {
    setUploadIndex() {
      this.uploadInProgress = true;
    },
    handleProcessFile: function(error, file) {
      this.addForm.user_image = file.serverId;
      this.avatar = "../../"+file.serverId;
      this.profileImgError = false;
      this.uploadInProgress = false;
    },
    handleRemoveFile: function(file){
      this.addForm.user_image = '';
      this.avatar = "/images/avatar.png";
    },
    handleProcessFile1: function(error, file) {
      this.docError = false
      this.uploadInProgress = false;
      this.addForm.document = file.serverId;
    },
    handleRemoveFile1: function(file){
      this.addForm.document = '';
      this.docError = true;
    },
    update: function(e) {
      //stop page to reload
      e.preventDefault();
      if(this.addForm.document == ''){
	      this.docError = true
       }

       if(this.uploadInProgress) {
        this.$toast.open({
              message: "Image uploading is in progress!",
              type: "error",
              position: "top-right"
            });
            return false;
      }

      //  if(this.addForm.user_image == '' || this.addForm.user_image == null){
	    //   this.profileImgError = true;
      //  }
      this.addForm.joining_date = this.date;
      this.addForm.releaving_date = this.date1;
      if (this.$refs.form.validate() && (!this.docError && !this.profileImgError)) {
        if(this.loading) {
          return false;
        }
        //start loader
        this.loading = true;
        managerService.add(this.addForm).then(response => {
          //stop loader
        this.loading = false;
          //handle response
          if (response.status) {
            this.$toast.open({
              message: response.message,
              type: "success",
              position: "top-right"
            });
            //redirect to login
             const currentUser = JSON.parse(localStorage.getItem("currentUser"));
              if(currentUser.data.user.role_id == 1){
	       router.push("/admin/manager");
              }else{
		router.push("/manager/manager");
	      }
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

<style>
    .new_driver {
       background-color: #fff;
       box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.05);
       border-radius: 7px;
       padding: 20px 0px !important;
}  
.v-text-field__slot input {
    border: 0px !important;
} 
.filepond--root {
    margin-bottom: 0px !important;
    padding-left: 0px !important;
}
.filepond--wrapper {
    padding-left: 0px !important;
}    
.new_driver .v-input input {
    padding-left: 0px !important;
    padding-right: 0px !important;
}
#new_driver.new_driver button {
    background: #11b276 !important;
    border-radius: 6px;
    font-weight: 300;
    height: 38px;
} 
.v-menu__content .v-picker .v-picker__title.primary {
    background-color: #11b276 !important;
}
label {
    font-weight: 500;
}
#new_driver .custom_form_field label {
    font-size: 14px; 
}
#app main.v-content .v-content__wrap h4.main-title {
    font-weight: 400;
}
</style>
