import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './components/Home'
import Contact from './components/Contact'
import About from './components/About'
import Projects from './components/Projects'
import More from './components/More'
import CustomErrorComponent from './components/CustomErrorComponent'


Vue.config.productionTip = false

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Home },
  { path: '/Home', component: Home },
  { path: '/Contact', component: Contact },
  { path: '/About', component: About },
  { path: '/Projects', component: Projects },
  { path: '/More', component: More },
  { path: '*', component: CustomErrorComponent }
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
