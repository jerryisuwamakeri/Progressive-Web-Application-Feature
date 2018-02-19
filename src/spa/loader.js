// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';

Vue.config.productionTip = false;

export default (login) => {
  // If passed a login component, register it on the global Vue instance,
  // then add it to routes and the components object
  let components = { App }
  if (typeof login !== 'undefined') {
    const LoginComponent = Vue.component(login.name, login);
    router.addRoutes([{
      path: '/login',
      name: 'Login',
      component: LoginComponent
    }]);
    components.LoginComponent = LoginComponent;
  }
  return new Vue({
    el: '#app',
    router,
    components: components,
    template: '<App/>'
  })
};
