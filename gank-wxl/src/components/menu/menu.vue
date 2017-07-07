<template>
    <div class="menu">
         <swiper class="menu-list" :option="swiperOption">
            <swiper-slide v-for="menu in menus" class="menu-item">
                <router-link :to="menu.view">
                    {{ menu.data }}
                </router-link>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
         </swiper>
    </div>
</template>

<script type="text/ecmascript-6">
    import { swiper, swiperSlide } from 'vue-awesome-swiper';
    export default {
        name: 'v-menu',
        components: {
            swiper,
            swiperSlide
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
            & > a
                display: block
                font-size: 14px
                color: #ec9cae
                &.active
                    color: #FFFFFF
</style>