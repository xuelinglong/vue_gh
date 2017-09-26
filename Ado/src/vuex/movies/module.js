import * as api from './api';
import * as type from './type';

const mutations = {
    [type.FETCH_MOVIES](state, payload) {
        state.movies[payload.type].subjects =
            state.movies[payload.type].subjects.concat(payload.subjects);
    }
};

const actions = {
    [type.FETCH_MOVIES](context, payload) {
        // 调用抽象出来的获取数据的函数
        api.fetchMovies(payload.type, { start: payload.start || 0 })
            .then(data => {
                data.type = payload.type;
                // 提交对应的 mutation 来改变状态
                return context.commit([type.FETCH_MOVIES], data);
            });
    }
};

export default {
    state: {
        movies: {
            [api.API_TYPE.movie.inTheaters]: {
                subjects: []
            },
            [api.API_TYPE.movie.comingSoon]: {
                subjects: []
            }
        }
    },
    mutations,
    actions
};