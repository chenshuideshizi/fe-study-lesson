<template>
  <div class="el-messages">
    <div v-for="m in messages" :key="m.id">{{m.message}}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {messages: []}
  },
  mounted() {
    this.id = 0; // 当前消息组件的id
  },
  methods: {
    add(options) {
      const id = this.id++;
      const layer = {...options, id}
      this.messages.push(layer)

      setTimeout(() => {
        this.remove(layer)
      }, options.duration)
    },
    remove(layer) {
      this.messages = this.messages.filter(message => message.id !== layer.id)
    }
  }
}
</script>

