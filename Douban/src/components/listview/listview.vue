<template>
    <div class="list-1" v-if="tabName === `in_theaters`">   <!-- 正在热映listview : tab1 -->
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
                <!-- <mu-avatar slot="leftAvatar"><img src="../../assets/person.jpg"></mu-avatar> -->
                <mu-paper slot="left">
                    <div class='paper-img'>
                        <img src="../../assets/person.jpg">
                    </div>
                </mu-paper>
                <mu-list style="margin: -20px 0 -15px 0">
                    <span>电影名称</span> <br/>
                    <span>评分</span> <br/>
                    <span>导演</span> <br/>
                    <span>主演</span> <br/>
                    <span>统计人数</span>
                </mu-list>
                <mu-badge content="想看" color="#e8ce9b" style="margin-top: 40px" slot="right"/>
            </mu-list-item>
            <mu-divider inset/>
        </mu-list>
    </div>

    <div class="list-2" v-else-if="tabName === `coming_soon`">   <!-- 即将上映listview : tab2 -->
        <mu-tabs :value="Tab" @change="tabChange" style="background: #babfb8">
            <mu-tab value="全部" title="全部"/>
            <mu-tab value="8月" title="8月"/>
            <mu-tab value="9月" title="9月"/>
            <mu-tab value="10月" title="10月"/>
            <mu-tab value="时间" title="时间"/>
            <mu-tab value="热度" title="热度"/>
        </mu-tabs>
        <div>     <!-- 下方listview -->
            <span :month="Tab">当前子菜单：{{ month }}</span>
            <div class="date">8月25日，星期五</div>
            <mu-list>
                <mu-list-item title="">
                    <mu-paper slot="left">
                        <div class='paper-img'>
                            <img src="../../assets/person.jpg">
                        </div>
                    </mu-paper>
                    <mu-list style="margin: -20px 0 -15px 0">
                        <span>0</span> <br/>
                        <span>导演</span> <br/>
                        <span>主演</span> <br/>
                        <span>统计人数</span> <br/>
                        <span>&nbsp</span>
                    </mu-list>
                    <mu-badge content="想看" style="margin-top: 40px" color="#e8ce9b" slot="right"/>
                </mu-list-item>
                <mu-divider inset/>
            </mu-list>
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex';
    // import axios from 'axios';
    import * as type from './../../axios/movies/type';

    export default {
        name: 'listview',
        data() {
            return {
                Tab: '全部',
                month: '',
                datas: []
            };
        },
        props: ['tabName'],
        computed: mapState({
            subjects(state) {
                return state.movie.movies[this.tabName].subjects;
            }
        }),
        methods: {
            tabChange(val) {
                this.Tab = val;
                this.month = val;
            },
            // mounted() {
            //     axios.get(`/movie/in_theaters?city=郑州`)
            //         .then((response) => {
            //             this.datas = response.data.subjects;
            //         })
            //         .catch(function (error) {
            //             console.log(error);
            //         });
            //     axios({
            //         method: 'get',
            //         url: '/movie/in_theaters?city=郑州',
            //         data: {
            //             subjects
            //         }
            //     });
            // },
            mounted() {
                console.log(`tabName: ${this.activeTab}`);
                this.fetchData();
            },
            fetchData() {
                // doing
                if (
                    !(this.$store.state.movie.movies[this.tabName].subjects &&
                        this.$store.state.movie.movies[this.tabName].subjects.length > 0)
                    ) {
                    this.$store.dispatch(type.FETCH_MOVIES, { type: this.tabName });
                }
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
    .paper-img{
        width: 80px;
    }
    img{
        width: 80px;
        height: 100px;
        margin-top: 55px;
        overflow: hidden;
    }
</style>