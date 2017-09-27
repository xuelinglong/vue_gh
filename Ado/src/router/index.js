import Vue from 'vue';
import Router from 'vue-router';
import Tab from '@/components/tab/tab';
import Subject from '@/components/subject/subject';

Vue.use(Router);

export default new Router({
    routes: [{
            path: '/',
            name: 'Tab',
            component: Tab
        },
        {
            path: '/subject',
            name: 'subject',
            component: Subject
        }
    ]
});