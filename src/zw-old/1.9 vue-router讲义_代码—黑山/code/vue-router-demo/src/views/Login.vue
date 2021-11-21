<template>
    <div>
        <input />
        <button>登录</button>
    </div>
</template>

<script>
export default {
    beforeRouteLeave(to, from, next) {
        console.log('login leave')
        next()
    },
}
</script>