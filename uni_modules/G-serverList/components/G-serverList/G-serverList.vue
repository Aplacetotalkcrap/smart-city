<template>
	<view class="warp">
		<view class="text">便民服务</view>
		<view class="row" v-for="item in 9">
			<image src="/static/image/pic/城市地铁@2x.png" mode="aspectFill"></image>
			<view class="title">
				<text>教育</text>
			</view>
		</view>
	</view>
</template>
<script>
</script>
<style>
		.text {
			font-size: 40rpx;
			margin: 25rpx 10rpx;
		}

		.row {
			display: inline-block;
			margin: 10rpx 40rpx 10rpx 35rpx;

			image {
				width: 100rpx;
				height: 100rpx;
			}

			.title {
				text-align: center;

				text {
					font-size: 20rpx;
				}
			}

		}

	
</style>