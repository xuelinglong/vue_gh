import Vuex from 'vuex';
import Vue from 'vue';
// import movie from './movies/module';

Vue.use(Vuex);

// 初始状态
const state = {
    'api.getsub.inTheaters': [],
    'api.getsub.comingSoon': []
};

const mutations = {};

export default new Vuex.Store({
    state,
    mutations
});