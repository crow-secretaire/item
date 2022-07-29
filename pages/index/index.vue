<template>
	<!-- 搜索框 -->
	<search></search>
	<!-- 轮播 -->
	<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" class="sw">
		<swiper-item v-for="item in lunbo" :key="item.id">
			<image :src="item.imageUrl" mode="scaleToFill" class="img"></image>
		</swiper-item>
	</swiper>
	<!-- 底部 -->
	<view class="flex conu" v-for="item in bangd" :key="item.id" @click="tiaoz(item.id)">
		<view class="flex_1">
			<image :src="item.coverImgUrl" mode=""></image>
			<view class="flex_1_text">
				每天更新
			</view>
		</view>
		<view class="flex_2">
			<view class="flex_2_text" :key="itte.id" v-for="itte,valu in item.tracks">
				{{valu}}. {{itte.first}} -- {{itte.second}}
			</view>
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
				title: false,
				bangd: [],
				lunbo: []
			}
		},
		onLoad() {

		},
		methods: {
		tiaoz(v){
			uni.navigateTo({
				url:`../elenco/elenco?id=${v}`
			})
		}
		},
		created() {
			src('/toplist/detail').then(data => {
				for (var i = 0; i < 4; i++) {
					data.data.list[i]
					this.bangd.push(data.data.list[i])
				}
				// this.bangd = data.data.list
			})
			src('/banner').then(data => {
				this.lunbo = data.data.banners
			})
		}
	}
</script>
<style scoped>
	.img {
		width: 100%;
		height: 100%;
	}

	.conu {
		align-items: center;
		height: 200rpx;
		padding-top: 20rpx;
	}

	.flex_1 {
		width: 40%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;

	}

	.flex_1 image {
		width: 200rpx;
		height: 100%;
		border-radius: 20px
	}

	.flex_2 {
		width: 40%;
		height: 180rpx;
		display: flex;
		flex-direction: column;
		justify-content: space-around;

	}

	.flex_2 view {
		font-size: 24rpx;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap
	}

	.flex_1_text {
		position: absolute;
		bottom: 10rpx;
		color: #fff;
		font-size: 24rpx;
	}

	.sw {
		border-radius: 10px;
		overflow: hidden;
		width: 95%;
		margin: 0 auto;
	}
</style>
