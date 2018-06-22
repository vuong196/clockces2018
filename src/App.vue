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
  props: {
    citychosen: {
      type: String,
      default: ''
    },
    listcities: {
      type: Array,
      default: []
    }
  },
  data () {
    return {

    }
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
  background-color: #ffffff;
  width: 1200px;
  min-height: 400px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 0px;
  position:relative;
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}
.header {
  background-color: #ffffff;
  width: 100%;
  height: 80px;
}
</style>
