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
            {{city.hour}}
        </div>
    </div>
</template>

<script>
import moment from 'moment'

export default {
  name: 'timezoneinfor',
  data () {
    return {
      city: {
        kh: 'US',
        cityName: 'Đà Nẵng',
        country: 'Việt Nam',
        timezone: '+7',
        date: '',
        hour: ''
      }
    }
  },
  methods: {
    time () {
      var self = this
      this.city.date = moment().format('MMM Do YY')
      this.city.hour = moment().format('LTS')
      setInterval(self.time, 1000)
    }
  },
  mounted: function () {
    this.time()
  }
}
</script>

<style>
#timezoneinfor{
    float: right;
    width: 25%;
    height:100%;
    border-left:solid 2px #a7a7a7;
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

.timezone_city{
    float: right;
    padding-left:10px;
    padding-top: 10px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-weight: bold;
    font-size: 20px;
}
.timezone_country{
    float: right;
    padding-left:4px;
    padding-top: 18px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
}
.timezone_datetime{
    float: right;
    padding-left:10px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-weight: bold;
    font-size: 20px;

}
</style>
