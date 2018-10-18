<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>{{ $t("message.hello") }}</p>
    <el-button @click='getnewsList' type="primary" icon="el-icon-edit">getnewsList</el-button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'infolist',
  data () {
    return {
      msg: 'infolist',
      newsList: {}
    }
  },
  methods: {
    getnewsList() {
      var _this= this
      this.newsList= axios({
        method: 'get',
        url: '/api/json',
        params: {
          ID: 12345
        },
        timeout: 10000,
        responseType: 'json'
      })
      .then(function (response) {
        _this.printnewsList(response.data) 
      })     
    },
    printnewsList(data){
      console.log(data.a)
    }
  }
}
</script>

<style scoped>

</style>
