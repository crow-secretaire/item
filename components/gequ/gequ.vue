<template>
	<view>
		<view class="geq" v-for="item,index in name" :key="item.id" @click="tz(item.id)">
			<view class="flex">
				<view class="geq_index">
					{{index+1}}
				</view>
				<view class="geq_nmae">
					<view class="">
						{{item.name}}
					</view>
					<view class="geq_nmae_text">
						<image src="../../static/vr播放器.png" mode=""></image>
						<image src="../../static/听歌.png" mode=""></image>
						{{item.alia[0] || item.ar[0].name }}
					</view>
				</view>
				<view class="geq_index geq_log ">
					❤
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"gequ",
		data() {
			return {
				
			};
		},
		methods:{
			tz(v){
				uni.navigateTo({
					url:`/pages/gioca/gioca?id=${v}`
				})
			}
		},
		props:['name']
	}
</script>

<style scoped>
	.geq {
		font-size: 14px;
		padding: 20rpx;
	}

	.geq_index {
		height: 100rpx;
		color: #6d7b7c;
		width: 10%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.geq_nmae {
		width: 90%;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.geq_nmae_text {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.geq_nmae_text image {
		width: 40rpx;
		height: 40rpx;
		vertical-align: top;
		margin-left: 10rpx;
	}

	.geq_log {
		font-size: 20px;
		color: #aaffff;
	}
	.wxh{
		width: 100%;
		padding: 0 20rpx;
	}
	.wxh_Tex{
		font-size: 45rpx;
		color: #fff;
	}
	.wxh_con{
		display: flex;
		width: 100%;
	}
	.wxh_img{
		width: 20%;
	}
	.wxh_img image{
		width: 100%;
		height: 100%;
	}
	.wxh_flex{
		width: 70%;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
	}
</style>