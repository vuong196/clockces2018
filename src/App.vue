<template>
  <div id="app">
    <getIP></getIP>
    <div class="container">
      <search-form></search-form>
    </div>
    <timezone-form></timezone-form>
  </div>
</template>

<script>
// import axios from 'axios'
import getIp from './components/getIP'
import searchform from './components/Search'
import timezoneform from './components/TimezoneForm'
export default {
  name: 'App',
  components: {
    'search-form': searchform,
    'getIP': getIp,
    'timezone-form': timezoneform
  },
  data () {
    return {}
  },
  mounted () {
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
