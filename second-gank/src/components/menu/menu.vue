<template>
    <div class="menu">
        <div class="menu-list">
            <div class="menu-item" v-for="menu in menus">
                <router-link :to="menu">{{ menu }}</router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'v-menu',
        data () {
            return {
                menus: {
                    'welfare': '福利',
                    'android': 'Android',
                    'ios': 'IOS',
                    'web': '前端',
                    'rest': '休息视频'
                }
            };
        }
    };</script>

<style lang="stylus" rel="stylesheet/stylus">
    .menu
        display: flex
        width: 100%
        height: 40px
        background: #d61f4b
        .menu-list
            display: flex
            width: 100%
            height: 100%
            .menu-item
                flex: 1
                text-align: center
                font-size: 0.9rem
                color: #FFFFFF
                padding-top: 10px
                & > a
                    display: block
                    color: #FFFFFF
                    text-decoration: none
</style>
