<template>
  <div style="padding:10px;width:30%;">
    <md-autocomplete style="border:1px;" v-model="searchtext" :md-options="citylist" :md-fuzzy-search="true" @md-selected="getcity" @md-changed="getCountries" @md-opened="open">
      <label>Search city...</label>

      <template slot="md-autocomplete-item" slot-scope="{ item, term }">
        <md-highlight-text :md-term="term">
          {{ item.cityName }}
        </md-highlight-text>
      </template>

      <template slot="md-autocomplete-empty" slot-scope="{ term }">
        No cities matching "{{ term }}" were found.
      </template>
    </md-autocomplete>
  </div>
</template>
<script>
import axios from 'axios'
var l = 'https://cors-anywhere.herokuapp.com/https://world-clock2018.herokuapp.com/search-city/'
export default {
  name: 'searchform',
  data () {
    return {
      cities: [],
      searchtext: '',
      citylist: []
    }
  },
  methods: {
    open () {
      axios({
        method: 'GET',
        url: l + 'ho_chua_mua'
      }).then(
        results => {
          this.citylist = []
          this.cities = results.data
          this.citylist = this.cities
        },
        error => {
          alert(error)
        })
      
    },
    getcity: function (searchTerm) {
      if (!(searchTerm in this.$parent.$props.listcities)) 
        { 
          this.$parent.$props.listcities.push(searchTerm) 
        }
    },
    getCountries (searchTerm) {
      this.citylist = new Promise(resolve => {
        window.setTimeout(() => {
          if (!searchTerm) {
            resolve(this.cities)
          } else {
            const term = searchTerm.toLowerCase()

            resolve(this.cities.filter(({ cityName }) => cityName.toLowerCase().includes(term)))
          }
        }, 500)
      })
    }
  }

}
</script>
<style>
#searchform {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #2c3e50;
  float:left;
  margin-top: 6px;
  margin-left:6px;
}

</style>
