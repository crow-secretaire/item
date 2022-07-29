<template>
	<view class="const">
		<view class="baji" :style="`background-image: url(${img});`"></view>
		<view class="qianping">
			<top :haed="details.name" :text="true"></top>
			<swiper class="swiper">
				<swiper-item class="">
					<view class="ad_img">
						<view class="img" :class="imge?'imge':''">
							<image class="img_1" src="../../static/光碟1.png" mode=""></image>
							<image class="img_2" :src="img" mode=""></image>
						</view>

					</view>
				</swiper-item>
				<!-- 歌词 -->
				<swiper-item class="">
					<view class="text">
						<view class="text_oo" :style="`margin-top: ${gc*-84+225}rpx;`">
							<view :class="gc===index?'colo':''" v-for="item,index in lyric" :key="item.id">
								{{item.lyric}}
							</view>
						</view>
					</view>
				</swiper-item>
			</swiper>
			<!-- 我喜欢 -->
			<view class="bofang">
				<view class="">
					<image src="../../static/爱心.png" mode=""></image>
				</view>
				<view class="">
					<image src="../../static/下载.png" mode=""></image>
				</view>
				<view class="">
					<image src="../../static/歌唱.png" mode=""></image>
				</view>
				<view class="">
					<image src="../../static/评论.png" mode=""></image>
				</view>
				<view class="">
					<image src="../../static/点点.png" mode=""></image>
				</view>
			</view>
			<!-- 进度条 -->
			<view class="flex jindu">
				<view class="jindu_z">
					<view class="jindu_qiou" :style='`left: ${jjt}%`'>
					</view>
				</view>

			</view>
			<!-- 播放暂停 -->
			<view class="qihuan">
				<view class="qihuan_1">
					<image @click="s" src="../../static/上.png" mode=""></image>
				</view>
				<view class="qihuan_2">
					<image @click="imgClick" :src="imge?'../../static/播放1.png':'../../static/暂停.png'" mode="">
					</image>
				</view>
				<view class="qihuan_3">
					<image @click="x" src="../../static/下.png" mode=""></image>
				</view>
			</view>
		</view>

		<!-- 喜欢听 -->
		<view class="wxh">
			<view class="wxh_Tex">
				<text>喜欢这首歌的人也听</text>
			</view>
			<view class="wxh_con" v-for="item in similarity" :key="item.id" @click="qiehuan(item.id)">
				<view class="wxh_img flex">
					<image :src="item.album.blurPicUrl" mode=""></image>
				</view>
				<view class="wxh_flex">
					<view class="">
						{{item.name}}
					</view>
					<view class="">
						{{item.artists[0].name}}
					</view>
				</view>
				<view class="wxh_img1 flex">
					<image src="../../static/播放1.png" mode=""></image>
				</view>
			</view>
		</view>
		<!-- 精彩评论 -->
		<view class="wxh">
			<view class="wxh_Tex">
				<text>暖心评论</text>

			</view>
			<view class="flex pl" v-for="item in discuss" :key="item.id">
				<view class="dianz">
					{{item.likedCount}} ♥
				</view>
				<view class="pl_box1 flex">
					<image class="pl_image" :src="item.user.avatarUrl" mode=""></image>
				</view>
				<view class="pl_box2">
					<view class="pl_text_color">
						{{item.user.nickname}}
					</view>
					<view class="pl_text_color">
						{{sj}}{{item.timeStr}}
					</view>
					<view class="">
						{{item.content}}
					</view>
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
				// 获取歌单详情
				details: [],
				// 获取歌词
				lyric: [],
				// 获取评论
				discuss: [],
				// 相似歌曲
				similarity: [],
				// 音乐地址
				site: [],
				//  图片
				img: '',
				// 控制歌词
				gc: 0,
				// 播放
				bgAudioManager: '',
				imge: false,
				a: 0,
				settiems: 0,
				gettiems: 0,
				xixix: 0,
				jjt: 0,
				sss:0
			}
		},
		onLoad(v) {
			this.sss = v.id
			this.gequ(v.id)
		},
		methods: {
			jdu(v) {
				console.log(this.site.size / 10000);
				let aa = this.site.size / 10000
				console.log(1);
				let ds = setInterval(() => {
					if (this.imge == true) {
						clearInteval(ds)
					}
					this.jjt += 0.1
				}, aa)
			},
			imgClick() {
				this.imge = !this.imge
				if (!this.imge) {
					return this.bgAudioManager.play()
				}
				this.bgAudioManager.pause()
				this.fun()
				clearTimeout(this.ds)
			},
			fun() {
				if (this.imge == true) {
					return
				}
				this.settiems = Date.now()
				let ayy = this.settiems - this.gettiems
				let Nubb = 0
				if (ayy - this.a < 100000) {
					Nubb = (ayy - this.a) * -1
				}
				let a = (this.lyric[this.gc + 1].tiem - this.lyric[this.gc].tiem) * 1000 + this.xixix
				this.xixix = Nubb
				this.a = a
				this.gettiems = Date.now()
				if (this.imge == true) {
					a = 0
				}
				this.ds = setTimeout(() => {
					if (this.imge == true) {
						clearTimeout(this.ds)
						return
					}
					this.gc++
					this.fun()
				}, a)
			},
			qiehuan(v) {
				this.gc = 0
				this.gequ(v)
				return this.bgAudioManager.stop()
			},
			s(){
				this.imge = false
				this.gequ('1963423017')
			},
			x(){
				this.imge = false
				this.gequ('1952928935')
			},
			gequ(v) {
				this.jjt = 0
				// /song/detail?ids=347230    获取歌单详情
				src(`/song/detail?ids=${v}`).then(data => {
					if (data.data.code === -460) {
						return alert(data.data.message)
					}
					this.details = data.data.songs[0]
					this.img = data.data.songs[0].al.picUrl
				})
				// /lyric?id=33894312				获取歌词
				src(`/lyric?id=${v}`).then(data => {
					if (data.data.code === -460) {
						return alert(data.data.message)
					}
					let lyric = data.data.lrc.lyric
					let r = /\[([^\]]+)\]([^\[]+)/g
					let arr = []
					lyric.replace(r, function($0, $1, $2) {
						let a = $1.split(":")
						let v = a[0] * 60 + (a[1] * 1).toFixed(3) * 1
						arr.push({
							"tiem": v,
							"lyric": $2
						})
					})
					this.lyric = arr
					// /song/url?id=					音乐地址
					src(`/song/url?id=${v}`).then(data => {
						this.site = data.data.data[0]
						console.log(data.data.data[0]);
						// #ifdef MP-WEIXIN
						this.bgAudioManager = uni.getBackgroundAudioManager();
						this.bgAudioManager.title = this.details.name;
						// #endif
						// #ifdef H5
						this.bgAudioManager = uni.createInnerAudioContext();
						this.imge = true
						// #endif
						this.bgAudioManager.src = data.data.data[0].url
						// 播放事件
						this.bgAudioManager.onPlay(() => {
							this.fun()
							this.jdu()
						})
						// 结束播放
						this.bgAudioManager.onEnded(() => {
							this.gequ(this.similarity[0].id)
						})
					})
				})
				// /comment/music?id=186016&limit=1	获取评论
				src(`/comment/music?id=${v}`).then(data => {
					this.discuss = data.data.comments

				})
				// /simi/song?id=347230				相似歌曲
				src(`/simi/song?id=${v}`).then(data => {
					this.similarity = data.data.songs
				})
			}
			
		},
		computed: {
			sj() {
				const dateTime = this.discuss[0].time
				let date = new Date(dateTime)
				let Y = date.getFullYear()
				let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
				let D = date.getDate()
				return Y + "-" + M + D + ":"
			}
		},

	}
</script>

<style scoped>
	.qianping {
		height: 100vh;
	}

	.const {
		width: 100%;
		background-color: #ababab;
	}

	.baji {
		width: 100%;
		height: 100vh;
		position: fixed;
		top: 0;
		left: 0;
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center 0;
		filter: blur(20rpx);
	}

	.ad_img {
		position: relative;
	}

	.img {
		z-index: 1000;
		width: 100%;
		height: 700rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		animation: a 10s infinite linear;
	}

	.imge {
		animation-play-state: paused
	}

	@keyframes a {
		0% {
			transform: rotate(0deg);
		}

		100% {
			transform: rotate(360deg);
		}
	}

	.img_1 {
		width: 500rpx;
		height: 500rpx;
		border-radius: 50%;
	}

	.img_2 {
		width: 160rpx;
		height: 160rpx;
		position: absolute;
		border-radius: 50%;
	}



	.text {
		color: #49d04e;
		display: flex;
		flex-direction: column;
		font-size: 26rpx;
		text-align: center;
		height: 60%;
		overflow: hidden;
		margin: 20% auto;
	}

	.text_oo {
		transition: 2s;
	}

	.text view {
		z-index: 1000;
		padding-bottom: 50rpx;
	}

	.wxh {
		width: 100%;
		padding: 0 20rpx;
		box-sizing: border-box;
		color: #fff;
	}

	.wxh_Tex {
		display: flex;
		font-size: 38rpx;
		color: #fff;
		padding: 20rpx 0;
	}

	.wxh_Tex text {
		z-index: 1000;
	}

	.wxh_con {
		display: flex;
		width: 100%;
		padding: 20rpx 0;
	}

	.wxh_img {
		width: 20%;
		justify-content: center;
		align-items: center;
	}

	.wxh_img image {
		width: 80rpx;
		height: 80rpx;
		border-radius: 30rpx;
	}

	.wxh_flex {
		z-index: 1000;
		width: 70%;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
	}

	.wxh_img1 {
		width: 10%;
		justify-content: center;
		align-items: center;
	}

	.wxh_img1 image {
		width: 50rpx;
		height: 50rpx;
		border-radius: 30px;
	}

	.pl {
		position: relative;
		padding: 20rpx 0;
	}

	.pl_box1 {
		width: 20%;
		justify-content: center;
	}

	.pl_box2 {
		width: 80%;
	}

	.pl_image {
		width: 60rpx;
		height: 60rpx;
		border-radius: 50%;
	}

	.pl_text_color {
		color: #d0d0d0;
	}

	.dianz {
		position: absolute;
		right: 0;
	}

	.colo {
		color: #fff;
	}

	.swiper {
		width: 100%;
		height: 850rpx;
	}

	.bofang {
		display: flex;
		justify-content: space-around;
		padding: 20rpx 0rpx;
	}

	.bofang image {
		width: 50rpx;
		height: 50rpx;
	}

	.qihuan {
		width: 70%;
		margin: 0 auto;
		display: flex;
		justify-content: space-around;
	}

	.qihuan view {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.qihuan image {
		width: 80rpx;
		height: 80rpx;
	}

	.qihuan_2 image {
		width: 120rpx;
		height: 120rpx;
	}

	.jindu {
		padding: 20rpx 0;
	}

	.jindu_z {
		position: relative;
		margin: 0 auto;
		z-index: 111;
		width: 80%;
		border-top: 2px solid #ffffff;
	}

	.jindu_qiou {
		position: absolute;
		width: 30rpx;
		height: 30rpx;
		border-radius: 50%;
		transform: translate(-50%, -50%);
		background-color: #e5e5e5;
		transition: 1s linear;
	}
</style>
