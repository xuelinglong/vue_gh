<template>
    <div class="article" :class="{'show': show}">
        <div class="bannerr">
            <img src="../../assets/back.png" class="img" @click="falseArticle">
            <span class="title"></span>
            <img src="../../assets/share.png" class="img">
        </div>
        <div class="center">
            <a :href="articelUrl"></a>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'v-article',
        props: ['articelUrl', 'show'],
        methods: {
            falseArticle() {
                this.$store.commit('UPDATE_ARTICLESHOW');
            }
        }
    };
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .article
        position: fixed
        left: 0
        top: 0
        z-index: 20
        width: 100%
        height: auto
        background: rgba(0,0,0,0)
        .banner
            display: flex
            width: 100%
            height: 60px
            .img
                flex-grow: 1
                text-align: center
                width: 50px
                height: 50px
                vertical-align: middle
            .title
                flex-grow: 4
                text-align: center
                overflow: hidden
                text-overflow: ellipsis
                white-space: nowrap
</style>