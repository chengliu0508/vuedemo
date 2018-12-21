<template>
  <div class="hello">
    <quill-editor
    v-model="content"
    ref="myQuillEditor"
    :options="editorOption"
    @blur="onEditorBlur($event)"
     @focus="onEditorFocus($event)"
    >    
    </quill-editor>
  </div>
</template>

<script>
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

import { quillEditor } from 'vue-quill-editor'

export default {
  name: 'quill',
  components: {
    quillEditor
  },
  data () {
    return {
      content: '',
      editorOption : {}
    }
  },
  methods:{
    onEditorBlur(editor) {
      console.log(this.content)
    },
    onEditorFocus(editor) {
      editor.enable(true)   // 实现达到上限字符可删除
    }
  }
}
</script>

<style scoped>

</style>