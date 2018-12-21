<template>
    <div >
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="quill编辑器" name="quill">
               <quill></quill>
            </el-tab-pane>
            <el-tab-pane label="umeditor编辑器" name="umeditor">
              <vUeditor
                id="body-ueditor"
                :content="content"
                @change='getContent'
                @ready="(ue)=>{this.bodyUeditor = ue}"
              ></vUeditor>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>
  import quill from '@/components/common/quill'
  import vUeditor from '@/components/common/vUeditor'
  export default {
    data() {
      return {
        activeName: 'umeditor',
        content: '',
        bodyUeditor: null
      }
    },
    components:{
      quill,
      vUeditor
    },
    methods: {
      handleClick(tab, event) {
        // console.log(tab, event);
      },
      getContent(content) {
        console.log(content.getContent())
      }
    },
    mounted () {
      setTimeout(() => {
        this.content = '初始化'
      }, 0)
    }
  }
</script>

<style scoped>

</style>