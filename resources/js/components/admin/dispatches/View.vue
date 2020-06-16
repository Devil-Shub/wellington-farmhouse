<template>
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
</template>
<script>
import Mapbox from 'mapbox-gl-vue'
export default {
components: { Mapbox },
  data() {
    return {
   
    };
  },
  created() {
  
  }
};
</script>
<style>
#map {
  width: 100%;
  height: 500px;
}
</style>
