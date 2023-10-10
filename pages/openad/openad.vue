<!-- 本示例未包含完整css，获取外链css请参考上文，在hello uni-app项目中查看 -->
<template>
	<view>
		<view class="uni-margin-wrap">
			<swiper class="swiper" circular :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval"
				:duration="duration">
				<swiper-item v-for="(item,index) in adList" :key="item.id">
					<view class="swiper-item uni-bg-red">
						<image :src="baseUrl + item.advImg" mode="aspectFill"></image>
					</view>
				</swiper-item>
			</swiper>
			<button class="button" type="primary" @click="login">立即体验</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				baseUrl: 'https://45.125.46.201:16698',
				background: ['color1', 'color2', 'color3'],
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500,
				adList:[]
			}
		},
		mounted() {
			this.getad();
		},
		methods: {
			changeIndicatorDots(e) {
				this.indicatorDots = !this.indicatorDots
			},
			changeAutoplay(e) {
				this.autoplay = !this.autoplay
			},
			intervalChange(e) {
				this.interval = e.target.value
			},
			durationChange(e) {
				this.duration = e.target.value
			},
			getad() {
				uni.request({
					url: "https://45.125.46.201:16698/prod-api/api/volunteer-service/ad-banner/list",
					methods: 'GET',
					sslVerify: false,
					success: res => {
						console.log(res);
						// this.adList = res.data.rows.slice(0,1)
					}
				})
			},
			login(){
				uni.navigateTo({
					url:"/pages/loginview/loginview"
				})
			}
		}
	}
</script>

<style>
	.uni-margin-wrap {
		width: 690rpx;
		width: 100%;
		height: 90vh;
	}

	.swiper {
		height: 90vh;
	}

	.swiper-item {
		display: block;
		height: 90vh;
		line-height: 90%;
		text-align: center;
	}
	
	image{
		width: 700rpx;
		height: 100vh;
	}

	.swiper-list {
		margin-top: 40rpx;
		margin-bottom: 0;
	}

	.uni-common-mt {
		margin-top: 60rpx;
		position: relative;
	}

	.info {
		position: absolute;
		right: 20rpx;
	}

	.uni-padding-wrap {
		width: 550rpx;
		padding: 0 100rpx;
	}
	.button{
		width: 200rpx;
		height: 90rpx;
		position: fixed;
		bottom: 200rpx;
		left: 35vw;
	}
</style>