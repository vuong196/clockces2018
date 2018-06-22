<template>
  <div class="formtimezone">
    <timezone-row></timezone-row>
    <timezone-infor></timezone-infor>
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
  props: ['city']
}
</script>
<style scoped>
.formtimezone{
  margin:10px;
  width:1175px;
  height:70px;
  background-color: white;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.5);
}
.btn {
  float:left;
  text-align: center;
  padding-top:20px;
  padding-left:14px;
  width:4%;
}
</style>
