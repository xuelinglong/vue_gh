// 将store分割成模块（module）
// 每个模块拥有自己的 state、mutation、action、getter、甚至是嵌套子模块

import fetch from './../base';
import * as type from './type';

export const MOVIESTYPE = {
    inTheaters: 'in_theaters',
    comingSoon: 'coming_soon'
};

export function fetchMovies(type, { city = '郑州', start = 0 } = {}) {
    return fetch(`movie/${type}`, { city, start });
}
export function fetchMovieSubject(id) {
    return fetch(`movie/subject/${id}`);
}

const mutations = {
    // 提交载荷(Payload)  传入额外的参数，即 mutation 的载荷(payload)
    [type.FETCHMOVIES](state, paload) {
        state.movies[payload.type].subjects =
            state.movies[payload.type].subjects.concat(payload.subjects);
        state.movies[payload.type].total = state.movies[payload.type].subjects.length;
    }
}

// Action 提交的是 mutation，而不是直接变更状态;
// Action 可以包含任意异步操作;
const actions = {
    [type.FETCH_MOVIES](context, payload) {
        fetchMovies(payload.type, { start: payload.start || 0 })
            .then(data => context.commit(type.FETCH_MOVIES, {
                type: payload.type,
                subjects: data.subjects
            }));
    }
}

export default {
    state: {
        movies: {
            [MOVIESTYPE.inTheaters]: {
                total: 0,
                subjects: []
            },
            [MOVIESTYPE.comingSoon]: {
                total: 0,
                subjects: [],
            }
        }
    },
    mutations,
    actions
};