<template>
	<view>
		<uni-search-bar @confirm="" @input="" placeholder="请输入搜索内容" />
		<view class="content">
			<view class="contentNav">
				<view class="item" v-for="item in 3">便民服务</view>
			</view>
			<view class="contentList">
				<scroll-view scroll-y="true" class="warp">
					<view class="text">便民服务</view>
					<view class="row" v-for="item in 9">
						<image src="/static/image/pic/城市地铁@2x.png" mode="aspectFill"></image>
						<view class="title">
							<text>教育</text>
						</view>
					</view>


				</scroll-view>


			</view>


		</view>
	</view>
</template>
<script>
	export default {
		components: {},
		data() {
			return {
				dynamicList: [],
			}
		},
		methods: {

		}
	}
</script>

<style lang="scss">
	.content {
		width: 730rpx;
		margin: 0 auto;
		display: flex;

		.contentNav {
			width: 200rpx;
			height: 1134rpx;
			background-color: gainsboro;
			display: flex;
			flex-direction: column;

			.item {
				font-size: 30rpx;
				margin: 20rpx;
			}
		}

		.contentList {
			width: 550rpx;
			background-color: aqua;
			display: flex;
			flex-direction: column;

			.warp {
				border-bottom: 1px solid black;

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
			}
		}
	}
</style>