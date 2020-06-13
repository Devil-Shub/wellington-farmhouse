<template>
  <v-app>
    <v-container>
      <v-row>
        <h4 class="main-title">
          Customer Records
        </h4>
        <v-col sm="12" cols="12" class="cust-record-content">
          <v-col sm="2" class="p-0">
            <div class="single-record">
              <span class="record-timeline">
                Last 12 Months
              </span>
              <span class="record-price">
                ${{records.monthamount}}
              </span>
            </div>
          </v-col>
          <v-col sm="2" class="p-0">
            <div class="single-record">
              <span class="record-timeline">
                Last 12 Months
              </span>
              <span class="record-price">
                ${{records.allamount}}
              </span>
            </div>
          </v-col>
          <v-col sm="2" class="p-0">
            <div class="single-record">
              <span class="record-timeline">
                Last 12 Months
              </span>
              <span class="record-price">
                {{records.farmrecord}}
              </span>
            </div>
          </v-col>
          <v-col sm="2" class="p-0">
            <div class="single-record">
              <span class="record-timeline">
                Last 12 Months
              </span>
              <span class="record-price">
                {{records.totaljobs}}
              </span>
            </div>
          </v-col>
          <v-col sm="2" class="p-0">
            <div class="single-record">
              <span class="record-timeline">
                Last 12 Months
              </span>
              <span class="record-price">
                 {{records.memebersince | formatDate}}
              </span>
            </div>
          </v-col>
        </v-col>

        <v-col sm="12" cols="12">
          <v-simple-table>
            <template v-slot:default>
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
                <tr>
                  <td>57900</td>
                  <td>25 Country road, NY</td>
                  <td>17/06/2019</td>
                  <td>9:00 PM</td>
                  <td>Frendo Joes</td>
                  <td>$250</td>
                  <td>Scheduled</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
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
      prefix: ["One", "Two", "Three", "Four"],
      records:'',
    };
  },
 mounted: function() {
    customerService.getCustomerRecord(this.$route.params.id).then(response => {
      //handle response
      if (response.status) {
        this.records = response.data;
      } else {
        this.$toast.open({
          message: response.message,
          type: "error",
          position: "top-right"
        });
      }
    });
  },
};
</script>
