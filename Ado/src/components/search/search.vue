<template>
    <div class="search">
        <!-- v-model.trim 过滤用户输入的首尾空格 -->
        <!-- v-model.number 自动将用户的输入值转为 Number 类型 -->
        <!-- 在 Vue 2.0 中，为自定义组件绑定原生事件必须使用 .native 修饰符 -->
        <mt-search v-model.trim="q" :value="text" @keyup.enter.native="search">
            <!-- <mt-cell
                v-for="subject in subjects"
                :title="subject.title"
                :value="subject.id">
            </mt-cell> -->

            <!-- 此位置的搜索结果是在键盘有输入的时候显示 -->
            <!-- <div class="mint-search-list">
                <div class="item" v-for="subject in subjects">
                    <router-link :to="{name: `subject`, params:{id: subject.id}}">
                        <div class="image"><img :src="subject.images.large"></div>
                        <div class="message">
                            <div class="name">
                                <span class="title">{{ subject.title }}</span>
                                <span class="year">{{ subject.year }}</span>
                            </div>
                            <div class="genres">
                                类型：<span v-for="genre in subject.genres">{{ genre.name }}</span>
                            </div>
                            <div class="director">
                                导演：<span v-for="director in subject.directors">{{ director.name }}</span>
                            </div>
                            <div class="cast">
                                主演：<span v-for="cast in subject.casts">{{ cast.name }} / </span>
                            </div>
                        </div>
                    </router-link>
                </div>
                <div class="black"></div>
            </div> -->
        </mt-search>

            <!-- 此位置的搜索结果是在enter之后显示 -->
            <div class="mint-search-list">
                <div class="item" v-for="subject in subjects">
                    <router-link :to="{name: `subject`, params:{id: subject.id}}">
                        <div class="image"><img :src="subject.images.large"></div>
                        <div class="message">
                            <div class="name">
                                <span class="title">{{ subject.title }}</span>
                                <span class="year">{{ subject.year }}</span>
                            </div>
                            <div class="genres">
                                类型：<span v-for="genre in subject.genres">{{ genre.name }}</span>
                            </div>
                            <div class="director">
                                导演：<span v-for="director in subject.directors">{{ director.name }}</span>
                            </div>
                            <div class="cast">
                                主演：<span v-for="cast in subject.casts">{{ cast.name }} / </span>
                            </div>
                        </div>
                    </router-link>
                </div>
                <div class="black"></div>
            </div>

        <!-- <div class="result">
                <div v-for="subject in subjects">{{ subject.title }}</div>
        </div> -->
    </div>
</template>

<script>
    import { mapState } from 'vuex';
    import * as type from './../../vuex/movies/type';
    export default {
        name: 'movieSearch',
        data() {
            return {
                count: 20,
                q: ''
            };
        },
        computed: mapState({
            subjects: state => state.movie.movieQuery.subjects,
            text: state => state.movie.movieQuery.q
        }),
        watch: {
            // 如果路由有变化，会再次执行该方法
            '$route': 'fetchQuery'
        },
        mounted() {
            console.log('mounted.');
            this.fetchQuery();
        },
        methods: {
            search() {
                console.log('q:', this.q);
                if ((`${this.q}`).length === 0) {
                    return;
                }
                this.$router.push({ name: 'search', query: { q: this.q } });
            },
            fetchQuery() {
                if (!this.$route.query.q) { return; }
                if (this.$route.query.q !== this.$store.state.movie.movieQuery.q) {
                    console.log('dispatch...');
                    this.$store.dispatch(type.FETCH_MOVIES_QUERY, { q: this.$route.query.q });
                }
            }
        }
    };</script>

    <style lang="stylus" rel="stylesheet/stylus">
    .mint-search-list
        width: 91%
        float: center
        margin: 90px 0 0 8px
        padding: 0 10px 5px 10px
        font-size: 15px
        line-height: 20px
        background: #f5f5f5
        .item
            width: 100%
            height: 140px
            margin-top: 10px
            background: #FFFFFF
            border: 1px solid #FFFFFF
            & > a
                color: #000000
                text-decoration: none
            .image
                float: left
                width: 30%
                height: 100%
                img
                    width: 100%
                    height: 100%
            .message
                height: 100%
                padding: 0 0 0 33%
                text-align: left
                .name
                    padding-top: 5px
                    .title
                        font-size: 1.2rem
                        font-weight: 800
                    .year
                        font-size: 0.9rem
        .black
            height: 200px
    </style>