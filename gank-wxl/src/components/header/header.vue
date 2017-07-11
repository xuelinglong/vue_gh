<template>
    <div class="header">
        <img class="img" src="../../assets/gank-header.png"  @click="showModal" />
        <div class="name">干货集中营</div>
        <div class="modal" v-show="modalShow">
            <div class="modal-list">
                <div class="banner">选择主题</div>
                <div class="color-box">
                    <div class="choose-color" v-for="color in colors">
                        <button class="main-color" style="background:red "></button>
                    </div>
                </div>                
                <div class="select">
                    <div class="cancel" @click="falseModal">取消</div>
                    <div class="ensure">确定</div>
                </div>
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
                modalShow: false,
                colors: [
                    '#d6204b',
                    '#1196db',
                    '#000000',
                    '#ffc125',
                    '#008b00',
                    '#4b0082',
                    '#ff00ff',
                    '#d2691e'
                ]
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
        top: 0
        left: 0
        width: 100%
        height: 100%
        overflow: hidden
        background: rgba(7,17,27,0.8)
        .modal-list
            position: fixed
            width: 90%
            height: 40%
            left: 5%
            top: 20%
            background: #FFFFFF
            border-radius: 4px
            .banner
                padding-left: 16px
                color: #d93159
            .color-box
                display: flex
                flex-wrap: wrap
                width: 100%
                height: 110px
                .choose-color
                    flex: 1
                    width: 80px
                    height: 50px
                    button
                        width: 40px
                        height: 40px
                        margin: 5px 15px 2px 20px
                        border-radius: 50%
                        border: 1px solid #FFFFFF
            .select
                display: flex 
                float: none
                width: 30%
                height: 20%
                margin-left: 65%
                .cancel
                    flex: 1
                    text-align: center
                    display: block
                    color: #32a4df
                .ensure
                    flex: 1
                    text-align: center
                    display: block
                    color: #d93159
</style>