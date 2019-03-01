// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'mint-ui/lib/style.css'
import 'mint-ui/lib/popup/style.css';
import 'mint-ui/lib/picker/style.css';
import { Popup } from 'mint-ui';
import { Picker } from 'mint-ui';
Vue.component(Popup.name,Popup)
Vue.component(Picker.name, Picker);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
