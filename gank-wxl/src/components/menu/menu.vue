<template>
         <div class="menu-list">
            <slider v-for="menu in menus" class="menu-item" :pages="pages" :sliderinit="sliderinit">
                <v-jump :menu="menu"></v-jump>
            </slider>
         </div>
</template>

<script type="text/ecmascript-6">
    import slider from 'vue-concise-slider';
    import vJump from '../menu-jump/menu-jump.vue';
    export default {
        name: 'v-menu',
        components: {
            slider,
            'v-jump': vJump
        },
        data () {
            return {
                menus: [
                     { view: 'welfare', data: '福利' },
                     { view: 'android', data: '安卓' },
                     { view: 'ios', data: 'IOS' },
                     { view: 'web', data: '前端' },
                     { view: 'rest', data: '休息视频' },
                     { view: 'recommend', data: '瞎推荐' }
                ],
                pages: [
                    {
                        title: '1',
                        style: {
                            height: '40px',
                            background: '#d6204b'
                        }
                    },
                    {
                        title: '2',
                        style: {
                            height: '40px',
                            background: '#d6204b'
                        }
                    },
                    {
                        title: '3',
                        style: {
                            height: '40px',
                            background: '#d6204b'
                        }
                    },
                    {
                        title: '4',
                        style: {
                            height: '40px',
                            background: '#d6204b'
                        }
                    },
                    {
                        title: '5',
                        style: {
                            height: '40px',
                            background: '#d6204b'
                        }
                    },
                    {
                        title: '6',
                        style: {
                            height: '40px',
                            background: '#d6204b',
                            fontsize: '8px'
                        }
                    }
                ],
                sliderinit: {
                    currentPage: 0,
                    thresholdDistance: 30,
                    thresholdTime: 100,
                    loop: true,
                    slidesToScroll: 1
                }
            };
        },
        mounted () {
        }
    };
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .menu-list
        display: flex
        line-height: 40px
        width: auto
        background: #d6204b
        overflow-x: hidden
        .menu-item    
            flex: 1
            text-align: center
            display: hidden
            width: 20%
            height: 100%

</style>