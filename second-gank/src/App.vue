<template>
  <div id="app">
    <v-header></v-header>
    <v-menu></v-menu>
    <router-view></router-view>
  </div>
</template>

<script>
  import vHeader from './components/header/header.vue';
  import vMenu from './components/menu/menu.vue';
  export default {
    name: 'app',
    components: {
      'v-header': vHeader,
      'v-menu': vMenu
    }
  };</script>
