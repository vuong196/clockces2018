<template>
  <div id="getIP">
    <h1>Your location is {{ ip.city }}</h1>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'getIP',
  data () {
    return {
      ip: ''
    }
  },
  mounted () {
    axios({ method: 'GET', 'url': 'http://ip-api.com/json' }).then(result => {
      this.ip = result.data
    }, error => {
      console.error(error)
    })
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
