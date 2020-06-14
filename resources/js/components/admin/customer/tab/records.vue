<template>
  <v-app>
    <v-container>
      <v-row>
        <h4 class="main-title">Customer Records</h4>
        <v-col sm="12" cols="12" class="cust-record-content">
          <v-col sm="2" class="p-0">
            <div class="single-record">
              <span class="record-timeline">Last 12 Months</span>
              <span class="record-price">${{records.monthamount}}</span>
            </div>
          </v-col>
          <v-col sm="2" class="p-0">
            <div class="single-record">
              <span class="record-timeline">Life Time</span>
              <span class="record-price">${{records.allamount}}</span>
            </div>
          </v-col>
          <v-col sm="2" class="p-0">
            <div class="single-record">
              <span class="record-timeline">Total Farms</span>
              <span class="record-price">{{records.farmrecord}}</span>
            </div>
          </v-col>
          <v-col sm="2" class="p-0">
            <div class="single-record">
              <span class="record-timeline">Total Jobs</span>
              <span class="record-price">{{records.totaljobs}}</span>
            </div>
          </v-col>
          <v-col sm="2" class="p-0">
            <div class="single-record">
              <span class="record-timeline">Member Since</span>
              <span class="record-price">{{records.memebersince | formatDate}}</span>
            </div>
          </v-col>
        </v-col>

        <v-col sm="12" cols="12">
          <input
            type="text"
            id="myInput"
            v-on:keyup="myFunction()"
            placeholder="Search for names.."
            title="Type in a name"
          />
          <table id="myTable">
            <thead>
              <tr>
                <th class="text-left">Job_id</th>
                <th class="text-left">Farm Location</th>
                <th class="text-left">Start Date</th>
                <th class="text-left">Start Time</th>
                <th class="text-left">Techs</th>
                <th class="text-left">Price</th>
                <th class="text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="record in displayedPosts">
                <td>{{record.id}}</td>
                <td>{{record.farm.farm_address}} {{record.farm.farm_unit}} {{record.farm.farm_city}} {{record.farm.farm_province}} {{record.farm.farm_zipcode}}</td>
                <td>{{record.created_at | formatDate}}</td>
                <td>{{record.time_slots_id}}</td>
                <td>
                  <template v-if="record.truck_driver_id">Truck driver name</template>
                  <template v-if="!record.truck_driver_id">Not Assigned Yet</template>
                  <template v-if="record.skidsteer_driver_id">Skidsteer driver name</template>
                  <template v-if="!record.skidsteer_driver_id">Not Assigned Yet</template>
                </td>
                <td>${{record.job_amount}}</td>
                <td v-if="!record.repeating_job">Scheduled</td>
                <td v-if="record.repeating_job">Rescheduled</td>
              </tr>
            </tbody>
          </table>
          <nav aria-label="Page navigation example">
            <ul class="pagination">
              <li class="page-item">
                <button type="button" class="page-link" v-if="page != 1" @click="page--">Previous</button>
              </li>
              <li class="page-item">
                <button
                  type="button"
                  class="page-link"
                  v-for="pageNumber in pages.slice(page-1, page+5)"
                  @click="page = pageNumber"
                >{{pageNumber}}</button>
              </li>
              <li class="page-item">
                <button
                  type="button"
                  @click="page++"
                  v-if="page < pages.length"
                  class="page-link"
                >Next</button>
              </li>
            </ul>
          </nav>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import { required } from "vuelidate/lib/validators";
import { PlusCircleIcon } from "vue-feather-icons";
import { customerService } from "../../../../_services/customer.service";
import { router } from "../../../../_helpers/router";
export default {
  components: {
    PlusCircleIcon
  },
  data() {
    return {
      records: "",
      jobs: "",
      page: 1,
      perPage: 9,
      pages: []
    };
  },
  computed: {
    displayedPosts() {
      return this.paginate(this.jobs);
    }
  },
  watch: {
    jobs() {
      this.setPages();
    }
  },
  filters: {
    trimWords(value) {
      return (
        value
          .split(" ")
          .splice(0, 20)
          .join(" ") + "..."
      );
    }
  },
  mounted() {
    this.getResult();
    this.myFunction();
  },
  methods: {
    getResult() {
      customerService
        .getCustomerRecord(this.$route.params.id)
        .then(response => {
          //handle response
          if (response.status) {
            this.records = response.data;
            this.jobs = response.data.jobs;
          } else {
            this.$toast.open({
              message: response.message,
              type: "error",
              position: "top-right"
            });
          }
        });
    },
    myFunction() {
      var input, filter, table, tr, td, i, txtValue;
      input = document.getElementById("myInput");
      filter = input.value.toUpperCase();
      table = document.getElementById("myTable");
      tr = table.getElementsByTagName("tr");
      for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[1];
        if (td) {
          txtValue = td.textContent || td.innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
          } else {
            tr[i].style.display = "none";
          }
        }
      }
    },
    setPages() {
      let numberOfPages = Math.ceil(this.jobs.length / this.perPage);
      for (let index = 1; index <= numberOfPages; index++) {
        this.pages.push(index);
      }
    },
    paginate(jobs) {
      let page = this.page;
      let perPage = this.perPage;
      let from = page * perPage - perPage;
      let to = page * perPage;
      return jobs.slice(from, to);
    }
  }
};
</script>
