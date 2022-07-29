<template>
	<view class="">
		<view class="baji" :style="`background-image: url(${ming.coverImgUrl});`"></view>
		<top :haed="ming.name" :text="true"></top>
		<view class="wenzi">
			<view class="flex">
				<view class="img">
					<text class="img_text">{{fun()}}</text>
					<image :src="ming.coverImgUrl" mode="aspectFill"></image>
				</view>
				<view class="wenzi_text">
					<view class="text_top">
						云音乐{{ming.name}}
					</view>
					<view class="text_content">
						♬ ♬ 音乐 ♬ ♬
					</view>
					<view class="text_buttom">
						{{ming.description}}
					</view>
				</view>
			</view>
			<!-- #ifdef MP-WEIXIN -->
			<button class="buttonme" open-type="share">￠ 分享给微信好友</button>
			<!-- #endif -->
		</view>
		<view class="song flex">
			<view class="song_consten">
				<view class="song_top">
					<image src="../../static/播放.png"></image>
					<text>播放全部 </text>
					<text class="song_top_text">共{{ming.trackCount}}首</text>
					<gequ :name='ming.tracks'></gequ>
				</view>
			</view>
			<gequ></gequ>
		</view>
	</view>
</template>

<script>
	import {
		src
	} from "../../url/url.js"
	export default {
		data() {
			return {
				ming: []
			}
		},
		onLoad(v) {
			src(`/playlist/detail?id=${v.id}`).then(data => {
				console.log(data.data.playlist);
				this.ming = data.data.playlist
			})
		},
		methods: {
			fun(){
				console.log(this.ming.subscribedCount);
				if(this.ming.subscribedCount >100000){
					return (this.ming.subscribedCount / 100000).toFixed(1) + '万'
				}
			}
		},
		watch:{
		
			
		}
	}
</script>

<style scoped>
	.baji {
		z-index: 0;
		width: 100%;
		height: 100vh;
		position: absolute;
		top: 0;
		left: 0;
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center 0;
		filter: blur(10rpx);
	}

	.wenzi {
		z-index: 100;
		padding: 40rpx;
		font-size: 24rpx;
		color: #fff;
		display: flex;
		flex-direction: column; 
	}
	.img {
		width: 250rpx;
		height: 250rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 20rpx;
		overflow: hidden;
		position: relative;
	}

	.img image {
		width: 100%;
		height: 100%;
	}
	.img_text{
		z-index: 10000;
		position: absolute;
		top: 10rpx;
		right: 10rpx;
	}

	.wenzi_text {
		z-index: 100;
		flex: 1;
		margin-left: 20rpx;
	}

	.text_top {
		font-size: 36rpx;
	}

	.text_content {
		padding: 20rpx 0;
		color: #eaeaea;
	}

	.text_buttom {
		color: #eaeaea;
	}

	.song {
		width: 100%;
	}

	.song_consten {
		margin: 0 auto;
		width: 100%;
		box-sizing: border-box;
		padding: 30rpx 30rpx;
		background: #fff;
		z-index: 100;
		border-radius: 20rpx 20rpx 0 0;
	}

	.song_top image {
		width: 50rpx;
		height: 50rpx;
		vertical-align: top;
		margin-right: 20rpx;
		font-size: 30rpx;
	}
	.song_top_text{
		font-size: 28rpx;
		color: #939393;
	}
	.buttonme{
		border-radius: 30px;
		background-color: rgba(236, 236, 236, 0.5);
		color: #fff;
		margin-top: 30rpx;
		font-size: 28rpx;
	}
</style>
