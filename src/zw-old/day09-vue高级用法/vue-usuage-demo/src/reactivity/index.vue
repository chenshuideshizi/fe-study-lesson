<template>
  <div>
    <div>{{a}}</div>
    <div>{{ info.name + info.id }}</div>
    <div>{{ arr }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      a: 1,
      info: {
        name: 'xiaoming',
      },
      arr: [1,2,3]
    }
  },
  mounted() {
    // this.$set(this.info, 'id', 2)
    // this.info.id = 2
    // this.a = 2
    // this.arr[1] = 44
    // this.$set(this.arr, 0, 44)
    this.arr.splice(1)
  }
}
</script>
