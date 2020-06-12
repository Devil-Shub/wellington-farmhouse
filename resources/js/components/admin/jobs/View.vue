<template>
  <v-app>
    <v-container>
      <v-row>
   <div class="add-icon">
      <router-link to="/admin/jobs/add" class="nav-item nav-link">
        <plus-circle-icon size="1.5x" class="custom-class"></plus-circle-icon>
      </router-link>
    </div>
        <v-tabs class="wdout-modif" v-model="tab" background-color="transparent" color="basil" grow>
          <v-tab v-for="item in items" :key="item">{{ item }}</v-tab>
        </v-tabs>
        <v-tabs-items v-model="tab" class="">
          <v-tab-item v-for="item in items" :key="item">
	   <!-- customer info tabs -->
            <v-card class="" color="basil" flat v-if="item == 'All Jobs'">
             	 <all-jobs />
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
    },

     data() {
    	return {
	tab: null,
        items: ["All Jobs", "Assigned Jobs", "Completed Jobs", "Open Jobs", "Repeating Jobs", "Unpaid Jobs"],
        }
    }
  }
</script>
