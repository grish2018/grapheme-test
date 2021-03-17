import Vue from 'vue'
import App from './App.vue'
import { MdField, MdMenu, MdList } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import VueMask from 'v-mask'


Vue.use(MdField)
Vue.use(MdMenu)
Vue.use(MdList)
Vue.use(VueMask);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
