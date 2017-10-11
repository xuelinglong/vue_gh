// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './vuex/store';
// import axios from 'axios';

// 引入mint-ui
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';

Vue.config.productionTip = false;

Vue.use(MintUI);
// Vue.use(axios);
// axios不能通过Vue.use(axios)的方式引入
// 报错：Uncaught (in promise) TypeError: Cannot read property 'protocol' of undefined

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
});