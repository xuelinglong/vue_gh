<template>
    <div class="in_theaters" v-if="tabName === 'in_theaters'">
        <div class="movie-list">
            <div class="movie-item" v-for="movie in movies">
                <div class="img">
                    <img src="../../assets/logo.png">
                </div>

                <div class="describe">
                    <span class="title">名称</span>
                    <span class="rating">评分</span>
                    <span class="director">导演</span>
                    <span class="casts">主演</span>
                    <span class="collect_count">看过人数</span>
                </div>

                <div class="button">
                    <button class="ticket">购票</button>
                </div>
            </div>
        </div>
    </div>

    <div class="coming_soon" v-else-if="tabName === 'coming_soon'">
        <div class="movie-list">
            <div class="movie-item" v-for="movie in movies">
                <div class="img">
                    <img src="../../assets/logo.png">
                </div>

                <div class="describe">
                    <span class="title">名称</span>
                    <span class="director">导演</span>
                    <span class="casts">主演</span>
                    <span class="collect_count">看过人数</span>
                    <span class="blanks"></span>
                </div>

                <div class="button">
                    <button class="ticket">想看</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'listview',
        data () {
            return {
                movies: ['1', '2', '3', '4', '5']
            };
        },
        props: ['tabName']
    };</script>

<style lang="stylus" rel="stylesheet/stylus">
    .in_theaters
        width: 100%
        height: auto
        margin-top: 5px
        // background: pink
        .movie-list
            width: 100%
            height: auto
            .movie-item
                width: 100%
                height: 150px
                border-bottom: 1px solid #aaaaaa
                // background: green
                .img
                    width: 30%;
                    height: 100%
                    float: left
                    // background: green
                    img
                        width: 90px
                        height: 120px
                        margin-top: 25%
                        // background: black
                .describe
                    width: 50%;
                    height: 100%
                    float: left
                    display: flex
                    flex-direction: column
                    // background: purple
                    .title
                        flex: 1
                        height: 20%
                        font-size: 1.2rem
                        text-align: left
                        padding: 5px 1px
                        // background: black
                    .rating
                        flex: 1
                        height: 20%
                        font-size: 0.7rem
                        margin: 5px 5px
                        text-align: left
                        // background: green
                    .director
                        flex: 1
                        height: 20%
                        font-size: 0.7rem
                        margin: 5px 5px
                        text-align: left
                        // background: black
                    .casts
                        flex: 1
                        height: 20%
                        font-size: 0.7rem
                        margin: 5px 5px
                        text-align: left
                        // background: green
                    .collect_count
                        flex: 1
                        height: 20%
                        font-size: 0.7rem
                        margin: 5px 5px
                        text-align: left
                        // background: black
                .button
                    width: 20%;
                    height: 100%
                    float: left
                    // background: blue
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
        // background: pink
        .movie-list
            width: 100%
            height: auto
            .movie-item
                width: 100%
                height: 150px
                border-bottom: 1px solid #aaaaaa
                // background: green
                .img
                    width: 30%;
                    height: 100%
                    float: left
                    // background: green
                    img
                        width: 90px
                        height: 120px
                        margin-top: 25%
                        // background: black
                .describe
                    width: 50%;
                    height: 100%
                    float: left
                    display: flex
                    flex-direction: column
                    // background: purple
                    .title
                        flex: 1
                        height: 25%
                        font-size: 1.2rem
                        text-align: left
                        padding: 5px 1px
                        // background: black
                    .director
                        flex: 1
                        height: 25%
                        font-size: 0.7rem
                        margin: 5px 5px
                        text-align: left
                        // background: black
                    .casts
                        flex: 1
                        height: 25%
                        font-size: 0.7rem
                        margin: 5px 5px
                        text-align: left
                        // background: green
                    .collect_count
                        flex: 1
                        height: 25%
                        font-size: 0.7rem
                        margin: 5px 5px
                        text-align: left
                        // background: black
                    .blanks
                        flex: 1
                        height: 25%
                        margin: 5px 5px
                        // background: black
                .button
                    width: 20%;
                    height: 100%
                    float: left
                    // background: blue
                    .ticket
                        width: 50px
                        height: 30px
                        margin-top: 55px
                        border-radius: 6px
                        color: orange
                        border: 1px solid orange
                        background: #ffffff
</style>