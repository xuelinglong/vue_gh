<template>
    <div class="header">
        <img class="img" src="../../assets/gank-header.png" />
        <div class="name">干货集中营</div>
        <v-model></v-model>
    </div>
</template>

<script type="text/ecmascript-6">
    import vModal from '../modal/modal.vue';
    export default {
        name: 'header',
        components: {
            'v-modal': vModal
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