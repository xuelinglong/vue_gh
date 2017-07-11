<template>
    <div class="header">
        <img class="img" src="../../assets/gank-header.png"  @click="showModal" />
        <div class="name">干货集中营</div>
        <div class="modal" v-show="modalShow">
            <div class="banner">更改主题</div>
            <div class="choose-color">
                <div class="main-color">红</div>
                <div class="main-color">橙</div>
                <div class="main-color">黄</div>
                <div class="main-color">绿</div>
                <div class="main-color">青</div>
                <div class="main-color">蓝</div>
                <div class="main-color">紫</div>
                <div class="main-color">黑</div>
            </div>
            <div class="select">
                <div class="selected" @click="falseModal">取消</div>
                <div class="selected">确定</div>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import vModal from '../modal/modal.vue';
    export default {
        name: 'header',
        data () {
            return {
                modalShow: false
            };
        },
        components: {
            'v-modal': vModal
        },
        methods: {
            showModal () {
                this.modalShow = true;
            },
            falseModal () {
                this.modalShow = false;
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
    .modal
        position: fixed
        z-index: 100
        top: 20%
        left: 10%
        width: 80%
        height: 50%
        background: rgba(7,17,27,0.8)
        .banner
            color: red
            padding-left: 6px
        .choose-color
            display: flex
            width: 100%
            height: 20%
            .main-color
                flex: 1
                width: 25%
        .select
            display: flex 
            width: 100%
            height: 20%
            .selected
                flex: 1
                text-align: right
                display: block
                padding-right: 20px
</style>