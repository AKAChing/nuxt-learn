<template>
	<div class="app">
		<!-- 路由链接 -->
		<!-- <NuxtLink to="/">首页</NuxtLink>
		<NuxtLink to="/video">视频</NuxtLink> -->

		<!-- 路由组件 -->
		<NuxtPage />
	</div>
</template>

<script setup lang="ts">
// 设置SEO
useSeoMeta({
	title: '我的神奇网站',
	description: '这是我的神奇网站，让我告诉你关于它的一切。',
	keywrods: '郑清锋 测试',
})
</script>

<style lang="scss">
.app {
}
</style>
