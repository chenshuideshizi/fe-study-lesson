<template>
    <div>
        新闻详情页
        {{ $route.params.id }}
    </div>
</template>

<script>
export default {
    // watch: {
    //     '$route.params.id'() {
    //         this.getNews()
    //     }
    // },
    beforeRouteEnter(to, from, next) {
        console.log('news detail enter')
        next(vm => {
            console.log('组件beforeRouteEnter守卫 next回调', vm)
        })
    },
    beforeRouteUpdate(to, from, next) {
        console.log('news detail update')
        // this.getNews(to.params.id)
        next()
    },
    beforeCreate() {
        console.log('NewsDetail组件 beforeCreate')
    },
    created() {
        console.log('NewsDetail组件 created')
    },
    beforeMount() {
        console.log('NewsDetail组件 beforeMount')
    },
    mounted() {
        console.log('NewsDetail组件 mounted')
        // this.getNews()
    },
    beforeUpdate() {
        console.log('NewsDetail组件 beforeUpdate')
    },
    methods: {
        getNews(id = this.$route.params.id) {
            console.log(`获取新闻Id为${id}的详情`)
        }
    }
}
</script>