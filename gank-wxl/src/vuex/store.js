import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// 创建一个对象来保存应用启动时的初始状态
const state = {
    'modalShow': false,
    'magnifyShow': false,
    'articleShow': false,
    'loadingShow': false,
    'welfareShow': true
};

// 创建一个对象存储一系列我们接下来要写的 mutation 函数
const mutations = {
    // 类型type (state) { 回调函数handler }
    UPDATE_MODALSHOW(state) {
        // 变更状态
        state.modalShow = !state.modalShow;
    },
    UPDATE_MAGNIFYSHOW(state) {
        // 变更状态
        state.magnifyShow = !state.magnifyShow;
    },
    UPDATE_ARTICLESHOW(state) {
        // 变更状态
        state.articleShow = !state.articleShow;
    },
    UPDATE_LOADINGSHOW(state) {
        // 变更状态
        state.loadingShow = !state.loadingShow;
    }
    // UPDATE_WELFARESHOW(state) {
    //     // 变更状态
    //     state.welfareShow = !state.welfareShow;
    // }
};

export default new Vuex.Store({
    state,
    mutations
});