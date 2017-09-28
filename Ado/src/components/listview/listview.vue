<template>
    <div class="in_theaters" v-if="tabName === 'in_theaters'">
        <div class="movie-list">
            <div class="movie-item" v-for="subject in subjects">
                <router-link :to="{name: `subject`, params:{id: subject.id}}">
                <div class="img">
                    <img :src="subject.images.large">
                </div>

                <div class="describe">
                    <span class="title">{{subject.title}}</span>
                    <span class="rating">评分：{{ subject.rating.average }}</span>
                    <span class="director">导演：<span v-for="director in subject.directors"> {{ director.name }} /</span> </span>
                    <span class="casts">主演：<span v-for="cast in subject.casts"> {{ cast.name }} /</span> </span>
                    <span class="collect_count">{{ subject.collect_count }}人看过</span>
                </div>

                <div class="button">
                    <button class="ticket">购票</button>
                </div>
                </router-link>
            </div>
        </div>
    </div>

    <div class="coming_soon" v-else-if="tabName === 'coming_soon'">
        <div class="movie-list">
            <div class="movie-item" v-for="subject in subjects">
                <router-link :to="{name: `subject`, params:{id: subject.id}}">
                <div class="img">
                    <img :src="subject.images.large">
                </div>

                <div class="describe">
                    <span class="title">{{ subject.title }}</span>
                    <span class="director">导演：<span v-for="director in subject.directors"> {{ director.name }} </span> </span>
                    <span class="casts">主演：<span v-for="cast in subject.casts"> {{ cast.name }} /</span> </span>
                    <span class="blanks"></span>
                </div>

                <div class="button">
                    <button class="ticket">想看</button>
                </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex';
    import * as type from './../../vuex/movies/type';
    // import gainMovies from './../../vuex/axios';
    export default {
        name: 'listview',
        data() {
            return {
                movies: ['1', '2', '3', '4', '5']
            };
        },
        props: ['tabName'],
        computed: mapState({
            subjects(state) {
                return state.movie.movies[this.tabName].subjects;
            }
        }),
        mounted() {
            this.getMovie();
        },
        beforeUpdate() {
            this.getMovie();
        },
        methods: {
            getMovie() {
                if (
                    !(this.$store.state.movie.movies[this.tabName].subjects &&
                        this.$store.state.movie.movies[this.tabName].subjects.length > 0)
                    ) {
                        // 以对象方式分发Actions
                        this.$store.dispatch(type.FETCH_MOVIES, { type: this.tabName });
                    }
            }

        }
    };</script>

<style lang="stylus" rel="stylesheet/stylus">
    .in_theaters
        width: 100%
        height: auto
        margin-top: 5px
        .movie-list
            width: 100%
            height: auto
            .movie-item
                width: 100%
                height: 150px
                border-bottom: 1px solid #aaaaaa
                .img
                    width: 30%;
                    height: 100%
                    float: left
                    img
                        width: 90px
                        height: 120px
                        margin-top: 25%
                .describe
                    width: 50%;
                    height: 100%
                    float: left
                    display: flex
                    flex-direction: column
                    color: #AAAAAA
                    .title
                        flex: 1
                        height: 23%
                        font-size: 1.2rem
                        text-align: left
                        padding: 5px 1px
                        color: #000000
                    .rating
                        flex: 1
                        height: 10%
                        font-size: 0.7rem
                        margin: 5px 5px
                        text-align: left
                    .director
                        flex: 1
                        height: auto
                        font-size: 0.7rem
                        margin: 5px 5px
                        text-align: left
                    .casts
                        flex: 1
                        height: auto
                        font-size: 0.7rem
                        margin: 5px 5px
                        text-align: left
                    .collect_count
                        flex: 1
                        height: auto
                        font-size: 0.7rem
                        margin: 5px 5px
                        text-align: left
                .button
                    width: 20%;
                    height: 100%
                    float: left
                    .ticket
                        width: 50px
                        height: 30px
                        margin-top: 55px
                        border-radius: 6px
                        color: #fb3a4d
                        border: 1px solid #fb3a4d
                        background: #ffffff

    .coming_soon
        width: 100%
        height: auto
        margin-top: 5px
        .movie-list
            width: 100%
            height: auto
            .movie-item
                width: 100%
                height: 150px
                border-bottom: 1px solid #aaaaaa
                .img
                    width: 30%;
                    height: 100%
                    float: left
                    img
                        width: 90px
                        height: 120px
                        margin-top: 25%
                .describe
                    width: 50%;
                    height: 100%
                    float: left
                    display: flex
                    flex-direction: column
                    color: #AAAAAA
                    .title
                        flex: 1
                        height: 25%
                        font-size: 1.2rem
                        text-align: left
                        padding: 5px 1px
                        color: #000000
                    .director
                        flex: 1
                        height: auto
                        font-size: 0.7rem
                        margin: 5px 5px
                        text-align: left
                    .casts
                        flex: 1
                        height: auto
                        font-size: 0.7rem
                        margin: 5px 5px
                        text-align: left
                    .blanks
                        flex: 1
                        height: auto
                        margin: 5px 5px
                .button
                    width: 20%;
                    height: 100%
                    float: left
                    .ticket
                        width: 50px
                        height: 30px
                        margin-top: 55px
                        border-radius: 6px
                        color: orange
                        border: 1px solid orange
                        background: #ffffff
</style>