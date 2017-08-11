import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
    'modalShow': false
};

const mutations = {
    UPDATE_MODALSHOW(state) {
        state.modalShow = !state.modalShow;
    }
};

export default new Vuex.Store({
    state,
    mutations
});