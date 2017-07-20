<template>
    <div class="modal">
        <div class="modal-list" :class="{'show': show}">
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
</template>

<script>
    export default {
        name: 'v-modal',
        data() {
            return {
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
        props: ['show'],
        methods: {
            falseModal() {
                this.$store.commit('UPDATE_MODALSHOW');
            }
        }
    };
</script>

<style lang="stylus" rel="styleesheet/stylus">
    .modal
        position: fixed
        z-index: 10
        top: 0
        left: 0
        width: 100%
        height: 100%
        overflow: scroll
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