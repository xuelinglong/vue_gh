<template>
  <div class="nav">
    <mu-appbar title="郑州">
      <mu-text-field icon="search" class="appbar-search-field"  slot="right" hintText="请输入搜索内容"/>
    </mu-appbar>
    <mu-tabs :value="activeTab" @change="handleTabChange" class="tab">
      <mu-tab value="tab1" title="正在热映"/>
      <mu-tab value="tab2" title="即将上映"/>
    </mu-tabs>
    <mobile-tear-sheet>
      <mu-list>
        <mu-list-item title="电影名称">
          <mu-avatar icon="android" slot="leftAvatar"/>
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
    </mobile-tear-sheet>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeTab: 'tab1'
    };
  },
  methods: {
    handleTabChange (val) {
      this.activeTab = val;
    }
  }
};</script>

<style lang="less">
.nav{
  margin: -60px 0;
  .appbar-search-field{
  color: #FFF;
  margin-bottom: 0;
  &.focus-state {
    color: #FFF;
  }
  .mu-text-field-hint {
    color: fade(#FFF, 54%);
  }
  .mu-text-field-input {
    color: #FFF;
  }
  .mu-text-field-focus-line {
    background-color: #FFF;
  }
}
}
</style>