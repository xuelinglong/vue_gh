<template>
    <div class="welfare" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
        <div class="welfare-center">
            <div v-for="img in leftImg" class="box-img">
                <v-img :imgUrl="img.url"></v-img>
            </div>
        </div>
        <div class="welfare-center">
            <div v-for="img in rightImg" class="box-img">
                <v-img :imgUrl="img.url"></v-img>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import vImg from '../lazyloadimg/lazyimg.vue';
    export default {
        data () {
            return {
                leftImg: [],
                rightImg: [],
                LEFT: [],
                RIGHT: [],
                page: 1
            };
        },
        components: {
            'v-img': vImg
        },
        methods: {
            mounted () {
                this.$http.get(`https://gank.io/api/data/福利/10/${this.page}`)
                .then(response => {
                    this.LEFT = response.body.results.filter((data, i) => {
                        return (i + 1) % 2 === 1;
                    });
                    this.RIGHT = response.body.results.filter((data, i) => {
                        return (i + 1) % 2 !== 1;
                    });
                    this.leftImg = this.leftImg.concat(this.LEFT);
                    this.rightImg = this.rightImg.concat(this.RIGHT);
                    this.busy = false;
                });
            },
            loadMore () {
                this.busy = true;
                this.mounted();
                this.page++;
            }
        }
    };
</script>

<style lang="stylus" rel="stylesheet/stylus">
.welfare
    display: flex
    background: #f0f0f0
    .welfare-center
        flex: 1
        text-align: center
        width: 50%
        .box-img
            width: 95%
            border: 3px solid #fcfcfc
            margin: 8px 5px 15px 2px;
            border-radius: 6px
            border: 2px solid #d9d9d9
            img
                width: 100%
                height: auto
                border-radius: 6px
                border: 1px solid #FFFFFF
</style>