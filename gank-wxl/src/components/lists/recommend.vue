<template>
    <div class="recommend">
        <v-list :type="'瞎推荐'"></v-list>
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