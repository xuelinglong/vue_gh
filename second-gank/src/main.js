// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
// 引入
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import VueInfiniteScroll from 'vue-infinite-scroll';
import VueLazyload from 'vue-lazyload';
import VueScroller from 'vue-scroller';
import store from './vuex/store';
import welfare from './components/lists/welfare.vue';
import android from './components/lists/android.vue';
import ios from './components/lists/ios.vue';
import web from './components/lists/web.vue';
import rest from './components/lists/rest.vue';

Vue.config.productionTip = false;

// 安装这个插件
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(VueInfiniteScroll);
Vue.use(VueLazyload, {
    error: './assets/404.png',
    loading: require('./assets/loading.gif'),
    attempt: 1
});
Vue.use(VueScroller);

// 2. 定义路由
const routes = [
    { path: '/福利', component: welfare },
    { path: '/android', component: android },
    { path: '/ios', component: ios },
    { path: '/前端', component: web },
    { path: '/休息视频', component: rest }
];

// 3. 创建 router 实例，然后传 `routes` 配置
const router = new VueRouter({
    routes
});

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
});