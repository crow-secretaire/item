<template>
	<view>
		<view class="fenle_text_1">
			<text :class="s===-1?'colr':''" @click="genre(-1)">全部</text>
			<text :class="s===1?'colr':''" @click="genre(1)">男歌手</text>
			<text :class="s===2?'colr':''" @click="genre(2)">女歌手</text>
			<text :class="s===3?'colr':''" @click="genre(3)">乐队</text>
		</view>
		<view class="fenle_text_2">
			<text :class="g===-1?'colr':''" @click="singer(-1)">全部</text>
			<text :class="g===7?'colr':''" @click="singer(7)">话语</text>
			<text :class="g===96?'colr':''" @click="singer(96)">欧美</text>
			<text :class="g===8?'colr':''" @click="singer(8)">日本</text>
			<text :class="g===16?'colr':''" @click="singer(16)">韩国</text>
			<text :class="g===0?'colr':''" @click="singer(0)">其他</text>
		</view>
		<view class="">
			<view class="flex waib" v-for="item,index in ges" @click="tiaoz(item.id,index)">
				<view class="tubiao">
					<image :src="item.img1v1Url" class="img"></image>
				</view>
				<view class="text">
					<text>{{item.name}}</text>
				</view>
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
				s: -1,
				g: -1,
				ges: []
			}
		},
		methods: {
			genre(v) {
				this.s = v
				this.sjian()
			},
			singer(v) {
				this.g = v
				this.sjian()
				console.log(this.ges);
			},
			sjian(e) {
				src(`/artist/list?type=${this.s}&area=${this.g}`).then(data => {
					console.log(data);
					this.ges = data.data.artists
				})
			},
			tiaoz(id,index){
				uni.navigateTo({
					url:`../list/list?id=${id}&type=${this.s}&area=${this.g}&index=${index}`
				})
			}
		},

		created() {
			this.sjian()
		}
	}
</script>

<style scoped>
	.colr {
		color: #ff557f;
	}

	.fenle_text_1,
	.fenle_text_2 {
		width: 100%;
		padding: 2% 5%;
	}

	.fenle_text_1 text,
	.fenle_text_2 text {
		display: inline-block;
		width: 15%;
		font-size: 24rpx;
	}
	.waib{
		padding: 30rpx 30rpx 0 30rpx;
	}
	waib:hover{
		background-color: #eee;
	}
	.tubiao {
		width: 100rpx;
		height: 100rpx;
		border-radius: 50px;
		overflow: hidden;
		display: flex;
		align-items: center;
	}

	.img {
		width: 100%;
		height: 100%;
	}
	.text {
		margin-left: 30rpx;
		display: flex;
		align-items: center;
		font-size: 26rpx;
	}
</style>
