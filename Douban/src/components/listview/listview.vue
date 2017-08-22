<template>
    <div class="list-1" v-if="tabvalue === `tab1`">   <!-- 正在热映listview : tab1 -->
        <!-- <mu-list>
            <mu-list-item title="电影名称">
            <mu-avatar icon="android" slot="leftAvatar"/>
            <span slot="describe">
                <span style="color: rgba(0, 0, 0, .87)">评分</span> <br/>
                <span style="color: rgba(0, 0, 0, .87)">导演</span> <br/>
            </span>
            <mu-icon-button slot="right" icon="share" />
            </mu-list-item>
            <mu-divider inset/>
        </mu-list> -->
        <mu-list>
            <mu-list-item title="">
                <mu-avatar slot="leftAvatar"><img src="../../assets/person.jpg"></mu-avatar>
                <mu-list style="margin: -20px 0 -15px 0">
                    <span>电影名称</span> <br/>
                    <span>评分</span> <br/>
                    <span>导演</span> <br/>
                    <span>主演</span> <br/>
                    <span>统计人数</span>
                </mu-list>
                <mu-icon value="share" slot="right"/>
            </mu-list-item>
            <mu-divider inset/>
        </mu-list>
    </div>


    <div class="list-2" v-else-if="tabvalue === `tab2`">   <!-- 即将上映listview : tab2 -->
        <mu-tabs :value="Tab" @change="tabChange" style="background: #babfb8">
            <mu-tab value="tab1" title="全部"/>
            <mu-tab value="tab2" title="8月"/>
            <mu-tab value="tab3" title="9月"/>
            <mu-tab value="tab4" title="10月"/>
            <mu-tab value="tab5" title="时间"/>
            <mu-tab value="tab6" title="热度"/>
        </mu-tabs>
        <div>     <!-- 下方listview -->
            <span>当前子菜单：{{ month }}</span>
            <div class="date">8月25日，星期五</div>
            <mu-list>
                <mu-list-item title="">
                    <mu-avatar slot="leftAvatar"><img src="../../assets/person.jpg"></mu-avatar>
                    <mu-list style="margin: -20px 0 -15px 0">
                        <span>电影名称</span> <br/>
                        <span>导演</span> <br/>
                        <span>主演</span> <br/>
                        <span>统计人数</span>
                    </mu-list>
                    <mu-icon value="share" slot="right"/>
                </mu-list-item>
                <mu-divider inset/>
            </mu-list>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'listview',
        data () {
            return {
                Tab: 'tab1',
                month: 'tab1'
            };
        },
        props: ['tabvalue'],
        methods: {
            tabChange (val) {
                this.Tab = val;
                this.month = val;
            }
        }
    };</script>

<style lang="less">
    .date{
        width: 100%;
        height: 40px;
        background: #f7f7f7;
        padding: 10px 220px 0 0;
    }
</style>