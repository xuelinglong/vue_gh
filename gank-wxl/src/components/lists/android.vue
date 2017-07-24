<template>
    <div class="android">
        <v-list :type="'Android'"></v-list>
        <!-- <div class="footer">上拉加载更多...</div> -->
    </div>
</template>

<script type="text/ecmascript-6">
    import vList from './list.vue';
    export default {
        components: {
            vList
        }
    };
</script>

<style lang="stylus" rel="stylesheet/stylus">
    @import './comm.styl'

    // .footer
    //     flex: 1
    //     width: 100%
    //     height: 60px
    //     color: #d94064
    //     margin-left: 40%
</style>