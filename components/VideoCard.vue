<template>
	<div class="container">
		<div class="cover" :style="{ backgroundImage: 'url(' + cover + ')' }">
			<div class="cover-footer">
				<div class="cover-footer-left">
					<div class="cover-footer-left-1">{{ playCount }}</div>
					<div class="cover-footer-left-2">{{ danmakuCount }}</div>
				</div>
				<div class="cover-footer-right">{{ duration }}</div>
			</div>
		</div>
		<div class="footer">
			<div class="footer-title van-ellipsis">{{ title }}</div>
			<div class="footer-footer">
				<div class="author">{{ author }}</div>
				<div class="time">{{ date }}</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
defineProps({
	title: {
		type: String,
		default: '震惊! 这个封面真的好丑',
	},
	cover: {
		type: String,
		default:
			'https://wx3.sinaimg.cn/orj480/007bejpAly1hm6eefsbmrj30u00gvmz0.jpg',
	},
	author: {
		type: String,
		default: 'YoungOldMan',
	},
	date: {
		type: String,
		default: '6-12',
	},
	duration: {
		type: String,
		default: '12:00',
	},
	playCount: {
		type: String,
		default: '1.2万',
	},
	danmakuCount: {
		type: String,
		default: '230',
	},
})
// console.log('props', props);
</script>

<style scoped lang="scss">
.container {
	width: 100%;
	height: 100%;
	border: 1px solid #ededed;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	color: #fff;
	font-size: 14px;
	.cover {
		height: 100px;
		background-size: cover;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		&-footer {
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 6px 8px;

			&-left {
				display: flex;
				align-items: center;
			}
		}
	}
	.footer {
		padding: 2px 4px;
		color: #000;
    &-title {
       
    }
		// display: flex;
    // flex-direction: column;
		// justify-content: space-between;
		// align-items: center;
	}
}
</style>
