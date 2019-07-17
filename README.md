
<script>
export default {
  name: 'VFor',
  data () {
    return {
      disabled: false,
      layout: ['prev', 'next', 'right']
    }
  },
  // render: function (createElement) {
  //   return createElement(
  //     'h', {
  //       class: 'hello'
  //     }, // tag name 标签名称
  //     6666666666
  //   )
  // },
  // render: (h) => h(
  //   'button', {
  //     class: 'hello'
  //   }, // tag name 标签名称
  //   6666666666 // 子组件中的阵列
  // ),
  render (createElement) {
    let template = <div class={['el-pagination', {
      'is-background': this.disabled,
      'el-pagination--small': this.disabled
    }] }></div>

    let prev = <prev></prev>
    let right = <right></right>

    template.children = template.children || []
    template.children.push(prev)
    template.children.push(right)
    return template
  },
  components: {
    Prev: {
      render (h) {
        return (
          <button
            type="button"
            class="btn-prev"
            disabled={ this.disabled }
            on-click={ this.$parent.click }>
            {
              this.disabled
                ? <span>{ this.disabled }</span>
                : <i class="el-icon el-icon-arrow-left"></i>
            }
          </button>
        )
      }
    },

    Right: {
      render (h) {
        return (
          <button
            type="button"
            class="btn-next"
            disabled={ this.disabled }
            on-click={ this.$parent.click }>
            <i class="el-icon el-icon-arrow-right"></i>
          </button>
        )
      }
    }
  },
  methods: {
    click () {
      console.log(66666666)
    }
  }
}
</script>
