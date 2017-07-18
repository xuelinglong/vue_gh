import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// 创建一个对象来保存应用启动时的初始状态
const state = {
    'modalShow': true
};

// 创建一个对象存储一系列我们接下来要写的 mutation 函数
const mutations = {
    UPDATE_MODALSHOW(state) {
        state.madalShow = !state.modalShow;
    }
};

export default new Vuex.Store({
    state,
    mutations
});