<template>
  <div id="app">
    <Header></Header>
    <div class='contain'>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
export default {
  components: {
    Header,
    Footer
  },
  data (){
    return {
      zoom: 12
    }
  }
}
</script>

<style lang="scss" scoped type="text/css">
@import '@/components/plugin/style/index.scss'

</style>
