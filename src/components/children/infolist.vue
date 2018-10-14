<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>{{ $t("message.hello") }}</p>
    <el-button type="primary" icon="el-icon-edit">primary button</el-button>
  </div>
</template>

<script>
export default {
  name: 'infolist',
  data () {
    return {
      msg: 'infolist'
    }
  }
}
</script>

<style scoped>

</style>
