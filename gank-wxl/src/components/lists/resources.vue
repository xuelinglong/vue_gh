<template>
    <div class="resources">
        <v-list :type="'拓展资源'"></v-list>
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