import Vue from 'vue'
import App from './App.vue'
import VueSweetalert2 from 'vue-sweetalert2'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import PrettyCheckbox from 'pretty-checkbox-vue'
Vue.use(PrettyCheckbox)


import PrettyInput from 'pretty-checkbox-vue/input';
import PrettyCheck from 'pretty-checkbox-vue/check';
import PrettyRadio from 'pretty-checkbox-vue/radio';

Vue.component('p-input', PrettyInput);
Vue.component('p-check', PrettyCheck);
Vue.component('p-radio', PrettyRadio);

import { ModalPlugin } from 'bootstrap-vue'
Vue.use(ModalPlugin)

import { LayoutPlugin } from 'bootstrap-vue'
Vue.use(LayoutPlugin)

import { CardPlugin } from 'bootstrap-vue'
Vue.use(CardPlugin)

import { VBScrollspyPlugin } from 'bootstrap-vue'
Vue.use(VBScrollspyPlugin)

import { FormRadioPlugin } from 'bootstrap-vue'
Vue.use(FormRadioPlugin)

import { DropdownPlugin, TablePlugin } from 'bootstrap-vue'
Vue.use(DropdownPlugin)
Vue.use(TablePlugin)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

const options = {
  confirmButtonColor: '#41b882',
  cancelButtonColor: '#ff7674'
}
Vue.use(BootstrapVue)
Vue.use(VueSweetalert2, options)