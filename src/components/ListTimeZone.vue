<template>
    <div class="listTimeZone">
        <div v-for="(city, namecity) in listcities" :key="namecity">
            <timezone-form :city='city'></timezone-form>
        </div>
        {{citychosen}}
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
      listcities: []
    }
  },
  mounted () {
    this.listcities = this.$parent.$props.listcities
  },
  watch: {
    listcities: function () {
      this.listcities = this.$parent.$props.listcities
    }
  },
  methods: {
  }
}
</script>
<style scoped>
.listTimeZone {
  margin-top:30px;
  background-color: #FFFFFF;
  width: 100%;
  padding: 2px;
  min-height: 300px;
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;

}
</style>
