import Vue from 'vue'
import App from './App.vue'
import Message from './plugin/message'

Vue.config.productionTip = false

Vue.use(Message)

new Vue({
  render: h => h(App),
}).$mount('#app')
