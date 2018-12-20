<template>
  <div class="header">
    <img src="../assets/logo.png">
    <!-- <div class='link-list'>
      <router-link :to="{path: '/'}"><span>{{home}}</span></router-link>
      <router-link :to="{path: '/father'}"><span>{{link1}}</span></router-link>
      <router-link :to="{path: '/editor'}"><span>{{editor}}</span></router-link>
      <router-link :to="{path: '/step'}"><span>{{step}}</span></router-link>
    </div> -->
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">
        <router-link :to="{path: '/'}"><span>{{home}}</span></router-link>
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">活动</template>
        <el-menu-item index="2-1">
          <router-link :to="{path: '/father'}"><span>{{link1}}</span></router-link>
        </el-menu-item>
        <el-submenu index="2-2">
          <template slot="title">
            <router-link :to="{path: '/father'}"><span>{{link1}}</span></router-link>
          </template>
          <el-menu-item index="2-2-1">
            <router-link :to="{path: '/father/goodslist'}"><span>goodslist</span></router-link>
          </el-menu-item>
          <el-menu-item index="2-2-2">
            <router-link :to="{path: '/father/infolist'}"><span>infolist</span></router-link>
          </el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="3">
        <router-link :to="{path: '/editor'}"><span>{{editor}}</span></router-link>
      </el-menu-item>
      <el-menu-item index="4">
        <router-link :to="{path: '/step'}"><span>{{step}}</span></router-link>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'editor',
  data () {
    return {
      home: '首页',
      link1: '活动',
      editor: '编辑器',
      step: '步骤条',
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style scoped>
.header {
  background: yellowgreen;
  padding:10px 60px;;
  height:40px;
}
.header img{
  float:left;
  width:60px;
  height:40px;
}
.header .link-list{
  height:100%;
  vertical-align: center;
}
.header .link-list a{
  font-size:20px;
  line-height:40px;
  vertical-align: center;
  padding-left:20px;
}
</style>