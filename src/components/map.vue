<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="amap-page-container">
      <el-amap vid="amapDemo" :zoom="zoom" :center="center">
      </el-amap>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      zoom: 12,
      center: [121.59996, 31.197646],
      msg: 'Welcome to Your gaode'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .amap-page-container {
    height: 500px;
    width: 500px;
  }
</style>
