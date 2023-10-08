<template>
	<view class="news">
		<scroll-view class="newNav" scroll-x>
			<view class="item" :class="index == navIndex ? 'active' : ''" v-for="(item,index) in 6" @click="clickNav(index)"
				:key="item.id">今日要闻</view>
		</scroll-view>
		<view class="newContent">
			<view class="row" v-for="item in 10">
				<view class="pic">
					<image src="../../../../static/image/pic/专题2.jpg" mode=""></image>
				</view>
				<view class="text">
					<view class="title">Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit
						amet consectetur adipisicing elit.</view>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				navIndex:0

			}
		},
		methods: {
			clickNav(index) {
				this.navIndex = index;
			},

		}
	}
</script>
<style lang="scss">
	.news{
		margin-top: 30rpx;
		.newNav {
			height: 100rpx;
			background-color: #f7f8fa;
			// 不换行
			white-space: nowrap;
		
			/deep/ ::-webkit-scrollbar {
				width: 4px !important;
				height: 1px !important;
				overflow: auto !important;
				background: transparent !important;
				-webkit-appearance: auto !important;
				display: block;
			}
		
			.item {
				font-size: 40rpx;
				display: inline-block;
				line-height: 40rpx;
				border: 1rpx solid blue;
				padding: 0 30rpx;
				&.active{
					background-color: blue;
				}
			}
		}
		
		.newContent {
			display: flex;
			flex-direction: column;
		
			.row {
				display: flex;
		
				.pic {
					width: 230rpx;
					height: 160rpx;
		
					image {
						width: 100%;
						height: 100%;
					}
				}
		
				.text {
					flex: 1;
					display: flex;
					align-items: center;
					padding-left: 20rpx;
		
					.title {
						font-size: 38rpx;
						color: #333;
						// 两行省略号
						text-overflow: -o-ellipsis-lastline;
						overflow: hidden; //溢出内容隐藏
						text-overflow: ellipsis; //文本溢出部分用省路号表示
						display: -webkit-box; //特别显示模式
						-webkit-line-clamp: 2; //行数
						line-clamp: 2;
						-webkit-box-orient: vertical; //盒子中内容竖直排列
					}
				}
			}
		}
	}
</style>