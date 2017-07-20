<template>
    <div class="list" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
        <div class="article-item" v-for="data in datas">
            <div class="title">
                <a :href="data.url" target="view_window">
                    {{ data.desc }}
                    <p class="author">{{ data.who }}</p>
                </a>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
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
        props: ['type'],
        methods: {
            mounted() {
                this.$http.get(`http://gank.io/api/data/${this.type}/10/${this.page}`)
                .then(response => {
                    this.results = response.body.results;
                    this.datas = this.datas.concat(this.results);
                    this.busy = false;
                });
            },
            loadMore() {
                this.busy = true;
                this.mounted();
                this.page++;
            }
        }
    };
</script>

<style lang="stylus" rel="stylesheet/stylus">     
</style>