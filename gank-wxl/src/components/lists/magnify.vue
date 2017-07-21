<template>
    <div class="magnify" :class="{'show': show}">
        <div class="clickArea-top"></div>
        <div class="center" @click="falseMagnify">
            <img :src="imgUrl" class="img-big"></img>
        </div>
        <div class="foot">
            <div class="desc">{{ imgDesc }}</div>
            <div class="download">
                <img src="../../assets/download.png" class="button">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'v-magnify',
        props: ['imgDesc', 'imgUrl', 'show'],
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
                max-height: 100%
                vertical-align: middle
                border-radius: 6px
                border: 1px sloid #AAAAAA
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