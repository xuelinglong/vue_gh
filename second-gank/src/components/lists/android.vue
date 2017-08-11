<template>
    <div class="android">
        <v-list :type="'Android'"></v-list>
    </div>
</template>

<script>
    import vList from './list.vue';
    export default {
        name: 'android',
        components: {
            'v-list': vList
        }
    };</script>

<style lang="stylus" rel="stylesheet/stylus">
    .android
        color: #d61f4b
</style>
