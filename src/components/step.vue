<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>
      <el-steps :active="2" align-center>
        <el-step title="步骤1" description="这是一段很长很长很长的描述性文字"></el-step>
        <el-step title="步骤2" description="这是一段很长很长很长的描述性文字"></el-step>
        <el-step title="步骤3" description="这是一段很长很长很长的描述性文字"></el-step>
        <el-step title="步骤4" description="这是一段很长很长很长的描述性文字"></el-step>
      </el-steps>
    </div>
  </div>
</template>

<script>
export default {
  name: 'step',
  data () {
    return {
      msg: '步骤条'
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
