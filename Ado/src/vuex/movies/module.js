import * as api from './api';
import * as type from './type';

const mutations = {
    [type.FETCH_MOVIES](state, payload) {
        // 把获取到的数据的subjects赋到对应tabName的subjects数组中
        state.movies[payload.type].subjects = state.movies[payload.type].subjects.concat(payload.subjects);
    },
    [type.FETCH_MOVIES_QUERY](state, payload) {
        state.movieQuery.subjects = payload.data.subjects;
    }
};

const actions = {
    [type.FETCH_MOVIES](context, payload) {
        // 调用抽象出来的获取数据的函数
        api.fetchMovies(payload.type, { start: payload.start || 0 })
            .then(data => context.commit(type.FETCH_MOVIES, {
                type: payload.type,
                subjects: data.subjects
            }));
    },
    [type.FETCH_MOVIES_QUERY](context, payload) {
        api.fetchMoviesQuery({ q: payload.q })
            .then(data => context.commit(type.FETCH_MOVIES_QUERY, { data, q: payload.q }));
    }
};

export default {
    state: {
        movies: {
            [api.API_TYPE.inTheaters]: {
                subjects: []
            },
            [api.API_TYPE.comingSoon]: {
                subjects: []
            }
        },
        movieQuery: {
            subjects: [],
            q: ''
        }
    },
    mutations,
    actions
};