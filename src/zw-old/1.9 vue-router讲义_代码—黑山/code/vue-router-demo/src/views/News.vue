<template>
    <div>
        这是新闻管理页

        <div>
            <router-link :to="{name: 'newsAdd'}">添加新闻</router-link>
            <router-link :to="{name: 'newsDetail', params: {id: 1}}">新闻详情1</router-link>
            <router-link :to="{name: 'newsDetail', params: {id: 2}}">新闻详情2</router-link>
            
        </div>
        <router-view></router-view>
    </div>
</template>