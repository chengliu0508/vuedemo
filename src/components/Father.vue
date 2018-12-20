<template>
  <div>
    <div class="app-head">
        <ul class="nav-list">
            <router-link :to="{path: '/father/goodslist'}"><li> {{ goodlist }}</li></router-link>
            <router-link :to="{path: '/father/infolist'}"><li> {{ infolist }}</li></router-link>
        </ul>
    </div>
    <div class="container">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      goodlist: '跳转到商品列表',
      infolist: '跳转到信息列表'
    }
  }
}
</script>

<style>
  .app-head {
    color: #b2b2b2;
    height: 30px;
    line-height: 30px;
    width: 100%;
  }
  .nav-list li {
    cursor: pointer;
    float: left;
    padding-left:50px;
  }
</style>
