<template>
  <v-container
    id="dashboard"
    fluid
    tag="section"
    class="pt-0"
  >
    <v-row>
      <!-- all jobs -->
   <v-text-field
            v-model="search"
            append-icon="search"
            label="Search"
            single-line
            hide-details
            class="search-field"
          ></v-text-field>
             <v-data-table
                      :headers="headers"
                      :items="alljobs"
                      hide-default-footer
		     :search="search"
                      class="elevation-1"
                    >
                      <!-- <template slot="items" slot-scope="props">
                        <td class="text-xs-right">{{ props.index }}</td>
                        <td class="text-xs-right">
		         <template v-slot:item.id="{ item }">
		            <span class="custom-action-btn"> 
				<router-link :to="'/admin/customer/farms/' +item.id">{{ props.item.first_name }}</router-link>
			    </span>
		          </template>
                        </td>
                        <td class="text-xs-right">{{ props.item.phone }}</td>
                        <td class="text-xs-right">{{ props.item.email }}</td>
                        <td class="text-xs-right">{{ props.item. }}</td>
                        <td class="text-xs-right">{{ props.item. }}</td>
                        <td class="text-xs-right">{{ props.item. }}</td>
                        <td class="text-xs-right">{{ props.item. }}</td>
                        <td class="text-xs-right">0</td>
                        <td class="text-xs-right">05/07/2020</td>
                      </template> -->
                    </v-data-table>
    </v-row>
  </v-container>
</template>

<script>
import { router } from "../../../../_helpers/router";
import { jobService } from "../../../../_services/job.service";
import { environment } from "../../../../config/test.env";
import { PlusCircleIcon } from "vue-feather-icons";
export default {
  components: {
    PlusCircleIcon
  },
  data() {
    return {
      tab: null,
      search:"",
            headers: [
        {
          text: "Sno",
          align: "left",
          sortable: false,
          value: "index"
        },
        { text: "Job Summary", value: "" },
        { text: "Sort by", value: "" },
        { text: "Tech", value: "" },
        { text: "Time",  value: "" },
        { text: "Distance", value: "" },
        { text: "Payment", value: "" },
        { text: "Chat", value: "" },
        { text: "Status", value: "" }
      ],
      items: [],
      customers: [],
      alljobs:[],
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
