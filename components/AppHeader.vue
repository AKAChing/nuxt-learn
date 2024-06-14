<template>
	<div class="container">
		<div class="left">
			<div class="home-page"></div>
			<van-search placeholder="搜索"></van-search>
		</div>
		<div class="right"></div>
	</div>
</template>

<script setup lang="ts">

defineProps({})
</script>

<style scoped lang="scss">
.container {
	width: 100%;
	height: 50px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-size: 16px;
}
</style>
