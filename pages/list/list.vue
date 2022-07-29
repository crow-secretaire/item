<template>
	<view class="colr">
		<top :haed="m"></top>
		<view class="yans">
			<view class="yans_img">
				<image :src="ges.img1v1Url" mode=""></image>
			</view>
			<text>TA的歌单 <text>(共{{name.length}}首)</text></text>
			<gequ :name="name"></gequ>
		</view>
	</view>
</template>

<script>
	import {
		src
	} from '../../url/url.js'
	export default {
		data() {
			return {
				name: [],
				m: '',
				url: "",
				ges:[]
			}
		},
		onLoad(v) {
			console.log(v.url);
			this.url = v.url
			src(`/artist/songs?id=${v.id}`).then(data => {
				console.log(data.data.songs);
				this.name = data.data.songs
				this.m = data.data.songs[0].ar[0].name
			})
			src(`/artist/list?type=${v.type}&area=${v.area}`).then(data => {
				console.log(data.data.artists[v.index]);
				this.ges = data.data.artists[v.index]
			})
		},
		methods: {},
		created() {
			console.log(1);
		}
	}
</script>

<style scoped>
	.colr {
		width: 100%;
		background-image: linear-gradient(#d2ecee, #c2ffff, #8cf4ff);
	}

	.yans {
		width: 90%;
		margin: 0 auto;
		margin-top: 200rpx;
		background-color: #ffffff;
		border-radius: 20px 20px 0 0;
		padding: 60rpx 20rpx;
		position: relative;
	}

	.yans_img {
		width: 200rpx;
		height: 200rpx;
		border-radius: 50%;
		overflow: hidden;
		position: absolute;
		top: 0;
		left: 50%;
		transform: translate(-50%, -60%);
	}

	.yans_img image {
		width: 100%;
		height: 100%;
	}


</style>
