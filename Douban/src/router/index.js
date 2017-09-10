import Vue from 'vue';
import Router from 'vue-router';
import tab from '@/components/tab';
import subject from './../components/subject/subject';

Vue.use(Router);

export default new Router({
    routes: [{
        path: '/',
        name: 'tab',
        component: tab,
        children: [{
            path: '/',
            name: 'subject',
            component: subject
        }]
    }]
});