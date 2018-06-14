<template>
    <div id="timezoneinfor">
        <div class="timezone_hour">
            {{timezone}}
        </div>
        <div class="timezone_place">
            <div class="timezone_city">
                <a>{{city}}</a>
            </div>
            <div class="timezone_country">
                <a>{{country}}</a>
            </div>
        </div>
        <div class="timezone_datetime">
            <a>{{hour}}</a>
            <a>{{date}}</a>
        </div>
    </div>
</template>

<script>
import moment from 'moment'

export default {
  name: 'timezoneinfor',
  data () {
    return {
      city: 'Đà Nẵng',
      country: 'Việt Nam',
      timezone: '+7',
      date: '',
      hour: ''
    }
  },
  methods: {
    time () {
      var self = this
      this.date = moment().format('MMM Do YY')
      this.hour = moment().format('LTS')
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
    float: left;
    padding-left:10px;
    padding-top: 20px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-weight: bold;
}
.timezone_country{
float: left;
    padding-left:4px;
    padding-top: 20px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
}
.timezone_datetime{
    float: left;
    padding-left:10px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-weight: bold;
}
</style>
