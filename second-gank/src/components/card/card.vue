<template>
    <div class="card">
        <v-img :imgUrl="data.url"></v-img>
        <div class="card-bottom">
            <div class="time">{{ data.desc }}</div>
            <div class="author">via.{{ data.who }}</div>
        </div>
    </div>
</template>

<script>
    import vImg from '../lazyloadimg/lazyimg.vue';
    export default {
        name: 'v-card',
        components: {
            'v-img': vImg
        },
        props: ['data']
    };</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>