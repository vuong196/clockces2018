
<template>
  <div id="timezonerow">
      <nav class="navigation navigation--inline">
        <ul>
            <li class="cam">
            <a href="#">0</a>
            </li>
            <li class="cam">
              <a href="#">1</a>
            </li>
            <li class="cam">
              <a href="#">2</a>
            </li>
            <li class="cam">
              <a href="#">3</a>
            </li>
            <li class="cam">
              <a href="#">4</a>
            </li>
            <li class="cam">
              <a href="#">5</a>
            </li>
            <li class="cothe">
              <a href="#">6</a>
            </li>
            <li class="cothe">
              <a href="#">7</a>
            </li>
            <li class="ok">
              <a href="#">8</a>
            </li>
            <li class="ok">
              <a href="#">9</a>
            </li>
            <li class="ok">
              <a href="#">10</a>
            </li>
            <li class="ok">
              <a href="#">11</a>
            </li>
            <li class="ok">
              <a href="#">12</a>
            </li>
            <li class="ok">
              <a href="#">13</a>
            </li>
            <li class="ok">
              <a href="#">14</a>
            </li>
            <li class="ok">
              <a href="#">15</a>
            </li>
            <li class="ok">
              <a href="#">16</a>
            </li>
            <li class="ok">
              <a href="#">17</a>
            </li>
            <li class="cothe">
              <a href="#">18</a>
            </li>
            <li class="cothe">
              <a href="#">19</a>
            </li>
              <li class="cothe">
              <a href="#">20</a>
            </li>
            <li class="cothe">
              <a href="#">21</a>
            </li>
            <li class="cam">
              <a href="#">22</a>
            </li>
            <li class="cam">
              <a  href="#">23</a>
            </li>
        </ul>
      </nav>
  </div>
</template>

<script scope>
export default {
  name: 'timezonerow'
}
</script>

<style>
#timezonerow{
  margin-left: 5px;
  float:right;
  width:70%;
  height:100%;
}
.cam{
    background-color: rgb(148, 148, 148);
}
.cothe{
    background-color: rgb(192, 192, 192);
}
.ok{
    background-color: rgb(236, 236, 236);
}
a {
  outline: 0;
}
.navigation {
  height:100%;
  width:100%;
  float:right;
  margin: 0;
    padding: 0;
}

.navigation ul {
    list-style: none;
    height: 100%;
    margin: 0;
    padding: 0;
    color:#ffffff;
}
.navigation ul li {
    width:10%;
}

.navigation a {
  display: block;
  position: relative;
  text-decoration: none;
  text-align: center;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 15px;
  color: white;
  font-weight: bold;
  padding-top: 25px;
}

.navigation a:focus::after,
.navigation a:hover::after {
  opacity: 1;
}

.navigation a::after {
  content: '';
  height: 100%;
  left: 0;
  opacity: 0;
  position: absolute;
  top: 0;
  -webkit-transition: opacity 0.3s;
  transition: opacity 0.3s;
  width: 100%;
}

.navigation--inline ul {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  height:100%;
}

</style>
