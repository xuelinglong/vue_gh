<template>
    <div class="tab">
        <mt-navbar v-model="selected" style="margin-top: -20px">
            <mt-tab-item id="in_theaters">正在热映</mt-tab-item>
            <mt-tab-item id="coming_soon">即将上映</mt-tab-item>
        </mt-navbar>
        <listview :tabName="selected"></listview>
    </div>
</template>

<script>
    // import { mapState } from 'vuex';
    import Listview from '../listview/listview';
    export default {
        name: 'Tab',
        data () {
            return {
                selected: 'in_theaters'
            };
        },
        components: {
            'listview': Listview
        }
        // computed: mapState({
        //     selected: state => state.tab
        // })
    };</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>