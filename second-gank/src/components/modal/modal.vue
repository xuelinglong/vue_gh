<template>
    <div class="modal" :class="{'show': show}">
        <div class="click-top" @click="modalFalse"></div>
        <div class="theme">
            <div class="main">选择主题</div>
            <div class="color-box"></div>
            <div class="button">
                <div class="cancel" @click="modalFalse">取消</div>
                <div class="sure">确定</div>
            </div>
        </div>
        <div class="click-foot"></div>
    </div>
</template>

<script>
    export default {
        name: 'v-modal',
        props: ['show'],
        methods: {
            modalFalse() {
                this.$store.commit('UPDATE_MODALSHOW');
            }
        }
    };</script>

<style lang="stylus" rel="stylesheet/stylus">
    .modal
        position: fixed
        width: 100%
        height: 100%
        z-index: 100
        left: 0
        top: 0
        bottom: 0
        background: rgba(0,0,0,0.8)
        .click-top
            height: 30%
        .theme
            position: fixed
            left: 0
            top: 30%
            width: 100%
            height: 40%
            background: #FFFFFF
            color: #d61f4b
            .main
                margin: 20px 0 0 20px
                font-size: 1rem
            .color-box
                width: 100%
                height: 60%
                background: yellow
            .button
                display: flex
                width: 30%
                height: 20%
                margin: 0 0 0 65%
                .cancel
                    display: block
                    flex: 1
                    text-align: center
                    padding: 10%
                    color: #d61f4b
                    background: pink
                .sure
                    flex: 1
                    text-align: center
                    padding: 10%
                    color: blue
                    background: green
</style>
