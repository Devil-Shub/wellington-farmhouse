<template>
  <v-app>
    <v-container fluid>
      <v-row>
        <h4 class="main-title">Add Service</h4>

        <v-col cols="12" md="12" class="pl-0">
          <v-form ref="form" v-model="valid" lazy-validation @submit="save">
            <v-col cols="12" md="12">
              <v-text-field
                v-model="addForm.service_name"
                label="Service name"
                required
		            :rules="[v => !!v || 'Service name is required']">
              </v-text-field>
            </v-col>
	          <v-col cols="12" md="12">
             <header>Service Time Period</header>
	       
<input type="checkbox" class="pr-6" v-model="addForm.slot_type" :checked="true" @change="getTime(1)" label="Morning" value="1">Morning
<br>
<input type="checkbox" class="pr-6" v-model="addForm.slot_type" @change="getTime(2)" label="Afternoon" value="2">Evening
                <div class="v-messages theme--light error--text" role="alert" v-if="!timeSlotErr">
		<div class="v-messages__wrapper"><div class="v-messages__message">Service time period is required.</div></div>
		</div>
	         
	          </v-col>

	          <v-col class="time-slots pt-0" cols="12" md="12" v-if="morningSlots.length">
              <template v-for="(timeSlot, index) in morningSlots">
              <span class="checkbox" v-bind:class="[addForm.slot_time.includes(timeSlot.id) ? 'activeClass' : '']">
                <input 
                type="checkbox"
                @click="setTimeSlot(timeSlot.id, index)"
                :value="timeSlot.id"
                :id="timeSlot.id"><label v-bind:for="timeSlot.id">{{timeSlot.slot_start+'-'+timeSlot.slot_end}}</label>
              </span>
              </template>
	          </v-col>

            <v-col class="time-slots pt-0" cols="12" md="12" v-if="eveningSlots.length">
              <template v-for="(timeSlot, index) in eveningSlots">
              <span class="checkbox" v-bind:class="[addForm.slot_time.includes(timeSlot.id) ? 'activeClass' : '']">
                <input 
                type="checkbox"
                @click="setTimeSlot(timeSlot.id, index)"
                :value="timeSlot.id"
                :id="timeSlot.id"><label v-bind:for="timeSlot.id">{{timeSlot.slot_start+'-'+timeSlot.slot_end}}</label>
              </span>
              </template>
	          </v-col>

            <v-col cols="12" md="12">
              <v-text-field
                type="number"
                max="100"
                min="0"
                v-model="addForm.price"
                :rules="priceRules"
                label="Service Price"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="12" class="textarea-parent">
              <v-textarea rows="3"
                auto-grow
                clearable
                clear-icon="cancel"
                v-model="addForm.description"
                :rules="descriptionRules"
                label="Description"
                required
              ></v-textarea>
            </v-col>
            <v-col cols="12" md="12">
              <file-pond
                name="uploadImage"
                ref="pond"
                label-idle="Drop files here..."
                v-bind:allow-multiple="false"
                v-bind:server="serverOptions"
                v-bind:files="myFiles"
                v-on:processfile="handleProcessFile"
                v-on:processfilerevert="handleRemoveFile"
                allow-file-type-validation="true"
                accepted-file-types="image/jpeg, image/png"/>
                <div class="v-messages theme--light error--text" role="alert" v-if="docError">
                    <div class="v-messages__wrapper">
                      <div class="v-messages__message">Document upload is required</div>
                    </div>
                  </div>
            </v-col>

		<v-col cols="12" md="12">
             <header>Service Rate</header>
	   <v-radio-group  row v-model="addForm.service_rate"  :mandatory="false" required :rules="[v => !!v || 'Service rate is required']">
	      <v-radio label="Per Load" value="1" ></v-radio>
	      <v-radio label="Round" value="2"></v-radio>
	    </v-radio-group>
	</v-col>
            <v-btn type="submit" :loading="loading" :disabled="loading" color="success" class="mr-4 custom-save-btn ml-4 mt-4" @click="save">Add Service</v-btn>
          </v-form>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import { required } from "vuelidate/lib/validators";
import { serviceService } from "../../../_services/service.service";
import { router } from "../../../_helpers/router";
import { environment } from "../../../config/test.env";
import { authenticationService } from "../../../_services/authentication.service";

export default {
  components: {
    //      'image-component': imageVUE,
  },
  data() {
    return {
      loading: false,
      valid: true,
      avatar: null,
      docError: false,
      apiUrl: environment.apiUrl,
      timeSlotErr:true,
      addForm: {
        service_name: "",
        price: "",
        description: "",
        service_image: "",
        service_rate: '1',
	slot_type: ["1"],
        slot_time:[],
      },
      checkedSlot: {
        slot_type: ""
      },
      morningSlots: [],
      eveningSlots: [],
      priceRules: [
        v => !!v || "Service price is invalid/required"
      ],
      descriptionRules: [v => !!v || "Service description is required"],
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
  mounted: function() {
    this.getTime(1);
  },
  methods: {
    getTime(choosenCheckbox){
      this.checkedSlot.slot_type = choosenCheckbox;
     serviceService.getTimeSlots(this.checkedSlot).then(response => {
          //handle response
          if (response.status) {
            if(choosenCheckbox == 1) {
              if(this.morningSlots.length > 0) {
                for(var i=0; i<this.morningSlots.length; i++) {
                  if(this.addForm.slot_time.includes(this.morningSlots[i].id)) {
                    this.addForm.slot_time.splice(this.addForm.slot_time.indexOf(this.morningSlots[i].id), 1);
                  }
                }
                this.morningSlots = [];
              } else {
                this.morningSlots = [];
                this.morningSlots = response.data;
              }
              
            } else {
              if(this.eveningSlots.length > 0) {
                for(var i=0; i<this.eveningSlots.length; i++) {
                  if(this.addForm.slot_time.includes(this.eveningSlots[i].id)) {
                    this.addForm.slot_time.splice(this.addForm.slot_time.indexOf(this.eveningSlots[i].id), 1);
                  }
                }
                this.eveningSlots = [];
              } else {
                this.eveningSlots = [];
                this.eveningSlots = response.data;
              }
            }
             
          } else {
           this.timeSlotErr = false;
            this.$toast.open({
              message: response.message,
              type: "error",
              position: "top-right"
            });
          }
        });
    },
    //set time slow
    setTimeSlot(timeSlotId, index){
      var findIndex = this.addForm.slot_time.indexOf(timeSlotId);
      if(findIndex > -1) {
        this.addForm.slot_time.splice(findIndex, 1);
      } else {
        this.addForm.slot_time.push(timeSlotId);
      }
    },
    handleProcessFile: function(error, file) {
      this.addForm.service_image = file.serverId;
      this.docError = false;
    },
    handleRemoveFile: function(file){
      this.addForm.service_image = '';
      this.docError = true;
    },
    save: function(e) {
      //stop page to reload
      e.preventDefault();

      //time slots validation
      if(this.addForm.slot_time.length > 0) {
        //morning check
        if(this.morningSlots.length > 0) {
          var checkMorning=0;
          for(var i=0; i<this.morningSlots.length; i++) {
            if(this.addForm.slot_time.includes(this.morningSlots[i].id)) {
              checkMorning++
            }
          }
          //check if any morning selected
          if(checkMorning == 0) {
            this.$toast.open({
              message: "Please select atleast one morning time slot",
              type: "error",
              position: "top-right"
            });
            return false;
          }
        }

        //check for time slots
        if(this.eveningSlots.length > 0) {
          var checkEvening=0;
          for(var i=0; i<this.eveningSlots.length; i++) {
            if(this.addForm.slot_time.includes(this.eveningSlots[i].id)) {
              checkEvening++
            }
          }
          //check if any morning selected
          if(checkEvening == 0) {
            this.$toast.open({
              message: "Please select atleast one evening time slot",
              type: "error",
              position: "top-right"
            });
            return false;
          }
        }

      } else {
        this.$toast.open({
            message: "Please select atleast one time slot",
            type: "error",
            position: "top-right"
        });
        return false;
      }
      //time slots validation

      if(this.addForm.service_image == "") {
        this.docError = true;
      }

      if (this.$refs.form.validate() && (this.timeSlotErr && !this.docError)) {
        if(this.loading) {
          return false;
        }
        //start loading
        this.loading = true;

        serviceService.add(this.addForm).then(response => {
          //stop loading
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
            router.push("/admin/services");
	    }else{
            router.push("/manager/services");
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
