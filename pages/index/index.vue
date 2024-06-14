<template>
	<div>
		<AppHeader/>
		<van-tabs v-model:active="channelActive" sticky @change="onChannelChange">
			<van-tab
				v-for="(item, index) in channelList"
				:name="item.name"
				:title="item.title"
				:key="index"
			/>
		</van-tabs>
		<van-list
			v-model:loading="videoListLoading"
			:finished="videoListFinished"
			finished-text="没有更多了"
			:immediate-check="false"
			@load="onVideoListLoad"
		>
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
		</van-list>
	</div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

// 频道列表
import  { type ChannelInfo } from '@/types/channel'
let channelActive = ref(0)
let channelList = ref<ChannelInfo[]>([])
const { data: channelListData } = await useFetch('/api/channel')
channelList.value = channelListData.value!
const onChannelChange = (index: number) => {
	videoList.value = []
	videoListPageNum.value = 1
	videoListLoading.value = true
	
	setTimeout(() => {
		let newData = videoListData.value?.slice(videoListPageNum.value * videoListPageSize.value, (videoListPageNum.value + 1) * videoListPageSize.value)
		videoList.value.push(...newData!)
		videoListLoading.value = false
	}, 1000);
	 
}

// 视频列表
import  { type VideoInfo } from '@/types/video'
let videoListLoading = ref<boolean>(false)
let videoListFinished = ref<boolean>(false)
let videoList = ref<VideoInfo[]>([])
let videoListPageNum = ref<number>(1)
let videoListPageSize = ref<number>(10)
const { data: videoListData } = await useFetch('/api/video')
videoList.value = videoListData.value!
const onVideoListLoad = () => {
	// videoListPageNum.value++
	videoListLoading.value = true
	let newData = videoListData.value?.slice(videoListPageNum.value * videoListPageSize.value, (videoListPageNum.value + 1) * videoListPageSize.value)
	videoList.value.push(...newData!)
	videoListLoading.value = false
	console.log('onVideoListLoad', videoList.value)
}
// onVideoListLoad()
</script>

<style scoped>
.container {
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	.video {
		min-width: 0;
		flex: 0 0 50%;
		padding: 5px;
		box-sizing: border-box;
	}
}
</style>
