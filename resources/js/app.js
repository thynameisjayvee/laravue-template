/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import Vue from 'vue';
import App from '~/App';
import router from '~/router';
import store from '~/store';

import Default from '~/layouts/default';
import Basic from '~/layouts/basic';

//global components
import HasError from '~/components/HasError';
import LocaleDropdown from '~/components/LocaleDropdown';

import  i18n  from  '~/plugins/i18n';

Vue.component('default-layout', Default);
Vue.component('basic-layout', Basic);
Vue.component('HasError', HasError);
Vue.component('LocaleDropdown', LocaleDropdown);

Vue.config.productionTip = false

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
  el: '#app',
  router,
  store,
  i18n,
  render: h => h(App)
})

export default app;
