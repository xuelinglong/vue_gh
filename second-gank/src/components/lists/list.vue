<template>
<!-- <scroller style="top: 110px;"
              :on-refresh="refresh"
              :on-infinite="infinite"
              class="scroller"
              ref="my_scroller"> -->
    <div v-if="type != '福利'" :class="{'show':type!='福利'}" class="listview" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
        <div class="list-item" v-for="data in datas">
            <a class="title" :href="data.url" target="view_window">{{ data.desc }}</a>
            <div class="author">via.{{ data.who }}</div>
        </div>
    </div>
    <div v-else-if="type === '福利'" :class="{'福利':type==='福利'}" class="welfareview" v-infinite-scroll="loadImgmore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
        <div class="welfare-center">
            <div class="Imgbox" v-for="img in leftImg">
                <v-card :data="img"></v-card>
            </div>
        </div>
        <div class="welfare-center">
            <div class="Imgbox" v-for="img in rightImg">
                <v-card :data="img"></v-card>
            </div>
        </div>       
    </div>
<!-- </scroller> -->
</template>

<script type="text/ecmascript-6">
    import vCard from '../card/card.vue';
    export default {
        name: 'v-list',
        data() {
            return {
                datas: [],
                page: 1,
                busy: false,
                leftImg: [],
                rightImg: [],
                LEFT: [],
                RIGHT: []
            };
        },
        components: {
            'v-card': vCard
        },
        props: ['type'],
        methods: {
            mounted() {
                this.$http.get(`http://gank.io/api/data/${this.type}/10/${this.page}`)
                .then((response) => {
                    this.datas = this.datas.concat(response.body.results);
                    this.busy = false;
                });
            },
            loadMore() {
                this.busy = true;
                this.mounted();
                this.page++;
            },
            loadImg() {
                this.$http.get(`http://gank.io/api/data/福利/10/${this.page}`)
                .then((response) => {
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
            loadImgmore() {
                this.busy = true;
                this.loadImg();
                this.page++;
            }
            // refresh() {
            //     setTimeout(() => {
            //         this.page = 1;
            //         this.loadImgmore();
            //         this.loadMore();
            //     }, 1500);
            // },
            // infinite() {
            //     setTimeout(() => {
            //         this.page = 1;
            //         this.loadImgmore();
            //         this.loadMore();
            //     }, 1500);
            // }
        }
    };</script>

<style lang="stylus" rel="stylesheet/stylus">
// .scroller
//     width: 100%
    .listview
        display: flex
        flex-direction: column  /** 主轴为垂直方向，起点在上面 **/
        width: 100%
        height: 100%
        .list-item
            flex: 1
            width: 100%
            height: 60px
            color: #d61f4b
            border-bottom: 1px solid #e0e0e0
            .title
                height: 37px
                font-size: 1rem
                display: -webkit-box  /** 对象作为伸缩盒子模型显示 **/
                -webkit-box-orient: vertical  /** 设置或检索伸缩盒对象的子元素的排列方式 **/
                -webkit-line-clamp: 2  /** 显示的行数 **/
                overflow: hidden  /** 隐藏超出的内容 **/
                margin: 3px 10px 0 5px
            & > a
                color: #d61f4b
                display: block
                text-decoration: none   /** 去掉超链接字体下划线 **/
            .author
                height: 20px
                font-size: 0.3rem
                text-align: right
                margin-right: 5px
                color: #a7a7a7
    .welfareview
        display: flex
        width: 100%
        height: 100%
        .welfare-center
            flex: 1
            width: 50%
            background: #f0f0f0
            .Imgbox
                width: 93%
                border: 2px solid #FFFFFF
                border-radius: 6px
                margin: 10px 0 10px 5px
                .card
                    width: 100%
                    img
                        width: 100%
                        height: auto
                        border-radius: 6px
                    .card-bottom
                        display: flex
                        flex-direction: column
                        height: 50px
                        color: #FFFFFF
                        border-radius: 6px
                        margin-top: -53px
                        background: rgba(0,0,0,0.7)
                        .time
                            flex: 1
                            text-align: left
                            margin-left: 10px
                        .author
                            flex: 1
                            text-align: right
                            margin-right: 10px
                            font-size: 0.8rem
</style>
