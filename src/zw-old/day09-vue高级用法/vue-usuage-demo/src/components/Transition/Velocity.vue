<template>
    <div>
        <h2>单元素 Js 动画</h2>
        <button @click="show = !show">
            Toggle
        </button>
        <transition
            v-on:before-enter="beforeEnter"
            v-on:enter="enter"
            v-bind:css="false"
        >
            <div class="box" v-show="show"></div>
        </transition>
    </div>
</template>

<script>
import Velocity from 'velocity-animate'

export default {
  data() {
    return {show: false}
  },
  methods: {
    beforeEnter: function (el) {
        el.style.opacity = 0;
    },
    enter: function (el, done) {
        Velocity(el, {opacity: 1}, {duration: 500, complete: done })
    },
  }
}
</script>