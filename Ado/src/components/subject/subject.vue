<template>
    <div class="subject">
        <mt-button icon="back" slot="left" @click="back"></mt-button>
        <mt-button icon="share" slot="right"></mt-button>
        <div class="image"><img :src="movie.images.large"></div>
        
        <div class="info">
            <p class="info-content"><span class="info-title">片名</span><span class="info-text"></span> </p>
            <p class="info-content"><span class="info-title">片名</span><span class="info-text"></span> </p>
            <p class="info-content"><span class="info-title">片名</span><span class="info-text"></span> </p>
            <p class="info-content"><span class="info-title">片名</span><span class="info-text"></span> </p>
            <p class="info-content"><span class="info-title">片名</span><span class="info-text"></span> </p>
            <p class="info-content"><span class="info-title">片名</span><span class="info-text"></span> </p>
            <p class="info-content"><span class="info-title">片名</span><span class="info-text"></span> </p>
            <p class="info-content"><span class="info-title">片名</span><span class="info-text"></span> </p>
            <p class="info-content"><span class="info-title">片名</span><span class="info-text"></span> </p>
            <p class="info-content"><span class="info-title">片名</span><span class="info-text"></span> </p>
        </div>
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
    .image
        width: 100%
        height: 40%
        background: #391505
</style>