    <template>
  <v-app>
    <v-container fluid>
      <v-row>
<<<<<<< HEAD
      <div class="bread_crum">
      <ul>
        <li>
          <h4 class="main-title text-left top_heading">
            Add New Skidsteer
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
          <v-form ref="form" v-model="valid" class="v-form custom_form_field" lazy-validation @submit="save">
=======
<h4 class="main-title text-left ml-6">Add New Skidsteer</h4>
        <v-col cols="12" md="12" class="new_driver">
          <v-form ref="form" v-model="valid" lazy-validation @submit="save">
>>>>>>> 53143c306eb7b086df0f8b6f7c0959876d89c757
            <v-row>
              <v-col cols="6" md="6">
                <v-col cols="12" md="12" class="pt-0 pl-0">
                  <v-col sm="4" class="label-align pt-0">
                    <label>Company Name</label>
                  </v-col>
                  <v-col sm="7" class="pt-0">
                    <v-text-field
                      v-model="addForm.company_name"
                      :rules="[v => !!v || 'Company name is required']"
                      required
                       label="Enter Company name"
                      placeholder
                    ></v-text-field>
                  </v-col>
                </v-col>
                <v-col cols="12" md="12" class="pt-0 pl-0">
                  <v-col sm="4" class="label-align pt-0">
                    <label>Skidsteer Number</label>
                  </v-col>
                  <v-col sm="7" class="pt-0">
                    <v-text-field
                      v-model="addForm.truck_number"
                      :rules="[v => !!v || 'Skidsteer number is required']"
                      required
                       label="Enter Skidsteer number"
                      placeholder
                    ></v-text-field>
                  </v-col>
                </v-col>

                <v-col cols="12" md="12" class="pt-0 pl-0">
                  <v-col sm="4" class="label-align pt-0">
                    <label>Chassis Number</label>
                  </v-col>
                  <v-col sm="7" class="pt-0">
                    <v-text-field
                      v-model="addForm.chaase_number"
                      :rules="[v => !!v || 'Chassis number is required']"
                      required
                      label="Enter Chassis number"
                      placeholder
                    ></v-text-field>
                  </v-col>
                </v-col>

                <v-col cols="12" md="12" class="pt-0 pl-0">
                  <v-col sm="4" class="label-align pt-0">
                    <label>Insurance Number</label>
                  </v-col>
                  <v-col sm="7" class="pt-0">
                    <v-text-field
                      v-model="addForm.insurance_number"
                      :rules="[v => !!v || 'Insurance number is required']"
                      required
                      label="Enter Insurance number"
                      placeholder
                    ></v-text-field>
                  </v-col>
                </v-col>

                <v-col cols="12" md="12" class="pt-0 pl-0">
                  <v-col sm="4" class="label-align pt-0">
                    <label>Insurance Date</label>
                  </v-col>
                  <v-col sm="7" class="pt-0">
                    <v-menu
                      v-model="menu2"
                      :close-on-content-click="false"
                      :nudge-right="40"
                      transition="scale-transition"
                      offset-y
                      label="Date"
                      placeholder
                      min-width="290px"
                    >
                      <template v-slot:activator="{ on }">
                        <v-text-field
                          v-model="date"
                          prepend-icon="event"
                          readonly
                          label="Date"
                      placeholder
                          v-on="on"
                          required
                        :rules="[v => !!v || 'Insurance date is required']"
                        ></v-text-field>
                      </template>
                      <v-date-picker v-model="date" @input="menu2 = false"></v-date-picker>
                    </v-menu>
                  </v-col>
                </v-col>
                <v-col cols="12" md="12" class="pt-0 pl-0">
                  <v-col sm="4" class="label-align pt-0">
                    <label>Insurance Expiry Date</label>
                  </v-col>
                  <v-col sm="7" class="pt-0">
                    <v-menu
                      v-model="menu1"
                      :close-on-content-click="false"
                      :nudge-right="40"
                      transition="scale-transition"
                      offset-y
                        label="Date"
                      placeholder
                      min-width="290px"
                    >
                      <template v-slot:activator="{ on }">
                        <v-text-field
                          v-model="date1"
                          prepend-icon="event"
                          readonly
                           label="Date"
                      placeholder
                          v-on="on"
                          required
                        :rules="[v => !!v || 'Insurance expiry date is required']"
                        ></v-text-field>
                      </template>
                      <v-date-picker v-model="date1" @input="menu1 = false" :min="setDate"></v-date-picker>
                    </v-menu>
                  </v-col> 
                </v-col>
</v-col>

                <v-col cols="6" md="6">

                <v-col cols="12" md="12" class="pt-0 pl-0">
                  <v-col sm="4" class="label-align pt-0">
                    <label>Total Miles</label>
                  </v-col>
                  <v-col sm="7" class="pt-0">
                    <v-text-field
                      v-model="addForm.total_killometer"
                      required
                      label="Total Miles"
                      placeholder
                      :rules="killometerRules"
                    ></v-text-field>
                  </v-col>
                </v-col>

                <v-col cols="12" md="12" class="pt-0 pl-0">
                  <v-col sm="4" class="label-align pt-0">
                    <label>Skidsteer Capacity</label>
                  </v-col>
                  <v-col sm="7" class="pt-0">
                    <v-text-field
                    type="number"
                      v-model="addForm.capacity"
                      required
                       label="Capacity"
                      placeholder
                    ></v-text-field>
                  </v-col>
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
import { skidsteerService } from "../../../_services/skidsteer.service";
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
      avatar: null,
      date: "",
      date1: "",
     uploadInProgress:false,
      setDate:new Date().toISOString().substr(0, 10),
      user_image: "",
      addForm: {
        vehicle_type: 2,
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
	is_active: true
      },
      killometerRules: [
        v => !!v || "Skidsteer miles is required",
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
  created() {},
  methods: {
    setUploadIndex() {
      this.uploadInProgress = true;
    },
    handleProcessFile1: function(error, file) {
      this.addForm.document = file.serverId;
      this.docError = false;
      this.uploadInProgress = false;
    },
    handleRemoveFile1: function(file){
      this.addForm.document = '';
      this.docError = true;
    },
    handleProcessFile2: function(error, file) {
      this.addForm.insurance_document = file.serverId;
      this.insdocError = false;
      this.uploadInProgress = false;
    },
    handleRemoveFile2: function(file){
      this.addForm.insurance_document = '';
       this.insdocError = true;
    },
    save: function(e) {
      //stop page to reload
      e.preventDefault();
   	if(this.addForm.document == ''){
		this.docError = true;
	}
        if(this.addForm.insurance_document == ''){
		this.insdocError = true;
	}
      if(this.uploadInProgress) {
        this.$toast.open({
              message: "Image uploading is in progress!",
              type: "error",
              position: "top-right"
            });
            return false;
      }
      this.addForm.insurance_date = this.date;
      this.addForm.insurance_expiry = this.date1;
      if (this.$refs.form.validate() && (!this.insdocError) && (!this.docError)) {
        if(this.loading) {
          return false;
        }
        //start loader
        this.loading = true;

        skidsteerService.add(this.addForm).then(response => {
          //stop loader
          this.loading = false;
         //handle response
         if(response.status) {
             this.$toast.open({
               message: response.message,
               type: 'success',
               position: 'top-right'
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
               type: 'error',
               position: 'top-right'
             })
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

</style>