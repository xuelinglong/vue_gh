import gain from './../axios';

// 类型
export default Moviestype = {
    inTheaters: 'in_theaters',
    comingSoon: 'coming_soon'
};

// 把获取数据的函数单独抽象出来
export function gainMovies(type, { city = '郑州', start = 0 } = {}) {
    return gain(`movie/${type}`, { city, start });
}