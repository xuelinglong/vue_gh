<template>
  <div id="app">
    <v-header></v-header>
    <div class="tab border-1px">

      <div class="tab-item">
        <!--使用指令 router-link 组件来导航 -->
        <!-- 通过 to 属性指定链接 -->
        <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
        <router-link to="/welfare">福利</router-link>
      </div>   

      <div class="tab-item">
        <router-link to="/android">安卓</router-link>
      </div>

      <div class="tab-item">
        <router-link to="/ios">IOS</router-link>
      </div>

      <div class="tab-item">
        <router-link to="/web">前端</router-link>
      </div>

      <div class="tab-item">
        <router-link to="/rest">休息视频</router-link>
      </div>

      <!--<div class="tab-item">
        APP
      </div>

      <div class="tab-item">
        瞎推荐
      </div>

      <div class="tab-item">
        拓展资源
      </div>-->

    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  // 引用
  import header from './components/header/header.vue';

  // 注册header组件,header是一个原生词，因此有冲突，需要起一个别名
  export default {
    name: 'app',
    components: {
      'v-header': header
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "./common/css/mixin.styl"

#app 
  .tab
    display: flex
    width: 100%
    height: 40px
    line-height: 40px
    background: #d6204b
    border-1px(#d6204b)
    overflow: hidden
    .tab-item
      flex: 1
      text-align: center
      & > a
        display: block
        text-decoration: none;
        font-size: 14px
        color: #ec9cae
        &.active
          color: #FFFFFF
          border-1px(#d6204b)
</style>