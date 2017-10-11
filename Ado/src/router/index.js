import Vue from 'vue';
import Router from 'vue-router';
import Tab from '@/components/tab/tab';
import Subject from '@/components/subject/subject';
import Search from '@/components/search/search';

Vue.use(Router);

export default new Router({
    routes: [{
            path: '/',
            name: 'Tab',
            component: Tab
        },
        {
            path: '/subject/:id',
            name: 'subject',
            component: Subject
        },
        {
            path: '/search',
            name: 'search',
            component: Search
        }
    ]
});