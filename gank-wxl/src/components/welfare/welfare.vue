<template>
<!-- <scroller style="margin-top: 100px;"
              :on-refresh="refresh"
              :on-infinite="infinite"
              class="scroller-welfare"
              ref="my_scroller"> -->
    <div class="welfare" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10" v-show="welfareShow">
        <div class="welfare-center">
            <div v-for="img in leftImg" class="box-img" @click="selectedImg(img.createdAt)">
                <v-card :img="img"></v-card>
            </div>
        </div>
        <div class="welfare-center">
            <div v-for="img in rightImg" class="box-img" @click="selectedImg(img.createdAt)">
                <v-card :img="img"></v-card>
            </div>
        </div>
        <v-magnify v-show="magnifyShow" :show="magnifyShow" :data="magnifyData"></v-magnify>
    </div>
<!-- </scroller> -->
</template>

<script type="text/ecmascript-6">
    import vCard from '../card/card.vue';
    import vMagnify from '../magnify/magnify.vue';
    import { mapState } from 'vuex';
    export default {
        data() {
            return {
                leftImg: [],
                rightImg: [],
                LEFT: [],
                RIGHT: [],
                page: 1,
                magnifyData: {},
                time: ''
            };
        },
        components: {
            'v-card': vCard,
            'v-magnify': vMagnify
        },
        computed: {
            ...mapState([
                'welfareShow',
                'magnifyShow'
            ])
        },
        methods: {
            mounted() {
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
            loadMore() {
                this.busy = true;
                this.mounted();
                this.page++;
            },
            refresh(done) {
                setTimeout(() => {
                    this.mounted();
                    done();
                }, 1500);
            },
            infinite(done) {
                setTimeout(() => {
                    this.mounted();
                    done();
                }, 1500);
            },
            selectedImg(time) {
                this.time = time;
                // 以 2017/07/26 的 img 测试代码逻辑是否正确
                this.$http.get(`http://gank.io/api/history/content/day/2017/07/26`)
                .then((response) => {
                    this.magnifyData = response.body.results;
                });
                // 以相应的 type 调用 store.commit 方法，唤醒一个 mutation handler
                this.$store.commit('UPDATE_MAGNIFYSHOW');
            }
        }
    };
</script>

<style lang="stylus" rel="stylesheet/stylus">
// .scroller-welfare
//     width: 100%
//     height: 100%
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
                .card
                    width: 100%
                    overflow: hidden
                    position: relative
                    border-radius: 6px
                    img
                        width: 100%
                        height: auto
                        border-radius: 6px
                        border: 1px solid #FFFFFF
                    .card-bottom
                        width: 100%
                        height: auto
                        display: flex
                        flex-direction: column
                        position: absolute
                        left: 0
                        right: 0
                        bottom: 0
                        background-color rgba(0,0,0,0.2)
                        color: #FFFFFF
                    .time
                        flex: 1
                        text-align: left
                        line-height: 25px
                        margin-left: 5px
                        font-size: 16px
                    .author
                        flex: 1
                        text-align: right
                        line-height: 25px
                        margin-right: 5px
                        font-size: 8px
</style>