<template>
    <div class="card">
        <v-img :imgUrl="img.url" :imgDesc="img.desc"></v-img>
        <div class="card-bottom">
            <div class="time">{{ img.desc }}</div>
            <div class="author">via.{{ img.who }}</div>
        </div>
    </div>
</template>

<script>
    import vImg from '../lazyloadimg/lazyimg.vue';
    export default {
        name: 'v-card',
        props: ['img'],
        components: {
            'v-img': vImg
        }
    };
</script>

<style>
</style>