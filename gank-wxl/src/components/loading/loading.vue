<template>
    <div class="loading" v-show="show" :class="{ 'show': show }">
        <div></div>
    </div>
</template>

<script>
    export default {
        name: 'v-loading',
        props: ['show']
    };
</script>

<style>
</style>