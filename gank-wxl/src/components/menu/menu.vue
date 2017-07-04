<template>
    <div class="menu">
         <div class="menu-list">
            <div v-for="menu in menus" class="menu-item">
                <router-link :to="menu.view">
                    {{ menu.data }}
                </router-link>
            </div>
         </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        name: 'v-menu',
        data () {
            return {
                menus: [
                     { view: 'welfare', data: '福利' },
                     { view: 'android', data: '安卓' },
                     { view: 'ios', data: 'IOS' },
                     { view: 'web', data: '前端' },
                     { view: 'rest', data: '休息视频' }
                ]
            };
        }
    };
</script>

<style lang="stylus" rel="stylesheet/stylus">
.menu
    width: 100%
    height: 40px
    background: #d6204b
    .menu-list
        display: flex
        line-height: 40px
        .menu-item    
            flex: 1
            text-align: center
            & > a
                display: block
                font-size: 14px
                &.active
                    color: #FFFFFF
</style>