<template>
    <div class="list">
        <div class="article-item" v-for="result in results">
            <div class="title">
                <a :href="result.url" target="view_window">
                    {{ result.desc }}
                    <p class="author">{{ result.who }}</p>
                </a>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        name: 'v-list',
        data () {
            return {
                results: []
            };
        },
        mounted () {
            this.$http.get(`http://gank.io/api/data/iOS/20/2`)
            .then(response => { this.results = response.body.results; });
        }
    };
</script>

<style lang="stylus" rel="stylesheet/stylus">
.list
    display: flex
    flex-direction: column
    width: 100%
    height: 100%
    .article-item
        flex: 1
        line-height: 60px
        taxt-align: left           
        border-bottom: 1px solid #AAAAAA
        .title
            line-height: 40px
            margin-left: 12px
            color: #d94064
            & > a
                display: block
                text-decoration: none;
                color: #d94064
                .author
                    line-height: 20px
                    font-size: 8px
                    color: #AAAAAA
                    text-align: right
                    margin-right: 12px       
</style>