import Vue from 'vue';
import Router from 'vue-router';
import BodyView from '@/components/body';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: BodyView,
    },
  ],
});
