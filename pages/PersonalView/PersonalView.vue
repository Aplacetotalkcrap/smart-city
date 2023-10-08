<template>
	<view>
		<view class="person">
			<view class="head">
				<image src="../../static/uni.png" mode=""></image>
				<text>Geng.</text>
			</view>
			<view class="form" v-for="item in 4">
				<text>个人设置</text>
				<image src="../../static/image/icon/更多3.png" mode=""></image>
			</view>
			<button type="primary">退出登录</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">
	.person {
		.form{
			width: 700rpx;
			height:100rpx;
			border-bottom: 1rpx solid black;
			margin: 0 auto;
			display: flex;
			justify-content: space-between;
			align-items: center;
			background-color: aliceblue;
			image{
				width: 20rpx;
				height: 20rpx;
			}
		}
		.head {
			margin: 90rpx auto;
			text-align: center;
			image {
				width: 100rpx;
				height: 100rpx;
			}

			text {
				display: block;
				font-size: 40rpx;
			}
		}
		button{
			margin-top: 30rpx;
		}
	}
</style>