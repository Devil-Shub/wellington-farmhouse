<template>
  <v-app class="dispatcher-area">
    <v-container class="pr-0">
      <v-row>
        <v-col cols="7" md="7">
          <div class="dispatch-top">
            <div class="form-group">
              <label>Date</label>
              <span>21/06/2020</span>
            </div>
            <h4 class="main-title pl-0">All Jobs</h4>
          </div>
          <table id="table" class="table table-striped table-bordered" style="width:100%">
            <thead>
              <tr>
                <th>Sno</th>
                <th>Job_id</th>
                <th>Price</th>
                <th>Start Time</th>
                <th>End Time</th>
                <th>Service</th>
                <th>Driver Name</th>
                <th>Edit</th>
                <th>View Detail</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>34567A12</td>
                <td>$2500</td>
                <td>08:30AM</td>
                <td>11:20AM</td>
                <td>Meanure Picking</td>
                <td>Jason Statham</td>
                <td>Edit Job</td>
                <td>View Map</td>
              </tr>
            </tbody>
          </table>
        </v-col>
        <v-col cols="5" md="5" class="pr-0">
          <div id="app">
            <mapbox
              access-token="pk.eyJ1IjoibG9jb25lIiwiYSI6ImNrYmZkMzNzbDB1ZzUyenM3empmbXE3ODQifQ.SiBnr9-6jpC1Wa8OTAmgVA"
              :map-options="{
                style: 'mapbox://styles/mapbox/light-v9',
                center: [-96, 37.8],
                zoom: 3,
              }"
        :geolocate-control="{
                show: true,
                position: 'top-left',
              }"
              :scale-control="{
                show: true,
                position: 'top-left',
              }"
              :fullscreen-control="{
                show: true,
                position: 'top-left',
              }"
            />

          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>
<script>
import Mapbox from 'mapbox-gl-vue';
import { jobService } from "../../../_services/job.service";
import { environment } from "../../../config/test.env";
export default {
components: { Mapbox },
  data() {
    return {
   
    };
  },
  created() {
  
  },
  updated() {
    setTimeout(function() {
        $(document).ready(function() {
          $('#table').DataTable();
      } );
    }, 1000);
  }
};
</script>
<style>
#map {
  width: 100%;
  height: 500px;
}
</style>
