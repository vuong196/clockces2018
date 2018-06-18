<template>
  <div class="formtimezone">
    <timezone-row></timezone-row>
    <timezone-infor v-bind:city='city'></timezone-infor>
    <div class="btn">
      <i class="small material-icons">home</i>
      <i class="small material-icons">delelte</i>
    </div>
  </div>
</template>
<script>
import timezonerow from './TimeZoneForm/timezonerow'
import timezoneinfor from './TimeZoneForm/timezoneinfor'
export default {
  name: 'timezoneform',
  components: {
    'timezone-row': timezonerow,
    'timezone-infor': timezoneinfor
  },
  props: {
    city: {
      kh: 'US',
      cityName: 'Cà Mau',
      country: 'Việt Nam',
      timezone: '+7',
      date: '',
      hour: ''
    }
  },
  data () {
    return {
    }
  }
}
</script>
<style scoped>
.formtimezone{
  margin:10px;
  width:1176px;
  height:80px;
  border-radius:25px;
  border: solid 2px #a7a7a7;
  background-color: white;
}
.btn {
  float:left;
  text-align: center;
  padding-top:25px;
  padding-left:15px;
  width:5%;
}
</style>
