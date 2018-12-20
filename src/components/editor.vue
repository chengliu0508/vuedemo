<template>
    <div >
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="quill编辑器" name="quill">
                用户管理
            </el-tab-pane>
            <el-tab-pane label="umeditor编辑器" name="umeditor">
                配置管理
            </el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>
  export default {
    data() {
      return {
        activeName: 'quill'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
</script>

<style scoped>

</style>