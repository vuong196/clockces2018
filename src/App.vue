<template>
  <div id="app">
    <h1><center>WORLD CLOCK</center></h1>
    <getIP></getIP>
    <div class="Board">
      <div class="header">
        <search-form></search-form>
      </div>
      <timezone-list></timezone-list>
    </div>
  </div>
</template>

<script>
// import axios from 'axios'
import getIp from './components/getIP'
import searchform from './components/Search'
import listtimezone from './components/ListTimeZone'
export default {
  name: 'App',
  components: {
    'search-form': searchform,
    'getIP': getIp,
    'timezone-list': listtimezone
  },
  data () {
    return {}
  },
  mounted () {
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.Board {
  background-color: #ededed;
  width: 1200px;
  height: 400px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 30px;
  position:relative;
  border: solid 2px #a7a7a7;

}
.header {
  background-color: #ededed;
  width: 1100px;
  height: 65px;
  margin:5px;
  border-radius: 35px;
}
</style>
