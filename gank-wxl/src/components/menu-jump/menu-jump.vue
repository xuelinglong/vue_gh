<template>
    <router-link :to="menu.view">
        {{ menu.data }}
    </router-link>
</template>

<script>
    export default {
        name: 'v-jump',
        props: ['menu']
    };
</script>

<style lang="stylus" rel="stylesheet/stylus">
    & > a
        display: block
        font-size: 14px
        color: #ec9cae
        &.active
            color: #FFFFFF
</style>