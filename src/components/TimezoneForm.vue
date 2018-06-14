<template>
  <div class="formtimezone">
    <timezone-row></timezone-row>
    <timezone-infor :data="infor"></timezone-infor>
    <div style="float:left; padding:15px;padding-top:25px; width:5%;">
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
  data () {
    return {
      infor: {
        city: 'Hà Nội',
        country: 'Việt Nam',
        timezone: '+7',
        date: '',
        hour: ''
      }
    }
  }
}
</script>
<style scope>
.formtimezone{
  margin:15px;
  width:97%;
  position: fixed;
  height:80px;
  border-radius:25px;
  border: solid 2px #a7a7a7;
}
</style>
