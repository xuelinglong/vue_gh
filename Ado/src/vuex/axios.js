import axios from 'axios';

// http://api.douban.com/v2/
const HOST = '/api/';

export default function(url, params = {}) {
    return new Promise((resolve, reject) => {
        axios.get(HOST + url, { params })
            .then((response) => {
                // 成功时调用，把操作的结果作为参数传递出去
                resolve(response.data);
            })
            .catch((error) => {
                // 捕获错误
                reject(error);
            });
    });
}