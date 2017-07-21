<template>
    <div>
        <img v-lazy="imgObj" lazy="loading" class="img-box" @click="showMagnify">
        <v-magnify v-show="magnifyShow" :show="magnifyShow" :imgUrl="imgUrl" :imgDesc="imgDesc"></v-magnify>
    </div>
</template>

<script>
    import vMagnify from '../lists/magnify.vue';
    import { mapState } from 'vuex';
    export default {
        name: 'v-img',
        props: ['imgUrl', 'imgDesc'],
        components: {
            'v-magnify': vMagnify
        },
        computed: {
            imgObj() {
                return `${this.imgUrl}`;
            },
            ...mapState([
                'magnifyShow'
            ])
        },
        methods: {
            showMagnify() {
                // 以相应的 type 调用 store.commit 方法，唤醒一个 mutation handler
                this.$store.commit('UPDATE_MAGNIFYSHOW');
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