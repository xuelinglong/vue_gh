<template>
    <div class="rest">
        <v-list :type="'休息视频'"></v-list>
    </div>
</template>

<script>
    import vList from './list.vue';
    export default {
        name: 'rest',
        components: {
            'v-list': vList
        }
    };</script>

<style lang="stylus" rel="stylesheet/stylus">
    .rest
        color: #d61f4b
</style>
