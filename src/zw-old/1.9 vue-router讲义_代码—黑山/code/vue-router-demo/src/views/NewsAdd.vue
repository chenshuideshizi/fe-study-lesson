<template>
    <div>
        <input />
        <button @click="addNews">添加新闻</button>
    </div>
</template>

<script>
export default {
    beforeRouteLeave(to, from, next) {
        console.log('news add leave')
        next()
    },
    methods: {
        addNews() {
            // 保存新闻，发送ajax请求，保存成功后跳转到新闻详情
            this.$router.push({name: 'newsDetail', params: {id: 4}})
        }
    }
}
</script>