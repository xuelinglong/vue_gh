<template>
    <div class="list" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
        <div class="article-item" v-for="data in datas">
            <div class="title">
                <a :href="data.url" target="view_window">
                    {{ data.desc }}
                    <p class="author">{{ data.who }}</p>
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
                datas: [],
                results: [],
                page: 1,
                busy: false
            };
        },
        props: ['type'],
        methods: {
            mounted () {
                this.$http.get(`http://gank.io/api/data/${this.type}/10/${this.page}`)
                .then(response => {
                    this.results = response.body.results;
                    this.datas = this.datas.concat(this.results);
                    this.busy = false;
                });
            },
            loadMore () {
                this.busy = true;
                this.mounted();
                this.page++;
            }
        }
    };
</script>

<style lang="stylus" rel="stylesheet/stylus">
.list
    display: flex
    flex-direction: column
    width: 100%
    height: 100%
    background: #f0f0f0
    .article-item
        flex: 1
        width: 100%
        line-height: 60px
        taxt-align: left           
        border-bottom: 1px solid #AAAAAA
        .title
            line-height: 40px
            margin-left: 12px
            color: #d94064
            & > a
                display: block
                text-decoration: none
                color: #d94064
                overflow: hidden
                text-overflow: ellipsis
                white-space: nowrap
                .author
                    line-height: 20px
                    font-size: 8px
                    color: #AAAAAA
                    text-align: right
                    margin-right: 12px       
</style>