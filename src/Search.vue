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
  mounted () {
    axios({
      method: 'GET',
      // url: 'https://cors-anywhere.herokuapp.com/https://search-city.herokuapp.com/city'
      url: 'https://www.jsonstore.io/dc044374c83f1083a65ef85d1cb29005129f19bf99702270368ddebc3febe679'
    }).then(
      results => { this.cities = results.data },
      error => {
        console.error(error)
      })
  },
  watch: {
    searchtext: function () {
      if (!this.searchtext.length) return this.cities
      this.cities = this.cities.filter(city => (city.city.toLowerCase().indexOf(this.searchtext.toLowerCase()) > -1))
    }
  }
  
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
