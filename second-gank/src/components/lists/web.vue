<template>
    <div class="web">
        <v-list :type="'前端'"></v-list>
    </div>
</template>

<script>
    import vList from './list.vue';
    export default {
        name: 'web',
        components: {
            'v-list': vList
        }
    };</script>

<style lang="stylus" rel="stylesheet/stylus">
    .web
        color: #d61f4b
</style>
