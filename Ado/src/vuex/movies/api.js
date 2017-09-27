import fetch from './../axios';

// 类型
export const API_TYPE = {
    // movie: {
    inTheaters: 'in_theaters',
    comingSoon: 'coming_soon'
        // }
};

// 把获取数据的函数按功能抽象出来
export function fetchMovies(type, { city = '郑州', start = 0 } = {}) {
    return fetch(`movie/${type}`, { city, start });
}