import Vue from 'vue'
import MessageComponent from './Message.vue'

let vm = null

const getInstance = function() {
  if(!vm) {
    // 单例模式
    vm = new Vue({
      render: h => h(MessageComponent)
    }).$mount()
  
    document.body.appendChild(vm.$el)
  }

  return vm.$children[0];
}

const Message = {
  info(options) {
    getInstance().add(options)
  }
}

export {
  Message,
}

export default {
  install(Vue) {
    Vue.prototype.$message = {
      info: Message.info
    }
  }
}