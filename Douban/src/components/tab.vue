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
      <mu-tab value="tab1" title="正在热映"/>
      <mu-tab value="tab2" title="即将上映"/>
    </mu-tabs>
    <v-listview :tabvalue="tabvalue"></v-listview>

 <!--   <div>正在热映</div>
    <div>即将上映</div>

    <mobile-tear-sheet>
      <mu-list>
        <mu-list-item title="电影名称">
          <mu-avatar icon="../assets/logo.png" slot="leftAvatar"/>
          <span slot="describe">
            <span style="color: rgba(0, 0, 0, .87)">评分</span> <br/>
            <span style="color: rgba(0, 0, 0, .87)">导演</span> <br/>
          </span>
          <mu-icon-menu slot="right" icon="more_vert" tooltip="操作">
            <mu-menu-item title="回复" />
            <mu-menu-item title="标记" />
            <mu-menu-item title="删除" />
          </mu-icon-menu>
        </mu-list-item>
        <mu-divider inset/>
        <mu-list-item title="电影名称">
          <mu-avatar src="" slot="leftAvatar"/>
          <span slot="describe">
            <span style="color: rgba(0, 0, 0, .87)">评分</span> <br/>
          </span>
          <mu-icon-menu slot="right" icon="more_vert" tooltip="操作">
            <mu-menu-item title="回复" />
            <mu-menu-item title="标记" />
            <mu-menu-item title="删除" />
          </mu-icon-menu>
        </mu-list-item>
        <mu-divider inset/>
        <mu-list-item title="电影名称">
          <mu-avatar src="" slot="leftAvatar"/>
          <span slot="describe">
            <span style="color: rgba(0, 0, 0, .87)">评分</span><br/>
          </span>
          <mu-icon-menu slot="right" icon="more_vert" tooltip="操作">
            <mu-menu-item title="回复" />
            <mu-menu-item title="标记" />
            <mu-menu-item title="删除" />
          </mu-icon-menu>
        </mu-list-item>
        <mu-divider inset/>
        <mu-list-item title="电影名称">
          <mu-avatar src="" slot="leftAvatar"/>
          <span slot="describe">
            <span style="color: rgba(0, 0, 0, .87)">评分</span><br/>
          </span>
          <mu-icon-menu slot="right" icon="more_vert" tooltip="操作">
            <mu-menu-item title="回复" />
            <mu-menu-item title="标记" />
            <mu-menu-item title="删除" />
          </mu-icon-menu>
        </mu-list-item>
        <mu-divider inset/>
      </mu-list>
    </mobile-tear-sheet>  -->
  </div>
</template>

<script>
  import Vlistview from './listview/listview.vue';
export default {
  data () {
    return {
      cities: ['北京', '上海', '广州', '杭州', '深圳', '香港', '澳门'],
      tabvalue: 'tab1',
      open: false,
      activeTab: 'tab1'
    };
  },
  components: {
    'v-listview': Vlistview
  },
  methods: {
    handleTabChange (val) {
      this.activeTab = val;
      this.tabvalue = val;
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