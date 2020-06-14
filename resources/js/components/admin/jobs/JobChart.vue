<template>
  <v-app>
    <v-container>
      <v-row>
     	 <v-col sm="12" cols="12">
		Job_id: {{job.id}} <br>   Service Request: {{service.service_name}}<br>   Service Date: {{job.start_date}} <br>Price: ${{job.job_amount}}
<br>Manager Name: {{manager.first_name}} <br>Email Address: {{manager.email}} <br>Phone Number {{manager.phone}}<br> Farm Address: {{farm.farm_address}} {{farm.farm_unit}} {{farm.farm_city}} {{farm.farm_province}} {{farm.farm_zipcode}}
         </v-col>
      </v-row>
    </v-container>
  </v-app>
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
      job:'',
      service:'',
      manager:'',
      farm: '',
    };
  },
  created() {
  
  },
   mounted() {
    this.getResults();
   },
    methods: {
     getResults() {
      jobService.singleJob(this.$route.params.id).then(response => {
        //handle response
        if (response.status) {
          this.job = response.data;
	this.service = response.data.service;
	this.manager = response.data.manager;
	this.farm = response.data.farm;
        } else {
          this.$toast.open({
            message: response.message,
            type: "error",
            position: "top-right"
          });
        }
      });
    }
},
updated() {
setTimeout(function() {
     $(document).ready(function() {
	    $('#example').DataTable();
	} );
  }, 1000);
    }
};
</script>
