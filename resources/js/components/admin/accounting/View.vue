<template>
  <v-container
    id="dashboard"
    fluid
    tag="section"
  >
    <v-row>
      <v-col cols="12" sm="12">
        <div class="account-upper">
          <div class="account-left"><img src="" alt="account"></div>
          <div class="account-right">
            <h3>Jason Statham</h3>
            <h5>Truck Driver</h5>
            <router-link to="/admin/accounting/details">
              <v-btn color="success" class="custom-save-btn mt-2">Check Invoice</v-btn>
            </router-link>
            <router-link to="/admin/accounting/details">
              <v-btn color="success" class="custom-save-btn ml-4 mt-2">Send Payment</v-btn>
            </router-link>
          </div>
        </div>
        <div class="account-mid">
          <table id="" class="table table-striped table-bordered" style="width:100%">
            <thead>
                <tr>
                    <th>Sno</th>
                    <th>Date</th>
                    <th>Total km</th>
                    <th>Salary</th>
                    <th>Total Time</th>
                    <th>Shift Time</th>
                    <th>Time Slot</th>
                    <th>Total Amount</th>
                </tr>
            </thead>
            <tbody>
              <tr>
                  <td>1</td>
                  <td>16/06/2020</td>
                  <td>170km</td>
                  <td>$500/Load</td>
                  <td>3hrs</td>
                  <td>Evening</td>
                  <td>4PM-7PM</td>
                  <td>$2500</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="account-bottom mt-6">
          <span class="tt-amt">TOTAL AMOUNT</span>
          <span class="amt-cash">$2500</span>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>


export default {
  data() {
    return {
   
    };
  },
  created() {
  
  }
};
</script>
