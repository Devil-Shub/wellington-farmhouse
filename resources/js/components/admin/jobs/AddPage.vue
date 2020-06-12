<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col cols="12" md="12" class="pl-0">
            <v-form ref="form" v-model="valid" lazy-validation>
                <v-col class="d-flex pt-0" cols="12">
		    <v-col sm="2" class="label-align pt-0">
		        <label>Customer Name</label>
		    </v-col>
	        <v-col sm="4" class="pt-0">
		       <v-select
			v-model="addForm.customer_name"
			:items="customerName"
			label="Select Customer"
			:rules="[v => !!v || 'Customer Name is required']"
			item-text="first_name"
			item-value="id"
			@change="customerSelection"
		    ></v-select>
	    </v-col>
                </v-col>
                <v-col class="d-flex pt-0" cols="12">
                    <v-col sm="2" class="label-align pt-0">
                        <label>Manager Name</label>
                    </v-col>
                    <v-col sm="4" class="pt-0">
                        <v-select
                        :v-model="addForm.manager_name"
			:items="managerName"
			label="Select Manager"
			:rules="[v => !!v || 'Manager Name is required']"
			item-text="first_name"
			item-value="id"
                        @change="managerSelection"
                        ></v-select>
                    </v-col>
                </v-col>
                <v-col class="d-flex pt-0" cols="12">
                    <v-col sm="2" class="label-align pt-0">
                        <label>Farm Address</label>
                    </v-col>
                    <v-col sm="4" class="pt-0">
                        <v-text-field
                            label=""
                            v-model="addForm.farm_add"
                            required
 			   disabled
                            :rules="[v => !!v || 'Farm Address is required']"
                        ></v-text-field>
                    </v-col>
                </v-col>
                <v-col cols="12" class="textarea-parent d-flex pt-0">
                    <v-col sm="2" class="label-align pt-0">
                        <label>Job Description</label>
                    </v-col>
                    <v-col sm="4" class="pt-0">
                        <v-textarea rows="1"
                            auto-grow
                            clearable
                            clear-icon="cancel"
                            label=""
                            v-model="addForm.job_desc"
                        ></v-textarea>
                    </v-col>
                </v-col>
                <v-col class="d-flex pt-0" cols="12">
                    <v-col sm="2" class="label-align pt-0">
                        <label>Service Name</label>
                    </v-col>
                    <v-col sm="4" class="pt-0">
                        <v-select
                        :v-model="addForm.service_name"
			:items="serviceName"
			label="Select Service"
			:rules="[v => !!v || 'Service Name is required']"
			item-text="service_name"
			item-value="id"
                        @change="serviceSelection"
                        ></v-select>
                    </v-col>
                </v-col>
                <v-col class="d-flex pt-0" cols="12" v-if="weightShow">
                    <v-col sm="2" class="label-align pt-0">
                        <label>Job Weight</label>
                    </v-col>
                    <v-col sm="4" class="pt-0">
                        <v-text-field
		            v-model="addForm.job_weight"
		            required
	                    type="number"
		            :rules="killometerRules"
		          ></v-text-field>
                    </v-col>
                </v-col>
                <div  id="showTimingSection" v-if="servicetime">
                <v-col cols="12" md="12" class="custom-col calendar-col pt-0">
                    <v-col sm="2" class="label-align pt-0">
                        <label>Start Date</label>
                    </v-col>
                    <v-col sm="4" class="pt-0">
                        <v-menu
                            v-model="menu1"
                            :close-on-content-click="false"
                            :nudge-right="40"
                            transition="scale-transition"
                            offset-y
                            min-width="290px">
                            <template v-slot:activator="{ on }">
                            <v-text-field
                                v-model="date"
                                label="Start Date"
                                prepend-icon="event"
                                readonly
                                v-on="on"
                                required
                                :rules="[v => !!v || 'Start date is required']"
                            ></v-text-field>
                            </template>
                            <v-date-picker v-model="date" @input="menu1 = false" :min="setDate"></v-date-picker>
                        </v-menu>
                    </v-col>
                </v-col>
              
                <v-col cols="12" md="12" class="input-max pt-0" >
                   <v-col sm="2" class="label-align pt-0">
                        <label>Time Slots</label>
                    </v-col>
                 <v-col sm="10" class="label-align pt-0">
                    <v-radio-group  row v-model="addForm.start_time" :mandatory="false" required :rules="[v => !!v || 'Time slot is required']">
<template v-for="(timeSlot, index) in servicetime">
                    <v-radio :label="timeSlot.slot_start+'-'+timeSlot.slot_end" :value="timeSlot.id" ></v-radio>
                  
</template>
                    </v-radio-group>
	            </v-col>
 </v-col>
                </div>
  <v-col cols="12" md="12">
                    <file-pond
                name="uploadImage"
                ref="pond"
                label-idle="Drop files here..."
                allow-multiple="false"
                v-bind:server="serverOptions"
                v-bind:files="myFiles"
                v-on:processfile="handleProcessFile"
                allow-file-type-validation="true"
                accepted-file-types="image/jpeg, image/png"/>
                  </v-col>
                <v-btn color="success" class="mr-4 custom-save-btn ml-4" @click="submit">Submit</v-btn>
            </v-form>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import { required } from "vuelidate/lib/validators";
import { router } from "../../../_helpers/router";
import { jobService } from "../../../_services/job.service";
import { environment } from "../../../config/test.env";
export default {
  components: {
  },
  data() {
      return {
          valid: true,
          setDate:new Date().toISOString().substr(0, 10),
          menu1: false,
	  weightShow: false,
          date: "",
          start_date: "",
          apiUrl: environment.apiUrl,
          customerName: [],
          managerName: [],
          serviceName: [],
 	  servicetime: '',
 	  customer_id: '',
          addForm: {
              customer_name: "",
              manager_name: "",
              service_name: "",
              job_desc: "",
              farm_add: "",
	      farm_id: "",
              farm_images: [],
              start_time: "",
              start_date: "",
	      job_weight:"",
              job_amount: "",
          },
	     killometerRules: [
		v => !!v || "Job weight is required",
		//v => /^\d*$/.test(v) || "Enter valid weight",
	      ],
          myFiles: [],
      }
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
  mounted() {
    this.getResults();
     this.getService();
   },
  methods: {
   handleProcessFile: function(error, file) {
     this.addForm.farm_images.push(file.serverId);
    },
     getResults() {
      jobService.getCustomer().then(response => {
        //handle response
        if (response.status) {
          this.customerName = response.data;
         console.log(this.customerName)
        } else {
          this.$toast.open({
            message: response.message,
            type: "error",
            position: "top-right"
          });
        }
      });
    },
     getService() {
      jobService.listService().then(response => {
        //handle response
        if (response.status) {
          this.serviceName = response.data;
        } else {
          this.$toast.open({
            message: response.message,
            type: "error",
            position: "top-right"
          });
        }
      });
    },
	customerSelection(val){
 	 this.customer_id = val;
	 jobService.getManager(val).then(response => {
		//handle response
		if (response.status) {
		  this.managerName = response.data.customer_manager;
		} else {
		  this.$toast.open({
		    message: response.message,
		    type: "error",
		    position: "top-right"
		  });
		}
	      });
       },
	managerSelection(val){
         this.addForm.manager_name = val;
	 jobService.getFrams({customer_id: this.customer_id, manager_id: val}).then(response => {
		//handle response
		if (response.status) {
		  this.addForm.farm_id = response.data.id;
		  this.addForm.farm_add = response.data.farm_address+' '+response.data.farm_city+' '+response.data.farm_province+' '+response.data.farm_zipcode;
		} else {
		  this.$toast.open({
		    message: response.message,
		    type: "error",
		    position: "top-right"
		  });
		}
	      });
       },
       serviceSelection(val){
         this.addForm.service_name = val;
	this.serviceName.find(file => {
	  if (file.id == val) {
 	     this.addForm.job_amount = file.price;
           if(file.service_rate == 1){ 
	    this.weightShow = true;
	   }else{
           this.addForm.job_weight = "";
	   this.weightShow = false;
	   }  
	  }
	})

	 jobService.servicesTimeSlots(val).then(response => {
		//handle response
		if (response.status) {
		this.servicetime = response.data;
		} else {
		  this.$toast.open({
		    message: response.message,
		    type: "error",
		    position: "top-right"
		  });
		}
	      });
       },
      submit() {
     this.addForm.start_date = this.date;
    
      if (this.$refs.form.validate()) {
          console.log(this.addForm);
      } else {
        this.$toast.open({
            message: 'error',
            type: "error",
            position: "top-right"
        });
      }
    },
    showTiming(){
        console.log('abcd');
    }
  }
}
</script>
