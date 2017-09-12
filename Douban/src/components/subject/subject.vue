<template>
    <div class="movieSubject">
        <!-- <mu-paper class="demo-paper" :zDepth="1" /> -->
        <div class="img-box">
            <div class="button-box">
            <mu-icon-button class="backButton" icon="arrow_back" slot="left" @click="back" />        
            <mu-icon-button class="shareButton" icon="share" slot="right" />
            </div>
            <img class="image" :src="movie.images.large">       
        </div>

        <div class="center">
            <div class="introduce">
                <div class="title">{{ movie.title }}</div>
                <div class="message">
                    <span>{{ movie.year}} / {{ movie.genres }}</span> </br>
                    <span>原名：{{ movie.original_title}}</span> </br>
                </div>
            </div>
            <div class="rating">
                <div class="card">
                    <span class="smallfont">豆瓣评分</span> </br>
                    <span class="bigfont">{{ movie.rating.average }}</span> </br>
                    <span class="smallfont">星星</span> </br>
                    <span class="smallfont">{{ movie.ratings_count }}人</span> </br>
                </div>
            </div>
        </div>

        <div class="buy">
            <mu-icon-button class="lefticon" icon="chrome_reader_mode" slot="left" />
            <span class="lefttext">选座购票</span>
            <span class="righttext">￥17 起</span>
            <mu-icon-button class="righticon" icon="chevron_right" slot="right" />
        </div>

        <div class="summary">
            <span class="summary-title">简介</span> </br>
            <!-- <div style="profile-note">{{ movie.summary }}</div> </br> -->
            {{ movie.summary }}
        </div>

        <div class="stars">
            <span class="stars-title">影人</span> </br>
            <div v-for="star in movie.casts">
                <div class="star-img">
                    <img class="star-image" :src="star.avatars.large">
                    {{ star.name }}
                </div>   
            </div>       
        </div>

        <div class="comment">
            <span class="comment-title">评论</span> </br>
        </div>
    </div>
</template>

<script>
    import router from '../../router/index';
    import { fetchMovieSubject } from './../../axios/movies/api';
    export default {
        name: 'movieSubject',
        data() {
            return {
                movie: {
                    title: '',
                    year: '',
                    genres: [],
                    collect_count: '',
                    images: {},
                    rating: {
                        average: 0
                    },
                    summary: ''
                }
            };
        },
        watch: {
            $route(to) {
                this.setPage(to.params.id);
            }
        },
        mounted() {
            this.fetchMess(this.$route.params.id);
        },
        methods: {
            back() {
                router.go(-1);
            },
            fetchMess(id) {
                fetchMovieSubject(id).then((res) => {
                    this.movie = res;
                });
            }
        }
    };</script>

<style lang="less">
    .movieSubject{
        margin-top: -60px;
    }
    .img-box{
        width: 100%;
        height: 400px;
        background: #3a1606;
    }
    .image{
        width: 50%;
        height: 70%;
    }
    .button-box{
        width: 100%;
        height: 60px;
        display: flex;
        color: #FFFFFF;
    }
    .backButton{
        flex: 1;
        align: left;
        margin-left: -30%
    }
    .shareButton{
        flex: 1;
        align: right;
        margin-right: -30%
    }
    .center{
        width: 100%;
        height: 20%;
        display: flex;
        background: #faf6f3;
        border-bottom: 1px solid #aaaaaa
    }
    .introduce{
        width: 65%;
        height: 100%;
        align: left;
    }
    .title{
        width: 100%;
        height: 50%;
        color: #000000;
        font-size: 1.5rem;
        padding: 10px 0 0 0;
    }
    .message{
        width: 100%;
        height: 50%;
        color: #000;
    }
    .rating{
        width: 35%;
        height: 100%;
        float: right;
    }
    .card{
        width: 90px;
        height: 90px;
        background: #FFFFFF;
        margin: 9px 20px;
        line-height: 20px;
        border: 1PX solid #faf6f3;
    }
    .smallfont{
        font-size: 0.7rem;
    }
    .bigfont{
        font-size: 1.4rem;
        color: #585858;
    }
    .buy{
        width: 100%;
        height: 60px;
        display: flex;
        border-bottom: 1px solid #aaaaaa;
    }
    .lefticon{
        flex: 1;
        align: left;
    }
    .righticon{
        flex: 1;
        align: right;
    }
    .lefttext{
        flex: 4;
        align: left;
        font-size: 1.2rem;
        padding: 10px 60px 0 0;
    }
    .righttext{
        flex: 4;
        align: right;
        font-size: 1.2rem;
        color: red;
        padding: 10px 0 0 60px;
    }
    .summary{
        background: #faf6f3;
        padding: 30px 20px;
        text-align: left;
    }
    .summary-title{
        font-size: 1.3rem;
    }
    .stars{
        width: 100%;
        height: 300px;
        text-align: left;
        padding: 20px 20px;
    }
    .stars-title{
        font-size: 1.3rem;   
    }
    .star-img{
        max-width: 80px;
        max-height: 90px;
        margin-right: 3px;
        float: left;
    }
    .star-name{
        width: 100%;
        height: 50px;
        background: green;
    }
    .comment{
        height: 300px;
        padding: 20px 20px;
        text-align: left;
    }
    .comment-title{
        font-size: 1.3rem;   
    }
</style>