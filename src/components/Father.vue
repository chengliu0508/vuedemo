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
    <div class="app-foot">
      <p>© 2018 fishenal MIT</p>
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
    background: #42c51a;
    color: #b2b2b2;
    height: 90px;
    line-height: 90px;
    width: 100%;
  }
  .nav-list li {
    cursor: pointer;
    float: left;
    padding-left:50px;
  }
  .app-foot {
    text-align: center;
    height: 80px;
    width: 100%;
    line-height: 80px;
    background: #5f6a94;
    margin-top: 30px;
  }
</style>
