<template>
    <div class="list" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
        <scroller style="margin-top: 100px;"
              :on-refresh="refresh"
              :on-infinite="infinite"
              class="scroller"
              ref="my_scroller">
        <div class="article-item" v-for="data in datas">
            <div class="title" :articelUrl="data.url">
                <a :href="data.url" target="view_window">
                    {{ data.desc }}
                    <p class="author">&nbsp{{ data.who }}</p>
                </a>
            </div>
            <!-- <v-article v-show="articleShow" :articelUrl="articleUrl"></v-article> -->
        </div>
        </scroller>
    </div>
</template>

<script type="text/ecmascript-6">
    import vArticle from '../lists/article.vue';
    import { mapState } from 'vuex';
    export default {
        name: 'v-list',
        data() {
            return {
                datas: [],
                results: [],
                page: 1,
                busy: false
            };
        },
        components: {
            'v-article': vArticle
        },
        computed: {
            ...mapState([
                'magnifyShow'
            ])
        },
        props: ['type'],
        methods: {
            mounted() {
                // this.$store.commit('UPDATE_LOADINGSHOW', true);
                this.$http.get(`http://gank.io/api/data/${this.type}/10/${this.page}`)
                .then(response => {
                    this.results = response.body.results;
                    this.datas = this.datas.concat(this.results);
                    this.busy = false;
                    // this.$nextTick(() => {
                    //     this.$store.commit('UPDATE_LOADINGSHOW', false);
                    // });
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
            showArticle() {
                // 以相应的 type 调用 store.commit 方法，唤醒一个 mutation handler
                this.$store.commit('UPDATE_ARTICLESHOW');
            }
        }
    };
</script>

<style lang="stylus" rel="stylesheet/stylus">     
</style>