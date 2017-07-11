<template>
    <div class="menu">
         <swiper class="menu-list" :options="swiperOption">
            <swiper-slide v-for="menu in menus" class="menu-item">
                <v-jump :menu="menu"></v-jump>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
         </swiper>
    </div>
</template>

<script type="text/ecmascript-6">
    import { swiper, swiperSlide } from 'vue-awesome-swiper';
    import vJump from '../menu-jump/menu-jump.vue';
    export default {
        name: 'v-menu',
        components: {
            swiper,
            swiperSlide,
            'v-jump': vJump
        },
        data () {
            return {
                menus: [
                     { view: 'welfare', data: '福利' },
                     { view: 'android', data: '安卓' },
                     { view: 'ios', data: 'IOS' },
                     { view: 'web', data: '前端' },
                     { view: 'rest', data: '休息视频' }
                ],
                swiperOption: {
                    pagination: '.swiper-pagination',
                    paginationClickable: true
                }
            };
        },
        mounted () {
        }
    };
</script>

<style lang="stylus" rel="stylesheet/stylus">
.menu
    width: 100%
    height: 40px
    background: #d6204b
    overflow: hidden
    .menu-list
        display: flex
        line-height: 40px
        .menu-item    
            flex: 1
            text-align: center
        .swiper-pagination
            top: 0
            height: 40px
            display: flex
            justify-content: space-around
            width: 100%
</style>