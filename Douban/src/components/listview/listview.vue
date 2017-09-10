<template>
    <div class="list-1" v-if="tabName === `in_theaters`" style="margin-top: 5px">   <!-- 正在热映listview : tab1 -->
        <mu-list v-for="subject in subjects" :key="subject.id">
            <router-link to="/subject">
            <mu-list-item title="">
                <!-- <mu-avatar slot="leftAvatar"><img src="../../assets/person.jpg"></mu-avatar> -->
                <mu-paper slot="left">
                    <div class='paper-img'>
                        <img :src="subject.images.large">
                    </div>
                </mu-paper>
                <mu-list style="margin: -20px 0 -15px 0">
                    <span>{{ subject.title }}</span> <br/>
                    <span>评分：{{ subject.rating.average }}</span> <br/>
                    <span>导演：{{ subject.directors.name }}</span> <br/>
                    <span>主演： {{ subject.box }}</span> <br/>
                    <span>{{ subject.collect_count}}人看过</span>
                </mu-list>
                <mu-badge content="购票" color="#e8ce9b" style="margin-top: 40px" slot="right"/>
            </mu-list-item>
            </router-link>
            <mu-divider inset/>
        </mu-list>
    </div>

    <div class="list-2" v-else-if="tabName === `coming_soon`">   <!-- 即将上映listview : tab2 -->
        <mu-tabs :value="menu" @change="handleMenuChange" style="background: #babfb8">
            <mu-tab value="全部" title="全部"/>
            <mu-tab value="8月" title="8月"/>
            <mu-tab value="9月" title="9月"/>
            <mu-tab value="10月" title="10月"/>
            <mu-tab value="时间" title="时间"/>
            <mu-tab value="热度" title="热度"/>
        </mu-tabs>
        <div>     <!-- 下方listview -->
            <!-- <span>当前子菜单：{{ menu }}</span> -->
            <div class="date">8月25日，星期五</div>
            <mu-list v-for="subject in subjects" style="margin-top: 5px">
                <router-link to="/subject">
                <mu-list-item title="">
                    <mu-paper slot="left">
                        <div class='paper-img'>
                            <img :src="subject.images.large">
                        </div>
                    </mu-paper>
                    <mu-list style="margin: -20px 0 -15px 0">
                        <span>{{ subject.title }}</span> <br/>
                        <span>导演：{{ subject.directors.name }}</span> <br/>
                        <span>主演：{{ subject.directors.name }}</span> <br/>
                        <span>{{ subject.collect_count}}人想看</span> <br/>
                        <span>&nbsp</span>
                    </mu-list>
                    <mu-badge content="想看" style="margin-top: 40px" color="#e8ce9b" slot="right"/>
                </mu-list-item>
                </router-link>
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
                menu: '全部'
            };
        },
        props: ['tabName'],
        computed: mapState({
            // menu: state => state.movie.menu,
            subjects(state) {
                return state.movie.movies[this.tabName].subjects;
            }
        }),
        mounted() {
            this.fetchData();
        },
        beforeUpdate() {
            this.fetchData();
        },
        methods: {
            handleMenuChange(val) {
                // this.$store.dispatch(type.CHANGE_MOVIES_MENU, val);
                this.menu = val;
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
        width: 100px;
        height: 150px;
        background: green;
    }
    img{
        width: 100px;
        height: 140px;
        margin-top: 15px;
        overflow: hidden;
    }
</style>