<template>
    <div class="android">
        <v-list :type="'Android'"></v-list>
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
</style>