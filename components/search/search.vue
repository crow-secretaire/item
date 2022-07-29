<template>
	<view>
		<view class="sr">
			<view class="mage">
				<image src="../../static/放大镜.png" mode=""></image>
			</view>
			<input type="text" placeholder="搜索歌曲" @click="tz">
		</view>
	</view>
</template>

<script>
	export default {
		name:"search",
		data() {
			return {
				
			};
		},
		methods:{
			tz(){
			uni.navigateTo({
				url:'../../pages/ss/ss'
			})
			}
		}
	}
</script>

<style scoped>
.sr{
	padding: 20rpx 20rpx;
	position: relative;
}
.sr input{
	padding: 15rpx 30rpx 15rpx 80rpx;
	background-color: #eee;
	border-radius: 20px;
	font-size: 28rpx;
}
.mage{
	width: 35rpx;
	height: 35rpx;
	position: absolute;
	top: 40rpx;
	left: 45rpx;
}
.mage image{
	width: 100%;
	height: 100%;
}
</style>