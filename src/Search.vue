<template>
  <div id="searchform">
        <input type="text" v-model="searchtext" list="listofCities" placeholder="Search city..." />
        <datalist id="listofCities" >
          <option v-for="(city, idx) in cities" :key="idx">
            <h1>{{city.city}}</h1>
            <p>{{city.country}}</p>
          </option>
        </datalist>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'searchform',
  data () {
    return {
      cities: [],
      searchtext: ''
    }
  },
}
</script>
<style>
#searchform {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
