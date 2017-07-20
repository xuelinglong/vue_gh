<template>
    <div class="header" :class="{'show': modalShow}">
        <img class="img" src="../../assets/gank-header.png" @click="showModal"/>
        <div class="name">干货集中营</div>
        <v-modal v-show="modalShow" :show="modalShow"></v-modal>
    </div>
</template>

<script type="text/ecmascript-6">
    import vModal from '../modal/modal.vue';
    import { mapState } from 'vuex';
    export default {
        name: 'header',
        data() {
            return {
                show: false
            };
        },
        components: {
            'v-modal': vModal
        },
        computed: {
            ...mapState([
                'modalShow'
            ])
        },
        methods: {
            showModal() {
                // 以相应的 type 调用 store.commit 方法，唤醒一个 mutation handler
                this.$store.commit('UPDATE_MODALSHOW');
            }
        }
    };
</script>

<style lang="stylus" rel="stylesheet/stylus">
.header
    display: flex
    background: #d6204b
    font-size: 18px
    line-height: 60px
    color: #FFFFFF
    .img
        width: 40px
        height: 40px
        margin-top:12px
        margin-left: 14px   
    .name
        height: 57px
        margin-top: 3px
        margin-left: 10px
</style>