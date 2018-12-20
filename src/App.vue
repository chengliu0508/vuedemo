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

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-size:14px;
  margin:0;
}
.contain{
  max-width:1100px;
  min-height:450px;
  margin: 0 auto;
}
</style>
