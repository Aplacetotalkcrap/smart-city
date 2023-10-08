<!-- 本示例未包含完整css，获取外链css请参考上文，在hello uni-app项目中查看 -->
<template>
	<view>
		<view class="uni-margin-wrap">
			<swiper class="swiper" circular :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval"
				:duration="duration">
				<swiper-item v-for="(item,index) in swiperList" :key="item.id">
					<view  class="swiper-item uni-bg-red">
						<image :src="baseUrl + item.advImg" mode="aspectFill"></image>
					</view>
				</swiper-item>

			</swiper>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				background: ['color1', 'color2', 'color3'],
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500,
				swiperList:[],
				baseUrl:'https://45.125.46.201:16698'
			}
		},
		mounted() {
			this.GetSwiper();
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

			//获取轮播图数据
			GetSwiper() {
				uni.request({
				  url: "https://45.125.46.201:16698/prod-api/api/rotation/list",
				  method: 'GET',
				  sslVerify:false,
				  success:res=>{
				    console.log(res); // 在控制台打印接口返回的数据
				    // 处理接口返回的数据
					this.swiperList = res.data.rows
				  },
				  fail: function (err) { 
				    console.log(err); // 打印错误信息
				    // 处理请求失败的情况
				  }
				});
			
			
			}
		}
	}
</script>

<style lang="scss">
	.uni-margin-wrap {
		width: 690rpx;
		width: 100%;
	}

	.swiper {
		height: 300rpx;
	}

	.swiper-item {
		display: block;
		height: 300rpx;
		line-height: 300rpx;
		text-align: center;

		image {
			width: 720rpx;
		}
	}
</style>