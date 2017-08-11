<template>
    <div class="ios">
        <v-list :type="'iOS'"></v-list>
    </div>
</template>

<script>
    import vList from './list.vue';
    export default {
        name: 'ios',
        components: {
            'v-list': vList
        }
    };</script>

<style lang="stylus" rel="stylesheet/stylus">
    .ios
        color: #d61f4b
</style>
