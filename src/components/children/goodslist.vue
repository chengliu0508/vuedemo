<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <i class="el-icon-edit"></i>
    <i class="el-icon-share"></i>
    <i class="el-icon-delete"></i>
    <el-button type="primary" icon="el-icon-search">搜索</el-button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'goodslist'
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
