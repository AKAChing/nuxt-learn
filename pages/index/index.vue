<template>
	<div>
		<van-tabs>
			<van-tab v-for="index in 8" title="标题" :key="index" />
		</van-tabs>
		<div class="container">
			<NuxtLink class="video" to="/" v-for="(item, index) in videoList">
				<VideoCard
					:title="item.title"
					:author="item.author"
					:date="item.date"
					:duration="item.duration"
					:playCount="item.playCount"
					:danmakuCount="item.danmakuCount"
				/>
			</NuxtLink>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
let videoList = ref([])
const { data } = await useFetch('/api/test')
videoList.value = data.value
console.log(videoList.value)
</script>

<style scoped>
.container {
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	.video {
		flex: 0 0 50%;
		padding: 5px;
		box-sizing: border-box;
	}
}
</style>
