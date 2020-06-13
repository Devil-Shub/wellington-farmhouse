<template>
  <v-app>
    <v-container>
      <v-row>
   <div class="add-icon">
      <router-link to="/admin/jobs/add" class="nav-item nav-link">
        <plus-circle-icon size="1.5x" class="custom-class"></plus-circle-icon>
      </router-link>
    </div>
        <v-tabs class="wdout-modif mt-6 mb-4" v-model="tab" background-color="transparent" color="basil" grow>
          <v-tab v-for="item in items" :key="item">{{ item }}</v-tab>
        </v-tabs>
        <v-tabs-items v-model="tab" class="">
          <v-tab-item v-for="item in items" :key="item">
	   <!-- customer info tabs -->
            <v-card class="" color="basil" flat v-if="item == 'All Jobs'">
             	 <all-jobs />
            </v-card>
            <v-card class="pl-7" color="basil" flat v-if="item == 'Assigned Jobs'">
             	 <assigned-jobs />
            </v-card>
            <v-card class="pl-7" color="basil" flat v-if="item == 'Completed Jobs'">
             	 <completed-jobs />
            </v-card>
            <v-card class="pl-7" color="basil" flat v-if="item == 'Open Jobs'">
             	 <open-jobs />
            </v-card>
            <v-card class="pl-7" color="basil" flat v-if="item == 'Repeating Jobs'">
             	 <repeating-jobs />
            </v-card>
            <v-card class="pl-7" color="basil" flat v-if="item == 'Unpaid Jobs'">
             	 <unpaid-jobs />
            </v-card>
          </v-tab-item>
        </v-tabs-items>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import { PlusCircleIcon } from "vue-feather-icons";
  export default {

    components: {
PlusCircleIcon,
      AllJobs: () => import('./tab/AllJobs'),
      AssignedJobs: () => import('./tab/AssignedJobs'),
      CompletedJobs: () => import('./tab/CompletedJobs'),
      OpenJobs: () => import('./tab/OpenJobs'),
      RepeatingJobs: () => import('./tab/RepeatingJobs'),
      UnpaidJobs: () => import('./tab/UnpaidJobs'),
    },

     data() {
    	return {
	tab: null,
        items: ["All Jobs", "Assigned Jobs", "Completed Jobs", "Open Jobs", "Repeating Jobs", "Unpaid Jobs"],
        }
    }
  }
</script>
