<template>
    <div class="list">
        <div class="article-item">
            <div class="title">
                <a href="SexyJson\u8d85\u6027\u611fJson\u89e3\u6790\u5f00\u6e90\u5e93Swift\u7248" target="view_window">
                    {{ article }}
                    <p class="author">{{ author }}</p>
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
                article: 'I am ios!',
                author: 'ceshi'
            };
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