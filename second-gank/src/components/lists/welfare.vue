<template>
    <div class="welfare">
        <v-list :type="'福利'"></v-list>
    </div>
</template>

<script>
    import vList from './list.vue';
    export default {
        name: 'welfare',
        components: {
            'v-list': vList
        }
    };</script>

<style lang="stylus" rel="stylesheet/stylus">
    .welfare
        color: #d61f4b
</style>
