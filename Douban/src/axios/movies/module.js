// 将store分割成模块（module）
// 每个模块拥有自己的 state、mutation、action、getter、甚至是嵌套子模块

import * as api from './api';
import * as type from './type';

const mutations = {
    // 提交载荷(Payload)  传入额外的参数，即 mutation 的载荷(payload)
    [type.FETCH_MOVIES](state, payload) {
        state.movies[payload.type].subjects =
            state.movies[payload.type].subjects.concat(payload.subjects);
        state.movies[payload.type].total = state.movies[payload.type].subjects.length;
    },
    [type.CHANGE_MOVIES_TAB](state, tab) {
        state.tab = tab;
    }
};

// Action 提交的是 mutation，而不是直接变更状态;
// Action 可以包含任意异步操作;
const actions = {
    [type.FETCH_MOVIES](context, payload) {
        api.fetchMovies(payload.type, { start: payload.start || 0 })
            .then(data => context.commit(type.FETCH_MOVIES, {
                type: payload.type,
                subjects: data.subjects
            }));
    },
    [type.CHANGE_MOVIES_TAB](context, tab) {
        context.commit(type.CHANGE_MOVIES_TAB, tab);
    }
};

export default {
    state: {
        movies: {
            [api.MOVIESTYPE.inTheaters]: {
                total: 0,
                subjects: []
            },
            [api.MOVIESTYPE.comingSoon]: {
                total: 0,
                subjects: []
            }
        },
        tab: 'in_theaters'
            // menu: '全部'
    },
    mutations,
    actions
};