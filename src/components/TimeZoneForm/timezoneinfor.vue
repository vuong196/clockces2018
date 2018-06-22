<template>
    <div id="timezoneinfor">
        <div class="timezone_hour">
            {{city.timezone}}
        </div>
        <div class="timezone_place">
            <div class="timezone_city">
                <a>{{city.cityName}}</a>
            </div>
            <div class="timezone_country">
                {{city.country}}
            </div>
        </div>
        <div class="timezone_datetime">
            {{hour}}
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import moment from 'moment'
export default {
  name: 'timezoneinfor',
  props: ['cityName'],
  data () {
    return {
        city:[]
    }
  },
  mounted () {
    this.city = this.$parent.$props.city
  },
  methods: {
    time () {
      var self = this
      this.date = moment().format('MMM Do YY')
      this.hour = moment().format('LTS')
      setInterval(self.time, 1000)
    }
  }
}
</script>

<style>
#timezoneinfor{
    background-color:rgb(255, 255, 255);
    float: right;
    width: 25%;
    height:100%;
    border-radius: 4px;
}
.timezone_hour{
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 20px;
    color:rgb(167, 167, 167);
    font-weight: bold;
    text-align: center;
    float: left;
    padding-top: 25px;
    padding-left:10px;
}
.timezone_place{
    padding-top:10px;
    width:50%;
    float:left
}
.timezone_city{
    float: left;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-weight: bold;
    font-size: 20px;
    text-align: right;
}
.timezone_country{
    padding-left:5px;
    float: left;
    padding-top:7px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
}
.timezone_datetime{
    width:50%;
    float: right;
    padding-left:10px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-weight: bold;
    font-size: 17px;

}
</style>
