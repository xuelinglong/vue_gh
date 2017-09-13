<template>
    <div class="in_theaters" v-if="tabName === 'in_theaters'">
        in_theaters
    </div>

    <div class="coming_soon" v-else-if="tabName === 'coming_soon'">
        coming_soon
    </div>
</template>

<script>
    export default {
        name: 'listview',
        props: ['tabName']
    };</script>

<style lang="stylus" rel="stylesheet/stylus">
    .in_theaters
        width: 100%
        height: auto
        margin-top: 5px
        background: pink

    .coming_soon
        width: 100%
        height: auto
        margin-top: 5px
        background: pink
</style>