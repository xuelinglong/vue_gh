<template>
  <div class="tab">
    <mu-appbar title="">
        <mu-flat-button label="郑州" slot="left"/>
        <mu-icon-menu icon="expand_more" :maxHeight="200" slot="left">
            <mu-menu-item v-for="city in cities" :title="city"/>
        </mu-icon-menu>
        <mu-icon-button icon="search" slot="right"/>
        <input type="text" name="search" value="" style="background: #f5f5f5">
    </mu-appbar>
    <mu-tabs :value="activeTab" @change="handleTabChange">
      <mu-tab value="in_theaters" title="正在热映"/>
      <mu-tab value="coming_soon" title="即将上映"/>
    </mu-tabs>
    <v-listview :tabName="activeTab"></v-listview>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  import Vlistview from './listview/listview.vue';
  import * as type from './../axios/movies/type';

  export default {
    data() {
      return {
        cities: {
          '0': '北京',
          '1': '上海',
          '2': '广州',
          '3': '杭州',
          '4': '深圳',
          '5': '香港',
          '6': '澳门'
        }
        // open: false
        // activeTab: 'in_theaters'
      };
    },
    components: {
      'v-listview': Vlistview
    },
    computed: mapState({
      activeTab: state => state.movie.tab
    }),
    methods: {
      handleTabChange(val) {
        // Action 通过 store.dispatch 方法触发
        this.$store.dispatch(type.CHANGE_MOVIES_TAB, val);
        // this.activeTab = val;
        // this.tabvalue = val;
        // console.log(`tabName: ${this.activeTab}`);
      }
    }
  };</script>

<style lang="less">
.tab{
  margin: -60px 0;
}
  input{
    height: 40px;
    border-radius: 9px;
  }
</style>