<template>
	<view>
		<view class="content">
			<text :class="{'tee':text,'tees':color}">{{haed}}</text>
			<view class="dianj" :class="pan?'yc':''">
				<text @click="getBack">◁</text> | <text @click="answer">☺</text>
			</view>
		</view>
	</view>
</template>

<script>

	export default {
		name: "top",
		data() {
			return {};
		},
		props: ['haed', 'pan','text','color'],
		methods: {
			getBack() {

				uni.navigateBack({
					delta: 1
				})

			},
			answer() {
				uni.navigateBack({
					delta: 1
				})
			}
		}
	}
</script>

<style scoped>
	.content {
		width: 100%;
		font-size: 32rpx;
		padding: 60rpx 0 50rpx 0;
		text-align: center;
		position: relative;
	}

	.dianj {
		position: absolute;
		width: 180rpx;
		height: 70rpx;
		background-color: rgba(255, 255, 255, 0.5);
		border: 1px solid #eaeaea;
		display: flex;
		justify-content: center;
		align-items: center;
		top: 50rpx;
		left: 30rpx;
		border-radius: 30px;
	}

	.dianj text {
		padding: 0 20rpx;
	}

	.yc {
		display: none;
	}
	.tee{
		color: #fff;
	}
	.tees{
		color: #000000;
	}
</style>
