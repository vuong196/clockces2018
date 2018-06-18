<template>
    <div class="listTimeZone">
        <div v-for="(cityName, namecity) in listcities" :key="namecity">
            <timezone-form :data="cityName"></timezone-form>
        </div>
    </div>
</template>
<script>
import timezoneform from './TimezoneForm'

export default {
  name: 'listtimezone',
  components: {
    'timezone-form': timezoneform
  },
  data () {
    return {
      listcities: [
        {cityName: 'Đà Nẵng'},
        {cityName: 'Lào'},
        {cityName: 'Đà Nẵng'},
        {cityName: 'Đà Nẵng'},
        {cityName: 'Đà Nẵng'},
      ]
    }
  }
}
</script>
<style scoped>
.listTimeZone {
  background-color: #f7f9ff;
  width: 1200px;
  min-height: 350px;
  border-radius: 30px;
  border: solid 2px #a7a7a7;
  margin-left:-2px
}
</style>
