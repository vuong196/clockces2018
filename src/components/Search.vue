<template>
  <div id="searchform">
      <form>
        <input type="search" v-model="searchtext" list="listofCities" placeholder="Search city..." />
        <datalist id="listofCities" >
          <option v-for="(city, idx) in cities" :key="idx">
            <h1>{{city.id}}</h1>
            <p>{{city.name}}</p>
          </option>
        </datalist>
      </form>
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
  props: ['searchtext'],
  mounted () {
    axios({
      method: 'GET',
      url: 'https://cors-anywhere.herokuapp.com/https://clock-ces.herokuapp.com/topic'
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
  color: #2c3e50;
  float:left;
  margin-top: 6px;
  margin-left:6px;
}

#searchform input {
  outline: none;

}

#searchform input[type=search] {

	font-family: inherit;
	font-size: 100%;
  height:50px;
}
#searchform input::-webkit-search-decoration,
input::-webkit-search-cancel-button {
	display: none;
}

#searchform input[type=search] {
	background: #ededed url(https://static.tumblr.com/ftv85bp/MIXmud4tx/search-icon.png) no-repeat 9px center;
	border: solid 2px #ccc;
	padding: 9px 10px 9px 32px;
	width: 150px;

	-webkit-border-radius: 10em;
	-moz-border-radius: 10em;
	border-radius: 10em;

	-webkit-transition: all .5s;
	-moz-transition: all .5s;
	transition: all .5s;
}
#searchform input[type=search]:focus {
	width: 200px;
	background-color: #fff;
	border: solid 2px #a7a7a7;

}

#searchform input:-moz-placeholder {
	color: #999;
}
#searchform input::-webkit-input-placeholder {
	color: #999;
}
</style>
