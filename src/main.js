import Vue from 'vue'
import App from './App'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/style.less';
import '@fortawesome/fontawesome-free/js/all.js'

Vue.config.productionTip = false

/* eslint-disable */
new Vue({
  el: '#app',
  lintOnSave: false,
  components: { App },
  template: '<App/>'
})
