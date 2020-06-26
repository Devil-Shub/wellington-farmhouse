<template>
  <v-app>
    <v-container fluid>
      <v-row>
     <v-col class="d-flex" cols="12" sm="6">
        <v-select
          :items="dropdown"
          label="Status Filter"
          dense
          v-model="selected"
          @change="onChange($event)"
        ></v-select>
      </v-col>
   <div class="add-icon">
      <router-link v-if="isAdmin" to="/admin/jobs/add" class="nav-item nav-link">
        <plus-circle-icon size="1.5x" class="custom-class"></plus-circle-icon>
      </router-link>
      <router-link v-if="!isAdmin" to="/manager/jobs/add" class="nav-item nav-link">
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
             	   	    <table id="example" class="table table-striped table-bordered table-lg all_jobs" style="width:100%">
        <thead>
            <tr>
                <th>Sno</th>
                <th class="job-summ">Job Summary</th>
                <th>Sort By</th>
                <th>Techs</th>
                <th>Time</th>
		 <th>Distance</th>
		<th>Payment</th>
                <th>Chat</th>
	        <th>Status</th>
		    </tr>
		</thead>
		<tbody>
	     <tr v-for="(job, index) in alljobs">
		<td>{{index+1}}</td>
			<td>{{job.start_date}}<br> {{job.id}} <br>${{job.job_amount}} <br>{{job.service.service_name}}</td>
			<td>{{job.customer.first_name}}<br> {{job.manager.first_name}} <br> {{job.manager.phone}} <br>{{job.manager.email}}
		<br>{{job.manager.address}} {{job.manager.city}} {{job.manager.state}} {{job.manager.country}} {{job.manager.zip_code}}
		</td>
		<td>
		Truck Driver Name<br><template v-if="job.truck_driver">{{job.truck_driver.first_name}}</template><template v-if="!job.truck_driver">Not Assigned Yet</template>
		Truck Number<br><template v-if="job.truck">{{job.truck.truck_number}}</template><template v-if="!job.truck">Not Assigned Yet</template>

		skidsteer Driver Name<br><template v-if="job.skidsteer_driver">{{job.skidsteer_driver.first_name}}</template><template v-if="!job.skidsteer_driver">Not Assigned Yet</template>
		skidsteer Number</br><template v-if="job.skidsteer">{{job.skidsteer.truck_number}}</template><template v-if="!job.skidsteer">Not Assigned Yet</template>
		</td>
		<td>
		Start Time<br><template>9:30 pm</template>
		End Time<br><template>12:30 Pm</template>
		Time Taken<br><template>3</template>
		</td>
		<td>3000 dummy</td>
		<td><template v-if="job.payment_status">Paid</template> <template v-if="!job.payment_status">Unpaid</template></td>
		<td> <router-link v-if="isAdmin" :to="'/admin/jobs/chat/' + job.id" class="nav-item nav-link">View chat</router-link>
		<router-link v-if="!isAdmin" :to="'/manager/jobs/chat/' + job.id" class="nav-item nav-link">View chat</router-link>
		</td>
		<td><template v-if="!job.job_status">Open</template> <template v-if="job.job_status">Close</template></td>
			       
				</tr>

		</tbody>
		    </table>
            </v-card>
            <v-card class="pl-7" color="basil" flat v-if="item == 'Repeating Jobs'">
             	 <repeating-jobs />
            </v-card>
      
          </v-tab-item>
        </v-tabs-items>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import { PlusCircleIcon } from "vue-feather-icons";
import { jobService } from "../../../_services/job.service";
import { environment } from "../../../config/test.env";
import { authenticationService } from "../../../_services/authentication.service";
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
        isAdmin: true,
        items: ["All Jobs", "Repeating Jobs"],
        dropdown: ['All Jobs', 'Assigned Jobs', 'Completed Jobs', 'Paid', 'Unpaid', 'Open'],
        alljobs:'',
        selected: 'All Jobs'
        }
    },
     mounted() {
	    const currentUser = authenticationService.currentUserValue;
	    if(currentUser.data.user.role_id == 1){
	    this.isAdmin = true;
	    }else{
	    this.isAdmin = false;
	    }
          this.getResults(this.selected);
   },
    methods: {
     getResults(data) {
       this.alljobs = [];
      jobService.joblist({status: data}).then(response => {
        //handle response
        if (response.status) {
          this.alljobs = response.data;
        } else {
          this.$toast.open({
            message: response.message,
            type: "error",
            position: "top-right"
          });
        }
      });
    },
    onChange(event){
         this.getResults(event);
         console.log(event)
    },
},
updated() {
setTimeout(function() {
     $(document).ready(function() {
	    $('#example').DataTable();
	} );
  }, 1000);
    }
  }
</script>
