// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import store from './vuex/store';
import VueRouter from 'vue-router';
import infiniteScroll from 'vue-infinite-scroll'; // 引入滑动模块
import vueResource from 'vue-resource';
import VueLazyload from 'vue-lazyload';
// 第一步：从其他文件引入或者定义（路由）组件
import welfare from './components/welfare/welfare.vue';
import android from './components/lists/android.vue';
import ios from './components/lists/ios.vue';
import web from './components/lists/web.vue';
import rest from './components/lists/rest.vue';
import recommend from './components/lists/recommend.vue';
import resources from './components/lists/resources.vue';

Vue.config.debug = true;

// 安装这个插件
Vue.use(VueRouter);
Vue.use(infiniteScroll);
Vue.use(vueResource);

// or with options
Vue.use(VueLazyload, {
    preLoad: 1.3,
    error: require('./assets/404.png'),
    attempt: 1
});

// 定义路由
const routes = [
    { path: '/welfare', component: welfare },
    { path: '/android', component: android },
    { path: '/ios', component: ios },
    { path: '/web', component: web },
    { path: '/rest', component: rest },
    { path: '/recommend', component: recommend },
    { path: '/resources', component: resources }
];

// 3. 创建 router 实例， 然后传 `routes`配置
const router = new VueRouter({
    'linkActiveClass': 'active',
    routes
});

// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，从而让整个应用都有路由功能。

/* eslint-disable no-new */
new Vue({
    el: '#app',
    template: '<App/>',
    components: { App },
    store,
    router
});