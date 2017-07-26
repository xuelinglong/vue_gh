<template>
    <div>
        <img v-lazy="imgObj" lazy="loading" class="img-box">
    </div>
</template>

<script>
    export default {
        name: 'v-img',
        props: ['imgUrl'],
        computed: {
            imgObj() {
                return `${this.imgUrl}`;
            }
        }
    };
</script>

<style lang="stylus" rel="stylesheet/stylus">
    img[lazy=loading] {
        /*your style here*/
    }
    img[lazy=error] {
        /*your style here*/
    }
    img[lazy=loaded] {
        /*your style here*/
    }

    .yourclass[lazy=loading] {
        /*your style here*/
    }
    .img-box[lazy=error] {
        width: 80%
        height: 50%
    }
    .yourclass[lazy=loaded] {
        /*your style here*/
    }
</style>