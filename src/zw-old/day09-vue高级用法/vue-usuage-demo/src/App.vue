<template>
  <div id="app">
    <SlotDemo />
    <Reactivity />
    <Transition />
    <button @click="showMsg">显示message</button>
    <button @click="showMsgByPlugin">显示message（插件）</button>
  </div>
</template>

<script>
import Transition from './components/Transition/index'
import { Message } from './plugin/message'
import Reactivity from './reactivity'
import SlotDemo from './components/Slot/Index'
export default {
  name: 'App',
  components: {
    Transition,
    Reactivity,
    SlotDemo,
  },
  methods: {
    showMsg() {
      Message.info({
        message: '消息',
        duration: 3000
      })
    },
    showMsgByPlugin() {
      this.$message.info({
        message: '插件消息',
        duration: 4000,
      })
    }
  }
}
</script>

<style>
body {
  padding-bottom: 100px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
