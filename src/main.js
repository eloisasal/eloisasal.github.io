import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import HelloWorld from './components/HelloWorld'
import CustomErrorComponent from './components/CustomErrorComponent'
import About from './components/About'


Vue.config.productionTip = false

Vue.use(VueRouter);

const routes = [
  { path: '/', component: HelloWorld },
  { path: '/About', component: About },
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
