<template>
	<view>
		<top haed="搜索" :text="true" color="true"></top>
			<view class="search">
				<input v-model="inut" @confirm="scehosts(inut)" type="text" class="input" placeholder="搜索歌曲">
				<image @click="xs=1" v-if="xs===2" class="search_image" src="../../static/叉叉.png"></image>
			</view>
		<view class="" v-if="xs===1">
			<view class="lis">
				<text>历史记录</text>
				<image src='../../static/首页_fill.png' @click="deletes"></image>
			</view>
			<view class="ls">
				<text class="ls_text" v-for="item in scehost" :key="item" @click="gaibian(item)">{{item}}</text>
			</view>
			<view class="lis re">
				<text>热搜榜</text>
			</view>
			<view class="resou" v-for="item,index in res" :key="item.id" @click="gaibian(item.searchWord)">
				<view class="resou_1 flex">
					{{index}}
				</view>
				<view class="resou_2">
					<view class="">
						{{item.searchWord}}
			
						<img v-show="item.iconUrl !== null" :src="item.iconUrl" class="resou_2_text" />
					</view>
					<view class="resou_2_2">
						{{item.content}}
					</view>
				</view>
				<view class="resou_3 flex">
					{{item.score}}
				</view>
			</view>
		</view>
		<!-- 搜索 -->
		<view class="" v-if="xs===2">
			<view class="ssu" v-for="item in seoushuo" @click="tiaozhuan(item.id)">
				<view class="ssu_flex">
					<view class="ssu_tet">
						{{item.name}}
					</view>
					<view class="">
						{{item.artists[0].name}} - {{item.album.name}}
					</view>
				</view>
				<view class="ssu_img">
					☜☞
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
				inut:'',
				res: [],
				scehost:[],
				xs:1,
				seoushuo:[]
			}
		},
		methods: {
			gaibian(v){
				this.inut = v
			},
			scehosts(v){
				if(v != ''){
					this.scehost.unshift(v)
					this.scehost = [...new Set(this.scehost)]
					if(this.scehost.length>10){
						this.scehost.length = 10
					}
					uni.setStorage({
						key:"scehost",
						data:this.scehost,
					})
				}
				this.ss(v)
			},
			ss(v){
				src(`/search?keywords=${v}`).then(data => {
					console.log(data.data.result.songs)
					this.seoushuo = data.data.result.songs
					this.xs =2
				})
			},
			deletes(){
				uni.removeStorage({
					key:"scehost",
					success:(res)=>{
						console.log(res);
						this.scehost = []
					}
				})
			},
			tiaozhuan(v){
					uni.navigateTo({
						url:`/pages/gioca/gioca?id=${v}`
					})
			}
		},
		mounted() {
			// 热搜接口
			src('/search/hot/detail').then(data => {
				console.log(data.data.data)
				this.res = data.data.data
			})
			// 获取历史记录
			uni.getStorage({
				key:'scehost',
				success:(res)=>{
					this.scehost = res.data
				}
			})
		}
	}
</script>

<style scoped>
	.input {
		font-size: 24rpx;
		border-radius: 20rpx;
		background-color: #f5f5f5;
		padding: 15rpx 40rpx;
		width: 80%;
		margin: 30rpx auto;
	}

	.lis {
		display: flex;
		justify-content: space-between;
		padding: 0 20rpx;
		font-size: 26rpx;
		margin-bottom: 20rpx;
	}

	.lis image {
		width: 40rpx;
		height: 40rpx;
	}

	.ls {
		display: flex;
		flex-wrap: wrap;
		padding: 0 20rpx;
	}

	.ls_text {
		margin: 10rpx 10rpx;
		font-size: 24rpx;
		padding: 16rpx 28rpx;
		border-radius: 40px;
		background-color: #ececec;
		text-align: center;
	}

	.re {
		margin-top: 20rpx;
	}

	.resou {
		display: flex;
		padding: 0 20rpx;
		height: 100rpx;
		font-size: 26rpx;
		margin: 15rpx 0;
	}

	.resou_1 {
		width: 10%;
		justify-content: center;
		align-items: center;
		color: #ff0000;
	}

	.resou_2 {
		width: 70%;
		display: flex;
		justify-content: space-around;
		flex-direction: column;
	}

	.resou_2_text {
		width: 48rpx;
		height: 22rpx;
		vertical-align: bottom;
	}

	.resou_2_2 {
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.resou_3 {
		width: 20%;
		justify-content: center;
		align-items: center;
		color: #cbcbcb;
	}
	.search{
		position: relative;
	}
	.search_image{
		width: 30rpx;
		height: 30rpx;
		position: absolute;
		right: 50rpx;
		top: 17rpx;
	}
	.ssu{
		display: flex;
		justify-content: space-between;
		padding: 20rpx 50rpx;
		border-bottom: 1px solid #eee;
		font-size: 24rpx;
	}
	.ssu_tet{
		color: #550000;
	}
	.ssu_flex{
		height: 80rpx;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.ssu_img{
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
