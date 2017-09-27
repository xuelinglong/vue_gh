<template>
    <div style="position: relative">
        <div class="image"><img src="./../../assets/logo.png" @click="back"></div>
    </div>
</template>

<script>
    import router from '../../router/index';
    export default {
        name: 'subject',
        method: {
            back() {
                router.back();
            }
        }
    };</script>

<style lang="stylus" rel="stylesheet/stylus">
    .image
        width: 100%
        height: 40%
        background: #391505
</style>