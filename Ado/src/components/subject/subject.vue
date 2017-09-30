<template>
    <div class="subject">
        <div class="image">
            <div class="button">
                <mt-button class="back" icon="back" size="small" @click="back"></mt-button>

                <mt-button class="more" icon="more" size="small"></mt-button>
            </div>
            <img class="poster" :src="movie.images.large">
        </div>
        
        <div class="info">
            <p class="info-content"><span class="info-title">原名</span><span class="info-text">{{movie.original_title}}</span> </p>
            <p class="info-content"><span class="info-title">类型</span><span class="info-text"><span v-for="genre in movie.genres">{{genre}} / </span></span> </p>
            <p class="info-content"><span class="info-title">年代</span><span class="info-text">{{movie.year}}</span> </p>
            <p class="info-content"><span class="info-title">想看人数</span><span class="info-text">{{movie.wish_count}}</span> </p>
            <p class="info-content"><span class="info-title">看过人数</span><span class="info-text">{{movie.collect_count}}</span> </p>
            <p class="info-content"><span class="info-title">评分人数</span><span class="info-text">{{movie.ratings_count}}</span> </p>
            <p class="info-content"><span class="info-title">短评数量</span><span class="info-text">{{movie.comments_count}}</span> </p>
            <p class="info-content"><span class="info-title">影评数量</span><span class="info-text">{{movie.reviews_count}}</span> </p>
        </div>

        <div class="summary">{{movie.summary}}</div>

        <p class="person-type">导演</p>
        <div class="person">
            <div class="person-card" v-for="director in movie.directors" :key="director.id">
                <div class="person-card-item">
                    <div class="per-img"><img :src="director.avatars.small"></div>
                    <div class="per-name">{{director.name}}</div>
                </div>
            </div>
        </div>
        <p></p> </br>

        <p class="person-type">主演</p>
        <div class="person">
            <div class="person-card" v-for="cast in movie.casts" :key="cast.id">
                <div class="person-card-item">
                    <div class="per-img"><img :src="cast.avatars.small"></div>
                    <div class="per-name">{{cast.name}}</div>
                </div>
            </div>
        </div>

        <div class="blank"></div>
    </div>
</template>

<script>
    import router from '../../router/index';
    import { fetchMovieSubject } from './../../vuex/movies/api';
    export default {
        name: 'subject',
        data() {
            return {
                movie: {
                    title: '',
                    rating: {},
                    images: {},
                    countries: [],
                    casts: [],
                    directors: [],
                    aka: []
                }
            };
        },
        created() {
            // 组件创建完后获取数据，
            // 此时 data 已经被 observed 了
            this.fetchPage(this.$route.params.id);
        },
        watch: {
            // 如果路由有变化，会再次执行该方法
            '$route': 'fetchPage'
        },
        methods: {
            back() {
                router.go(-1);
            },
            fetchPage(id) {
                fetchMovieSubject(id).then((res) => {
                    this.movie = res;
                });
            }
        }
    };</script>

<style lang="stylus" rel="stylesheet/stylus">
.subject
    width: 100%
    height: 100%
    background: #f5f5f5
    .image
        width: 100%
        height: 350px
        background: #391505
        .button
            height: 50px
            .back
                float: left
                margin: 15px 
            .more
                float: right
                margin: 15px
        .poster
            width: 50%
            height: 75%
    .info
        width: 100%
        margin: 30px
        text-align: left
        .info-content>span
            display: block
        .info-text
            font-size: 0.9rem
            color: #888;
    .summary
        width: 90%
        padding: 5%
        text-align: left
        background: #EEEEEE
    .person-type
        width: 100%
        margin: 15px 0 -15px 25px
        text-align: left
    .person
        width: 100%
        margin: 15px 2px 0px 10px
        display: flex
        flex-direction: row
        flex-wrap: wrap
        text-align: left      
        .person-card
            width: 160px
            height: 100px
            margin: 10px 5px
            background: #FFFFFF
            .per-img
                width: 75px
                height: 100%
                float: left
            .per-name
                padding: 10px
    .blank
        height: 150px
</style>