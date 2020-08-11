<template>
  <v-container id="dashboard" fluid tag="section">
    <v-row class="dashboard-columns">
            <div class="services col mx-1">
                <h4> 92.6K </h4>
                <p> Services </p>
              <canvas id="planet-chart"></canvas>
            </div> 
            <div class="services col mx-1">
                <h4> 352 </h4>
                <p> Employees </p>
            </div> 
            <div class="services col mx-1">
                <h4> 400 </h4>
                <p> Drivers </p>
            </div> 
            <div class="services col mx-1">
                <h4> 150 </h4>
                <p> Fleets </p>
            </div> 
            <div class="services col mx-1">
                <h4> 100 </h4>
                <p> Skid steers </p>
            </div> 
          </v-row>

          <v-row class="dashboard-columns-1">
            <div class="main col mx-6">
                sdcsd
            </div>
            <div class="main col mx 2">
                sdcsd
            </div>
          </v-row>
          <v-row>
            <v-col cols="12" sm="6" lg="6">
              <canvas id="planet-chart"></canvas>
            </v-col>
            <v-col cols="12" sm="6" lg="6">
              <canvas id="pie-chart"></canvas>
            </v-col>
          </v-row>
  </v-container>
</template>

<script>
import Chart from "chart.js";
import planetChartData from "./chart/chart-data.js";
import pieChartData from "./chart/pie-chart-data.js";
export default {
  data() {
    return {
      planetChartData: planetChartData,
      pieChartData: pieChartData
    };
  },
  mounted() {
    this.createChart("planet-chart", this.planetChartData);
    this.createChart("pie-chart", this.pieChartData);
  },
  methods: {
    createChart(chartId, chartData) {
      const ctx = document.getElementById(chartId);
      const myChart = new Chart(ctx, {
        type: chartData.type,
        data: chartData.data,
        options: chartData.options
      });
    }
  },
  created() {}
};
</script>

<style>
    .dashboard-columns .services { 
            height: 200px; 
            background-color: #fff;
            box-shadow: 0 0 12px rgba(0, 0, 0, 0.2);
            border-radius: 10px;
        } 

    .dashboard-columns-1 {
        margin-top: 30px;
    margin-bottom: 30px;
}
    .dashboard-columns-1 .main {
            height: 200px;
            background-color: #fff;
            box-shadow: 0 0 12px rgba(0, 0, 0, 0.2);
            border-radius: 10px;
            margin-left: 5px !important;
}

        #dashboard {
            
}
</style>


