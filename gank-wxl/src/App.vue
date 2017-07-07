<template>
  <div id="app">
    <v-header></v-header>
    <v-menu></v-menu>
    <router-view></router-view>
  </div>
</template>

<script>
  // 引用
  import header from './components/header/header.vue';
  import menu from './components/menu/menu.vue';

  // 注册header组件,header是一个原生词，因此有冲突，需要起一个别名
  export default {
    name: 'app',
    components: {
      'v-header': header,
      'v-menu': menu
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>