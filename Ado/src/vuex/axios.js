import axios from 'axios';

// http://api.douban.com/v2/
const BASE = '/api/';

export default function(url, params = {}) {
    return new Promise((resolve, reject) => {
        axios.get(BASE + url, { params })
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

// 也可以通过 params 对象传递参数
// axios.get('/user', {
//     params: {
//       ID: 12345
//     }
//   })
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });