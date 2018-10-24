<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <i class="el-icon-edit"></i>
    <i class="el-icon-share"></i>
    <i class="el-icon-delete"></i>
    <el-button type="primary" @click='changetestdata' icon="el-icon-search">修改state.test</el-button>
    <p><span>store里面test数据为：</span>{{getterstest}}</p>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'goodslist'
    }
  },
  computed: {
    getterstest () {
      return this.$store.getters.getterstest
    }
  },
  methods: {
    changetestdata(){
      this.$store.dispatch('changedata','hello')
    }
  }
}
</script>

<style lang="scss" scoped="" type="text/css">
//你的sass语言

$primary-color: #e21313;

.hello {
  color: $primary-color;  //编译后就成了 color:#333;类似于js的变量！
}

</style>
