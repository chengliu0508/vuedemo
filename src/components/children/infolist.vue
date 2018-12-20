<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>{{ $t("message.hello") }}</p>
    <el-button @click='getnewsList' type="primary" icon="el-icon-edit">getnewsList</el-button>
    <ul>
        <li v-for="(item, index) in newsList" :index='index' class="item">
          <span>{{item.name}}</span><span>{{item.news}}</span><span>{{item.date}}</span>
        </li>
    </ul>
  </div>
</template>

<script>
import {apigetDiscList,foo} from '@/api'
export default {
  name: 'infolist',
  data () {
    return {
      msg: 'infolist',
      newsList:[{name:'小花',news:'小花结婚啦',date:'2018/10/28'},
      {name:'小明',news:'小明长大啦',date:'2018/10/28'},
      {name:'小红',news:'小红变美啦',date:'2018/10/28'}]
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
