import axios from 'axios';

const HOST = '/api/';

export default function(url, params = {}) {
    return new Promise((resolve, reject) => {
        axios.get(HOST + url, { params })
            .then((res) => {
                resolve(res.data);
            }).catch(err => reject(err));
    });
}

//Promise API
// function myAsyncFunction(url) {
//     return new Promise((resolve, reject) => {
//         const xhr = new XMLHttpRequest();
//         xhr.open("GET", url);
//         xhr.onload = () => resolve(xhr.responseText);
//         xhr.onerror = () => reject(xhr.statusText);
//         xhr.send();
//     });
// };