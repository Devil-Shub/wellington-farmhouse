<template>
  <v-app>
    <v-container fluid>
      <v-row>
<h2>Edit Skidsteer</h2>
        <v-col cols="12" md="12">
          <v-form ref="form" v-model="valid" lazy-validation @submit="save">
            <v-row>
              <v-col cols="8" md="8">
                <v-col cols="12" md="12">
                  <v-text-field
                    v-model="addForm.company_name"
                    :rules="[v => !!v || 'Company name is required']"
                    label="Company Name"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="12">
                  <v-text-field
                    v-model="addForm.truck_number"
                    :rules="[v => !!v || 'Skidsteer number is required']"
                    label="Skidsteer Number"
                    required
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="12">
                  <v-text-field
                    v-model="addForm.chaase_number"
                    :rules="[v => !!v || 'Chassis number is required']"
                    label="Chassis Number"
                    required
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="12">
                  <v-text-field
                    v-model="addForm.insurance_number"
                    :rules="[v => !!v || 'Insurance number is required']"
                    label="Insurance Number"
                    required
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="12">
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
                        v-model="date"
                        label="Insurance Date"
                        prepend-icon="event"
                        readonly
                        v-on="on"
			required
                      :rules="[v => !!v || 'Insurance date is required']"
                      ></v-text-field>
                    </template>
                    <v-date-picker v-model="date" @input="menu2 = false"></v-date-picker>
                  </v-menu>
                </v-col>
                <v-col cols="12" md="12">
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
                        v-model="date1"
                        label="Insurance expiry date"
                        prepend-icon="event"
                        readonly
                        v-on="on"
			required
                      :rules="[v => !!v || 'Insurance expiry date is required']"
                      ></v-text-field>
                    </template>
                    <v-date-picker v-model="date1" @input="menu1 = false" :min="setDate"></v-date-picker>
                  </v-menu>
                </v-col>

                <v-col cols="12" md="12">
                  <v-text-field
                    v-model="addForm.total_killometer"
                    label="Total Miles"
                    required
                   :rules="killometerRules"
                  ></v-text-field>
                </v-col>
                 <v-col cols="12" md="12">
                  <v-text-field
                   type="number"
                    v-model="addForm.capacity"
                    label="Skidsteer Capacity"
                    required
                  ></v-text-field>
                </v-col>
                 <v-col cols="12" md="12">
                  <file-pond
                    name="uploadImage"
                    ref="pond"
                    label-idle="Upload RC"
                    v-bind:allow-multiple="false"
                    v-bind:server="serverOptions"
                    v-bind:files="myFiles"
                    v-on:addfilestart="setUploadIndex"
                    v-on:processfile="handleProcessFile1"
                    v-on:processfilerevert="handleRemoveFile1"
		    allow-file-type-validation="true"
		    accepted-file-types="image/jpeg, image/png"
                  />
                <div class="v-messages theme--light error--text" role="alert" v-if="docError">
		<div class="v-messages__wrapper"><div class="v-messages__message">RC document upload is required</div></div>
		</div>
                  <div v-if="rc" style="height:200px; width:200px">
                    <img :src="rc" alt="Rc" style="height:200px;" />
                  </div>
                </v-col>
                <v-col cols="12" md="12">
                  <file-pond
                    name="uploadImage"
                    ref="pond"
                    label-idle="Upload Insurance"
                   v-bind:allow-multiple="false"
                    v-bind:server="serverOptions"
                    v-bind:files="myFiles"
                    v-on:addfilestart="setUploadIndex"
                    v-on:processfile="handleProcessFile2"
                    v-on:processfilerevert="handleRemoveFile2"
		    allow-file-type-validation="true"
		    accepted-file-types="image/jpeg, image/png"
                  />
                <div class="v-messages theme--light error--text" role="alert" v-if="insdocError">
		<div class="v-messages__wrapper"><div class="v-messages__message">Insurance document upload is required</div></div>
		</div>
<div v-if="insurancedocument" style="height:200px; width:200px">
                    <img :src="insurancedocument" alt="insurancedocument" style="height:200px;" />
                  </div>
                </v-col>
 <v-col cols="12" md="12">
		 <v-switch
		      v-model="addForm.is_active"
		      label="Skidsteer Available"
		    ></v-switch>
		</v-col>
              </v-col>

              <v-col cols="12" md="12">
                <v-btn type="submit"
                  :loading="loading"
                  :disabled="loading" color="success" class="mr-4 custom-save-btn" @click="save">Submit</v-btn>
              </v-col>
            </v-row>
          </v-form>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import { required } from "vuelidate/lib/validators";
import { truckService } from "../../../_services/truck.service";
import { router } from "../../../_helpers/router";
import { environment } from "../../../config/test.env";
import { authenticationService } from "../../../_services/authentication.service";
export default {
  components: {
    //      'image-component': imageVUE,
  },

  data() {
    return {
      loading: null,
      docError: false,
      insdocError: false,
      menu2: false,
      menu1: false,
      valid: true,
      apiUrl: environment.apiUrl,
      imgUrl: environment.imgUrl,
      rc: null,
      insurancedocument: null,
      date: "",
      date1: "",
     uploadInProgress:false,
      setDate:new Date().toISOString().substr(0, 10),
      user_image: "",
      addForm: {
        vehicle_type: 1,
        company_name: "",
        truck_number: "",
        chaase_number: "",
        insurance_number: "",
        insurance_date: "",
        document: "",
	insurance_document: "",
        total_killometer: "",
        capacity:'',
        insurance_expiry: "",
	is_active: ''
      },
          killometerRules: [
        v => !!v || "Truck miles is required",
        v => /^\d*$/.test(v) || "Enter valid number",
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
  mounted: function() {
    truckService.getTruck(this.$route.params.id).then(response => {
      //handle response
      if (response.status) {
        this.addForm.id = response.data.id;
        this.addForm.company_name = response.data.company_name;
        this.addForm.truck_number = response.data.truck_number;
        this.addForm.chaase_number = response.data.chaase_number;
        this.addForm.insurance_number = response.data.vehicle_insurance.insurance_number;
        this.addForm.total_killometer = response.data.killometer;
        this.addForm.capacity = response.data.capacity;
        this.addForm.document = response.data.document;
        this.addForm.insurance_document = response.data.insurance_document;
        this.addForm.is_active = response.data.status;
        this.date = new Date(response.data.vehicle_insurance.insurance_date).toISOString().substr(0, 10);
        this.date1 = new Date(response.data.vehicle_insurance.insurance_expiry).toISOString().substr(0, 10);
        if (response.data.document) {
          this.rc = this.imgUrl + response.data.document;
        }
        if (response.data.insurance_document) {
          this.insurancedocument = this.imgUrl + response.data.insurance_document;
        }
      } else {
         const currentUser = authenticationService.currentUserValue;
	    if(currentUser.data.user.role_id == 1){
          	router.push("/admin/skidsteers");
	    }else{
          	router.push("/manager/skidsteers");
	    }
        this.$toast.open({
          message: response.message,
          type: "error",
          position: "top-right"
        });
      }
    });
  },
  methods: {
    setUploadIndex() {
      this.uploadInProgress = true;
    },
    handleProcessFile1: function(error, file) {
      this.addForm.document = file.serverId;
      this.rc = this.imgUrl + file.serverId;
      this.docError = false;
      this.uploadInProgress = false;
    },
    handleRemoveFile1: function(file){
      this.addForm.document = '';
      this.docError = true;
      this.rc = '';
    },
    handleProcessFile2: function(error, file) {
      this.addForm.insurance_document = file.serverId;
      this.insurancedocument = this.imgUrl+file.serverId;
      this.insdocError = false;
      this.uploadInProgress = false;
    },
    handleRemoveFile2: function(file){
      this.addForm.insurance_document = '';
      this.insdocError = true;
      this.insurancedocument = '';
    },
    save: function(e) {
      //stop page to reload
      e.preventDefault();

      if(this.uploadInProgress) {
        this.$toast.open({
              message: "Image uploading is in progress!",
              type: "error",
              position: "top-right"
            });
            return false;
      }
   	if(this.addForm.document == ''){
		this.docError = true;
	}
        if(this.addForm.insurance_document == ''){
		this.insdocError = true;
	}
      this.addForm.insurance_date = this.date;
      this.addForm.insurance_expiry = this.date1;
      if (this.$refs.form.validate() && (!this.insdocError) && (!this.docError)) {
        if(this.loading) {
          return false;
        }
        //start loader
        this.loading = true;

        truckService.edit(this.addForm).then(response => {
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
	    const currentUser = authenticationService.currentUserValue;
	    if(currentUser.data.user.role_id == 1){
          	router.push("/admin/skidsteers");
	    }else{
          	router.push("/manager/skidsteers");
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
