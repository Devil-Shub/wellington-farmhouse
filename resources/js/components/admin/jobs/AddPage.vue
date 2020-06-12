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
                        :items="serviceName"
                        v-model="addForm.service_name"
                        label="Select Service"
                        :rules="[v => !!v || 'Service Name is required']"
                        ></v-select>
                    </v-col>
                </v-col>
                <div class="hidden-area" id="showTimingSection" v-if="addForm.service_name">
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
                            <v-date-picker v-model="date" @input="menu1 = false"></v-date-picker>
                        </v-menu>
                    </v-col>
                </v-col>
                <v-col class="d-flex pt-0" cols="12">
                    <v-col sm="2" class="label-align pt-0">
                        <label>Start Time</label>
                    </v-col>
                    <v-col sm="4" class="pt-0">
                        <v-text-field
                            label=""
                            v-model="addForm.start_time"
                            required
                            :rules="[v => !!v || 'Start Time is required']"
                        ></v-text-field>
                    </v-col>
                </v-col>
                <v-col cols="12" md="12" class="input-max pt-0">
                    <v-radio-group  row v-model="addForm.slot_type" :mandatory="false" required :rules="[v => !!v || 'Time slot is required']">
                    <v-radio label="7AM-7PM" value="1" ></v-radio>
                    <v-radio label="8AM-8PM" value="2"></v-radio>
                    <v-radio label="9AM-8PM" value="3"></v-radio>
                    <v-radio label="8AM-9PM" value="4"></v-radio>
                    </v-radio-group>
	            </v-col>
                <v-col cols="12" md="12">
                    <file-pond
                      name="uploadImage"
                      ref="pond"
                      label-idle="Add More Pics"
                      allow-multiple="true"
                      v-bind:files="myFiles"
                      allow-file-type-validation="true"
                      accepted-file-types="image/jpeg, image/png"
                    />
                  </v-col>
                </div>
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
export default {
  components: {
  },
  data() {
      return {
          valid: true,
          menu1: false,
          date: "",
          start_date: "",
          customerName: [{value: "id", name: "first_name" }],
          managerName: [],
          serviceName: [],
 	  customer_id: '',
          addForm: {
              customer_name: "",
              manager_name: "",
              service_name: "",
              job_desc: "",
              farm_add: "",
              start_time: "",
              start_date: "",
          },
          myFiles: [],
      }
  },
  mounted() {
    this.getResults();
   },
  methods: {
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
	 jobService.getFrams({customer_id: this.customer_id, manager_id: val}).then(response => {
		//handle response
		if (response.status) {
		  //this.farm_add = response.data;
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
      console.log(this.addForm);
      if (this.$refs.form.validate()) {
        this.addForm.start_date = this.date;
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
