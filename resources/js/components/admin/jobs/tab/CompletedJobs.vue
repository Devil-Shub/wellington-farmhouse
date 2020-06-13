<template>
  <v-container
    id="dashboard"
    fluid
    tag="section"
    class="pt-0"
  >
    <v-row>
      <!-- completed jobs -->
      <v-data-table
        :headers="headers"
        :items="jobsDetails"
        class="wd-100"
      >
        <template v-slot:items="props">
          <td>{{ props.item.image }}</td>
          <td class="text-xs-right">{{ props.item.summary }}</td>
          <td class="text-xs-right">{{ props.item.sort }}</td>
          <td class="text-xs-right">{{ props.item.techs }}</td>
          <td class="text-xs-right">{{ props.item.time }}</td>
          <td class="text-xs-right">{{ props.item.distance }}</td>
          <td class="text-xs-right">{{ props.item.payment }}</td>
          <td class="text-xs-right">{{ props.item.chat }}</td>
        </template>
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
      items: ["All Jobs", "Assigned Jobs", "Completed Jobs", "Open Jobs", "Repeating Jobs", "Unpaid Jobs"],
      completedjobs:"",
      headers: [
        {
          text: 'Image',
          align: 'left',
          sortable: false,
          value: 'image'
        },
        { text: 'Job Summary', value: 'summary'},
        { text: 'Sort By', value: 'sort' },
        { text: 'Techs', value: 'techs' },
        { text: 'Time', value: 'time' },
        { text: 'Distance', value: 'distance' },
        { text: 'Payment', value: 'payment' },
        { text: 'Chat', value: 'chat' },
      ],
      jobsDetails: [
        {
          image: '',
          summary: 999,
          sort: '',
          time: 9,
          distance: 30,
          payment: 999,
          chat: '',
        }
      ]
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
