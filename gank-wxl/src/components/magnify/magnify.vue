<template>
    <div class="magnify" :class="{'show': show}">
        <div class="clickArea-top"></div>
        <div class="center" @click="falseMagnify">
            <!-- <img src="../../assets/404.png" class="img-big"></img> -->
<!-- 从history/content/day/xx/xx/xx 获取到的src格式为\"http://ww1.sinaimg.cn/large/610dc034ly1fhxe0hfzr0j20u011in1q.jpg\" ，需要使用正则表达式解析 -->
            <!-- <img src="http://ww1.sinaimg.cn/large/610dc034ly1fhxe0hfzr0j20u011in1q.jpg" class="img-big"></img> -->
            <!-- 测试magnifyData <div v-html="data.content" class="img-big"></div> -->
            <div v-html="data.title" class="img-big"></div>
        </div>
        <!-- 仅需要图片的 url 和 desc -->
        <div class="foot">
            <div class="desc">{{ data.publishedAt }}</div>
            <div class="download">
                <img src="../../assets/download.png" class="button">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'v-magnify',
        props: ['show', 'data'],
        methods: {
            falseMagnify() {
                this.$store.commit('UPDATE_MAGNIFYSHOW');
            }
        }
    };
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .magnify
        position: fixed
        width: 100%
        height: 100%
        top: 0
        left: 0
        z-index: 15
        background: rgba(7,17,27,1)
        .clickArea-top
            width: 100%
            height: 20%
        .center
            position: fixed
            width: 100%
            height: 60%
            top: 20%
            left: 0
            .img-big
                max-width: 100%
                min-width: 100%
                max-height: 100%
                min-height: 100%
                vertical-align: middle
                border-radius: 6px
                border: 1px sloid #AAAAAA
                color: #FFFFFF
                background: #d6204b
        .foot
            position: fixed
            width: 100%
            height: auto
            top: 80%
            left: 0
            display: flex
            .desc
                flex: 1
                padding: 25% 50% 0 0
                text-align: center
                font-size: 1.2rem
                color: #FFFFFF
            .download
                flex: 1
                padding-top: 25%
                text-align: center
                color: #FFFFFF
                .button
                    max-width: 30px
                    max-height: 30px
                    vertical-align: middle
</style>