<template>
    <button  class="modalceshi">三</button>
</template>

<script>
    export default {
        name: 'v-modal',
        mounted () {
            this.alert('Hello, Vue!');
        }
    };
</script>

<style lang="stylus" rel="stylesheet/stylus">

    .modalceshi
        height: 57px
        margin-top: 3px
        margin-right: 3px
</style>