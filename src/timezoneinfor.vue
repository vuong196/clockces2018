<template>
    <div id="timezoneinfor" onload="startTime()">
        <div class="timezone_hour">
            +5
        </div>
        <div class="timezone_place">
            <div class="timezone_city">
                <a>Đà Nẵng</a>
            </div>
            <div class="timezone_country">
                <a>Việt Nam</a>
            </div>
        </div>
        <div class="timezone_datetime">
            <div id="txt"></div>
        </div>
    </div>
</template>


<script>
function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}
export default {
    name: 'timezoneinfor',
}
</script>

<style>
#timezoneinfor{
    float: right;
    width: 20%;
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
