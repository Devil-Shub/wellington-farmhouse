<template>
      <v-app>
             <v-container>
      <v-row>
   
      <v-subheader>Truck</v-subheader>     
        <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Name</v-list-item-title>
              <v-list-item-subtitle>{{truck}}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item> 

  <router-link :to="'/admin/truck/addservice/' +vehicle_id" class="nav-item nav-link">Add Service</router-link>   
   </v-row>
    </v-container>
    </v-app>
</template>

<script>
 import { truckService } from "../../../_services/truck.service";
import { PlusCircleIcon } from 'vue-feather-icons'
export default {
components: {
      PlusCircleIcon
      },
  data() {
    return {
        avatar: null,
        truck: [],
        vehicle_id: '',
    };
  },
   mounted: function() {
this.vehicle_id = this.$route.params.id;
         truckService.getTruckService(this.$route.params.id).then(response => {
              //handle response
              if(response.status) {
                  this.truck = response.data;
              } else {
                  router.push("/admin/trucks"); 
                  this.$toast.open({
                    message: response.message,
                    type: 'error',
                    position: 'top-right'
                  })
              }
            });
    },
  methods: {
    
    }
};
</script>
