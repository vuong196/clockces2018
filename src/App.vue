<template>
  <div id="app">
    <div v-bind:title="randNum" v-if="shown">
      Hover over me for your random number
    </div>
  <a class="waves-effect waves-light btn" v-on:click="reveal">button</a>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      randNum: Math.floor(Math.random() * 50) + 1,
      shown: true
    }
  },
  methods: {
    reveal () {
      alert(`Here's the secret number: ${this.randNum}`)
    }
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
