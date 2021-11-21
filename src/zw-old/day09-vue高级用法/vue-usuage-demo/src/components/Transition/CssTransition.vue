<template>
  <div>
      <h2>单元素 css 动画</h2>
      <button @click="toggleVisible">切换</button>

      <transition 
        name="fade"
      >
        <div class="box" v-show="visible"></div>
      </transition>

      <transition 
        enter-active-class="animate__animated animate__bounce"
        leave-active-class="animate__animated animate__tada
"
      >
        <div class="box" v-show="visible"></div>
      </transition>
  </div>
</template>

<script>
import 'animate.css'
export default {
  data() {
    return {
      visible: true,
    }
  },
  methods: {
    toggleVisible() {
      this.visible = !this.visible
    }
  }
}
</script>

<style>
.box {
  margin-top: 30px;
  width: 100px;
  height: 100px;
  background: red;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 1s ease-out;;
}
</style>
