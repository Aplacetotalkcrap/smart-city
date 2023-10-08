<template>
	<view class="smartcity">
		<!-- 轮播图 -->
		<G-swiper></G-swiper>
		<!-- 推荐服务 -->
		<view class="recommend">
			<G-listOrigin></G-listOrigin>
			<text>推荐服务</text>
			<view class="recommendNav">
				<view class="item">
					<image src="/static/image/pic/停哪儿@2x.png" mode=""></image>
					<text>停哪儿</text>
				</view>
				<view class="item">
					<image src="/static/image/pic/停哪儿@2x.png" mode=""></image>
					<text>城市地铁</text>
				</view>
				<view class="item">
					<image src="/static/image/pic/停哪儿@2x.png" mode=""></image>
					<text>智慧巴士</text>
				</view>
				<view class="item">
					<image src="/static/image/pic/停哪儿@2x.png" mode=""></image>
					<text>门诊预约</text>
				</view>
				<view class="item">
					<image src="/static/image/pic/停哪儿@2x.png" mode=""></image>
					<text>智慧交管</text>
				</view>
			</view>
		</view>
		<!-- 专题 -->
		<view class="specialSubject">
		 	<G-listOrigin></G-listOrigin>
		 	<text>专题</text>
			<view class="specialSubjectContent">
				<view class="row">
					<image src="../../static/uni.png" mode="aspectFill"></image>
					<view class="title">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						 Nemo accusamus obcaecati id temporibus possimus mollitia quaerat omnis aliquam deserunt ducimus!
					</view>
				</view>
				<view class="row">
					<image src="../../static/uni.png" mode="aspectFill"></image>
					<view class="title">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						 Nemo accusamus obcaecati id temporibus possimus mollitia quaerat omnis aliquam deserunt ducimus!
					</view>
				</view>
				<view class="row">
					<image src="../../static/uni.png" mode="aspectFill"></image>
					<view class="title">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						 Nemo accusamus obcaecati id temporibus possimus mollitia quaerat omnis aliquam deserunt ducimus!
					</view>
				</view>
				<view class="row">
					<image src="../../static/uni.png" mode="aspectFill"></image>
					<view class="title">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						 Nemo accusamus obcaecati id temporibus possimus mollitia quaerat omnis aliquam deserunt ducimus!
					</view>
				</view>
			</view>
	</view>
		<!-- 新闻 -->
		<G-new></G-new>
	</view>	
</template>

<script>
	export default {
		data() {
			return {
			}
			
		},
		mounted() {
		
		},
		methods: {

		}
	}
</script>

<style lang="scss">
		.recommend{
			margin-top: 40rpx;
			text{
				display: inline-block;
				font-size: 35rpx;
			}
			.recommendNav{
				margin-top: 20rpx;
				display: flex;
				justify-content: space-around;
				.item{
					display: flex;
					flex-direction: column;
					align-items: center;
					image{
						width: 100rpx;
						height: 100rpx;
					}
					text{
						font-size: 20rpx;
					}
				}
			}
		}
		
		.specialSubject{
			margin-top: 50rpx;
			.specialSubjectContent{
				display: flex;
				justify-content: space-around;
				flex-wrap: wrap;
				.row{
					box-sizing: border-box;
					padding: 15px;
					image{
						width: 300rpx;
						height: 150rpx;
					}
					.title{
						width: 300rpx;
						font-size: 20rpx;
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


</style>
