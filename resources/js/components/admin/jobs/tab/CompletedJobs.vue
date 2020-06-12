<template>
  <v-container
    id="dashboard"
    fluid
    tag="section"
    class="pt-0"
  >
    <v-row>
      <!-- all jobs -->
              <v-simple-table>
                <template v-slot:default>
                  <thead>
                    <tr>
                      <th class="text-left">Image</th>
                      <th class="text-left">Job Summary</th>
                      <th class="text-left">Sort By</th>
                      <th class="text-left">Techs</th>
                      <th class="text-left">Time</th>
                      <th class="text-left">Distance</th>
                      <th class="text-left">Payment</th>
                      <th class="text-left">Chat</th>
                      <th class="text-left">Status</th>
                    </tr>
                  </thead>
                  <tbody>
		   <template v-if="alljobs">
                    <tr v-for="all in alljobs">
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                   </template>
                  </tbody>
                </template>
              </v-simple-table>
    </v-row>
  </v-container>
</template>

<script>
import { router } from "../../../_helpers/router";
import { jobService } from "../../../_services/job.service";
import { environment } from "../../../config/test.env";
import { PlusCircleIcon } from "vue-feather-icons";
export default {
  components: {
    PlusCircleIcon
  },
  data() {
    return {
      tab: null,
      items: ["All Jobs", "Assigned Jobs", "Completed Jobs", "Open Jobs", "Repeating Jobs", "Unpaid Jobs"],
      alljobs:"",
    };
  },
  created() {
  
  },
   mounted() {
    this.getResults();
   },
    methods: {
           getResults() {
      jobService.joblist().then(response => {
        //handle response
        if (response.status) {
          this.alljobs = response.data;
	console.log(this.alljobs)
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
};
</script>
