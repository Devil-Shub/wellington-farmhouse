<template>
  <v-app>
    <v-container fluid>
      <v-row>
        <v-col cols="12" md="12">
          <h4 class="main-title">Edit Service</h4>
        </v-col>
        <v-col cols="12" md="12">
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-col cols="12" md="12">
              <v-text-field
                v-model="editForm.service_name"
                :rules="nameRules"
                label="Service Name"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="12">
              <header>Service Time Period</header>
<input type="checkbox" class="pr-6" v-model="editForm.slot_type" :checked="editForm.slot_type.includes(1) ? true:false" @change="getTime(1)" value="1">Morning
<br>
<input type="checkbox" class="pr-6" v-model="editForm.slot_type" :checked="editForm.slot_type.includes(2) ? true:false" @change="getTime(2)" value="2">Evening
     <div class="v-messages theme--light error--text" role="alert" v-if="!timeSlotErr">
		<div class="v-messages__wrapper"><div class="v-messages__message">Service time period is required.</div></div>
		</div>
            </v-col>

            <v-col class="time-slots pt-0" cols="12" md="12" v-if="morningSlots.length">
              <template v-for="timeSlot in morningSlots">
              <span class="checkbox" v-bind:class="[editForm.slot_time.includes(timeSlot.id) ? 'activeClass' : '']">
                <input 
                type="checkbox"
                @click="setTimeSlot(timeSlot.id)"
                :value="timeSlot.id"
                :id="timeSlot.id"
                 required
                :checked="editForm.slot_time.includes(timeSlot.id) ? true:false">
                <label v-bind:for="timeSlot.id">{{timeSlot.slot_start+'-'+timeSlot.slot_end}}</label>
              </span>
               <!-- <v-checkbox v-model="editForm.slot_time" :value="timeSlot.id" class="mx-2" :label="timeSlot.slot_start+'-'+timeSlot.slot_end"></v-checkbox> -->
              </template>
            </v-col>

            <v-col class="time-slots pt-0" cols="12" md="12" v-if="eveningSlots.length">
              <template v-for="timeSlot in eveningSlots">
              <span class="checkbox" v-bind:class="[editForm.slot_time.includes(timeSlot.id) ? 'activeClass' : '']">
                <input 
                type="checkbox"
                @click="setTimeSlot(timeSlot.id)"
                :value="timeSlot.id"
                :id="timeSlot.id"
                 required
                :checked="editForm.slot_time.includes(timeSlot.id) ? true:false">
                <label v-bind:for="timeSlot.id">{{timeSlot.slot_start+'-'+timeSlot.slot_end}}</label>
              </span>
               <!-- <v-checkbox v-model="editForm.slot_time" :value="timeSlot.id" class="mx-2" :label="timeSlot.slot_start+'-'+timeSlot.slot_end"></v-checkbox> -->
              </template>
            </v-col>
      
    
            <v-col cols="12" md="12">
              <v-text-field
                type="number"
                max="100"
                min="0"
                v-model="editForm.price"
                :rules="priceRules"
                label="Service Price"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="12">
              <v-textarea rows="1"
                auto-grow
                clearable
                clear-icon="cancel"
                v-model="editForm.description"
                :rules="descRules"
                label="Description"
                required
              ></v-textarea>
            </v-col>
            <v-col cols="12" md="12" class="mb-4">
              <file-pond
                name="uploadImage"
                ref="pond"
                label-idle="Drop files here..."
                 v-bind:allow-multiple="false"
                v-bind:server="serverOptions"
                v-bind:files="myFiles"
                v-on:processfile="handleProcessFile"
                allow-file-type-validation="true"
                accepted-file-types="image/jpeg, image/png"
              />
	  <div
                class="" v-if="editForm.service_image"
                style="height: 100px; min-width: 100px; width: 100px;"
              >
              <button type="submit" class="close AClass" style="margin-right: 13px; margin-top: -25px; font-size: 30px;" v-if="cross" @click="Remove()">
               <span>&times;</span>
             </button>
                <img width="100%" :src="baseUrl+editForm.service_image" alt="John" />
              </div>
            </v-col>

	<v-col cols="12" md="12">
             <header>Service Rate</header>
	   <v-radio-group  row v-model="editForm.service_rate"  :mandatory="false" required :rules="[v => !!v || 'Service rate is required']">
	      <v-radio label="per Load" value="perload" ></v-radio>
	      <v-radio label="Round" value="round"></v-radio>
	    </v-radio-group>
	</v-col>
            <v-btn color="success" class="mr-4 custom-save-btn ml-4 mt-4" @click="update">Update</v-btn>
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
      valid: true,
      avatar: null,
      apiUrl: environment.apiUrl,
      baseUrl: environment.baseUrl,
      timeSlotErr:true,
      cross: false,
      editForm: {
        id: "",
        service_name: "",
        price: "",
        description: "",
        service_image: "",
	service_rate: "",
        slot_type: [1,2],
        slot_time: []
      },
      checkedSlot: {
        slot_type: ""
      },
      morningSlots: [],
      eveningSlots: [],
      nameRules: [v => !!v || "Service name is required"],
      priceRules: [v => !!v || "Service price is invalid/required"],
      descRules: [v => !!v || "Service description is required"],
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
    serviceService.getService(this.$route.params.id).then(response => {
      //handle response
      if (response.status) {
        this.editForm.id = response.data.id;
        this.editForm.service_name = response.data.service_name;
        this.editForm.price = response.data.price;
        this.editForm.description = response.data.description;
        this.editForm.service_image = response.data.service_image;
        this.editForm.slot_time = JSON.parse(response.data.slot_time);
        this.editForm.slot_type = JSON.parse(response.data.slot_type);
	if(response.data.service_image){ this.cross = true;}
       if (response.data.service_rate == 1) {
          this.editForm.service_rate = "perload";
        } else {
          this.editForm.service_rate = "round";
        }

        if(this.editForm.slot_type.includes("1")) {
          this.getTime(1);
        }
        if(this.editForm.slot_type.includes("2")) {
          this.getTime(2);
        }

      } else {
        router.push("/admin/services");
        this.$toast.open({
          message: response.message,
          type: "error",
          position: "top-right"
        });
      }
    });
  },
  methods: {
  Remove(){
    this.cross=false;
    this.editForm.service_image = '';
  },
    getTime(choosenCheckbox) {
    this.checkedSlot.slot_type = choosenCheckbox;

      serviceService.getTimeSlots(this.checkedSlot).then(response => {
        //handle response
        if (response.status) {
            if(choosenCheckbox == 1) {
              if(this.morningSlots.length > 0) {
                for(var i=0; i<this.morningSlots.length; i++) {
                  if(this.editForm.slot_time.includes(this.morningSlots[i].id)) {
                    this.editForm.slot_time.splice(this.editForm.slot_time.indexOf(this.morningSlots[i].id), 1);
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
                  if(this.editForm.slot_time.includes(this.eveningSlots[i].id)) {
                    this.editForm.slot_time.splice(this.editForm.slot_time.indexOf(this.eveningSlots[i].id), 1);
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
    setTimeSlot(timeSlotId){
      var findIndex = this.editForm.slot_time.indexOf(timeSlotId);
      if(findIndex > -1) {
        this.editForm.slot_time.splice(findIndex, 1);
      } else {
        this.editForm.slot_time.push(timeSlotId);
      }
    },
    handleProcessFile: function(error, file) {
      this.editForm.service_image = file.serverId;
    },
    update() {
      if (this.editForm.service_rate == "perload") {
        this.editForm.service_rate = 1;
      } else {
        this.editForm.service_rate = 2;
      }
	
      //time slots validation
      if(this.editForm.slot_time.length > 0) {
        //morning check
        if(this.morningSlots.length > 0) {
          var checkMorning=0;
          for(var i=0; i<this.morningSlots.length; i++) {
            if(this.editForm.slot_time.includes(this.morningSlots[i].id)) {
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
            if(this.editForm.slot_time.includes(this.eveningSlots[i].id)) {
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

      if (this.$refs.form.validate() && (this.timeSlotErr)) {
        serviceService.edit(this.editForm).then(response => {
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
<style>
.AClass{
    right:0px;
    position: absolute;
}

</style>
