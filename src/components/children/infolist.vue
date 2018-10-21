<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>{{ $t("message.hello") }}</p>
    <el-button @click='getnewsList' type="primary" icon="el-icon-edit">getnewsList</el-button>
  </div>
</template>

<script>
import axios from 'axios'
import {apigetDiscList,foo} from '@/api'
export default {
  name: 'infolist',
  data () {
    return {
      msg: 'infolist',
      newsList:[]
    }
  },
  methods: {
    getnewsList() {
      var hello = foo()
      console.log(hello)
      
      apigetDiscList().then((res) => {
        console.log(res)
      })
    },
    getfoo(){
      foo()
    },
    greturndata(data){
      return data
    }
  }
}
</script>

<style scoped>

</style>
