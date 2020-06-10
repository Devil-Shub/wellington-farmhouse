<template>
      <v-app>
             <v-container>
      <v-row>
   
<v-tabs
      v-model="tab"
      background-color="transparent"
      color="basil"
      grow
    >
     
  <v-tab
        v-for="item in items"
        :key="item"
      >
        {{ item }}
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">

 <v-tab-item
        v-for="item in items"
        :key="item"
      >

        <v-card
          color="basil"
          flat
	v-if="item == 'Service'"
        >
          <v-card-text>
	<v-data-table
	:headers="headers"
	:items="truck"
	:sort-desc="[false, true]"
	multi-sort
	class="elevation-1"
	>

     <template v-slot:items="props">
      <td class="text-xs-right">{{ new Date(props.item.expiry_date).toISOString().substr(0, 10)  }}</td>
      <td class="text-xs-right">{{ props.item.service_killometer }}</td>
     <td class="text-xs-right">Delete</td>
    </template>

</v-data-table>
   </v-card-text>
  <router-link :to="'/admin/truck/addservice/' +vehicle_id" class="nav-item nav-link">Add Service</router-link> 
        </v-card>
              <v-card
          color="basil"
          flat
	v-if="item == 'Insurance'"
        >
          <v-card-text>

<v-data-table
	:headers="headers1"
	:items="insurance"
	:sort-desc="[false, true]"
	multi-sort
	class="elevation-1"
	>

 <template v-slot:items="props">
      <td>{{ props.item.name }}</td>
      <td class="text-xs-right">{{ props.item.insurance_number }}</td>
      <td class="text-xs-right">{{ props.item.insurance_date }}</td>
<td class="text-xs-right">{{ props.item.insurance_expiry }}</td>
    </template>

</v-data-table>
</v-card-text>
  <router-link :to="'/admin/truck/addinsurance/' +vehicle_id" class="nav-item nav-link">Add Insurance</router-link> 
        </v-card>
      </v-tab-item>



    </v-tabs-items>
   
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
	tab: null,
	items: [
          'Service', 'Insurance',
        ],
        headers: [
          { text: 'Servicekm', value: 'service_killometer' },
          {
            text: 'Date',
            align: 'start',
            sortable: false,
            value: 'service_date',
          },
         { text: 'Action', value: 'delete' },
        ],
        headers1: [
          {
            text: 'Insurance Name',
            align: 'start',
            sortable: false,
            value: 'insurance_number',
          },
          { text: 'Insurance Date', value: 'insurance_date' },
           { text: 'Insurance Expiry Date', value: 'insurance_expiry' },
        ],
        avatar: null,
        truck: [],
        insurance: [],
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
         
        truckService.getTruckInsurance(this.$route.params.id).then(response => {
              //handle response
              if(response.status) {
                  this.insurance = response.data;
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
