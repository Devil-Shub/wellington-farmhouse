<template>
  <v-app>
    <v-container fluid>
      <v-row>
        <h4 class="main-title">Services List</h4>
        <div class="add-icon">
          <router-link v-if="isAdmin" to="/admin/service/add" class="nav-item nav-link">
            <plus-circle-icon size="1.5x" class="custom-class"></plus-circle-icon>
          </router-link>
          <router-link v-if="!isAdmin" to="/manager/service/add" class="nav-item nav-link">
            <plus-circle-icon size="1.5x" class="custom-class"></plus-circle-icon>
          </router-link>
        </div>
        <v-col cols="12" md="12">
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">Sno</th>
                  <th class="text-left">Service Name</th>
                  <th class="text-left">Service Rate</th>
                  <th class="text-left">Price</th>
                  <th class="text-left">type</th>
                  <th class="text-left">time</th>
                  <th class="text-left">Descriptions</th>
                  <th class="text-left">Options</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in services" :key="item.name" v-on:click="selectTr(index)" v-bind:class="{ 'selected' : isActive == index}">
                  <td>
                 {{index+1}}
                  </td>
                  <td>{{ item.service_name }}</td>
                  <td v-if="item.service_rate == 1">Per Load</td>
                  <td v-if="item.service_rate == 2">Round</td>
                  <td>${{ item.price }}</td>
		  <td>
		    <span v-for="(type, index) in item.slot_type">
	               <label v-if="type == 1">Morning</label>
		       <label v-if="type == 2">Afternoon</label>
		   </span>
                  </td>
                  <td>
                    <span v-for="(tSlot, index) in item.timeSlots">
                      <label>{{tSlot.slot_start+'-'+tSlot.slot_end}}</label>
                      <label v-if="item.timeSlots.length-1 != index">, &nbsp;</label>
                    </span>
                  </td>
                  <td>{{ item.description }}</td>
                  <td class="action-col">
                    <!-- <router-link v-if="isAdmin" :to="'/admin/service/edit/' + item.id" class="nav-item nav-link">
                      <span class="custom-action-btn">Edit</span>
                    </router-link>
                    <router-link v-if="!isAdmin" :to="'/manager/service/edit/' + item.id" class="nav-item nav-link">
                      <span class="custom-action-btn">Edit</span>
                    </router-link>
                    <v-btn color="blue darken-1" text @click="Delete(item.id)">
                      <span class="custom-action-btn">Delete</span>
                    </v-btn> -->

                    <div class="dropdown" v-bind:class="{ 'show': triggerDropdown }">
                      <more-vertical-icon size="1.5x" class="custom-class dropdown-trigger" v-on:click="dropdownToggle"></more-vertical-icon>
                      <span class="dropdown-menu">
                        <router-link v-if="isAdmin" :to="'/admin/service/edit/' + item.id" class="dropdown-item">
                          <button class="btn">Edit</button>
                        </router-link>
                        <router-link v-if="!isAdmin" :to="'/manager/service/edit/' + item.id" class="dropdown-item">
                          <button class="btn">Edit</button>
                        </router-link>
                        <button class="btn dropdown-item" @click="Delete(item.id)">Delete</button>
                      </span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import { required } from "vuelidate/lib/validators";
import { serviceService } from "../../../_services/service.service";
import { authenticationService } from "../../../_services/authentication.service";
import { environment } from "../../../config/test.env";
import {
  UserIcon,
  EditIcon,
  TrashIcon,
  PlusCircleIcon,
  MoreVerticalIcon,
} from "vue-feather-icons";
import { router } from "../../../_helpers/router";
export default {
  components: {
    UserIcon,
    EditIcon,
    TrashIcon,
    PlusCircleIcon,
    MoreVerticalIcon,
  },
  data() {
    return {
      dialog: false,
      triggerDropdown: false,
      isActive: null,
      on: false,
      baseUrl: environment.baseUrl,
      services: [],
      isAdmin: true,
    };
  },
  mounted() {
    const currentUser = authenticationService.currentUserValue;
    if(currentUser.data.user.role_id == 1){
    this.isAdmin = true;
    }else{
    this.isAdmin = false;
    }
    this.getResults();
  },

  methods: {
    getResults() {
      serviceService.listService().then(response => {
        //handle response
        if (response.status) {
          this.services = response.data;
        } else {
          this.$toast.open({
            message: response.message,
            type: "error",
            position: "top-right"
          });
        }
      });
    },
    Delete(e) {
      if (e) {
        serviceService.Delete(e).then(response => {
          //handle response
          if (response.status) {
            this.getResults();
            this.$toast.open({
              message: response.message,
              type: "success",
              position: "top-right"
            });
            //redirect to login
            this.dialog = false;
            //               router.push("/admin/service");
          } else {
            this.dialog = false;
            this.$toast.open({
              message: response.message,
              type: "error",
              position: "top-right"
            });
          }
        });
      }
    },
    Close() {
      this.dialog = false;
    },
    dropdownToggle: function() {
      this.triggerDropdown = !this.triggerDropdown;
    },
    selectTr: function(rowIndex){
      this.isActive = rowIndex;
    }
  }
};
</script>
