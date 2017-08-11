<template>
    <div class="header">
        <div class="logo"><img src="../../assets/gank-header.png" @click="showModal"></div>
        <div class="word">干货集中营</div>
        <v-modal v-show="modalShow" :show="modalShow"></v-modal>
    </div>
</template>

<script type="text/ecmascript-6">
    import vModal from '../modal/modal.vue';
    import {mapState} from 'vuex';
    export default {
        name: 'v-header',
        data() {
            return {
                show: false
            };
        },
        computed: {
            ...mapState([
                'modalShow'
            ])
        },
        components: {
            'v-modal': vModal
        },
        methods: {
            showModal() {
                this.$store.commit('UPDATE_MODALSHOW');
            }
        }
    };</script>

<style lang="stylus" rel="stylesheet/stylus">
    .header
        display: flex
        width: 100%
        height: 60px
        background: #d61f4b
        .logo
            flex-wrap: 1
            text-align: center
            img
                max-width: 50px
                max-height: 50px
        .word
            flex-wrap: 3
            text-align: center
            font-size: 1.3rem
            color: #FFFFFF
            padding: 15px 0 0 10px
</style>
