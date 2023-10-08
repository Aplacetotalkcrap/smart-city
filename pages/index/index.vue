<template>
	<view class="smartcity">
		<!-- 轮播图 -->
		<Gswiper></Gswiper>
		<!-- 推荐服务 -->
		<view class="recommend">
			<GlistOrigin></GlistOrigin>
			<text>推荐服务</text>
			<view class="recommendNav">
				<view class="item" v-for="(item,index) in serverList" :key="item.id">
					<image :src="baseUrl + item.imgUrl" mode=""></image>
					<text>{{item.serviceName}}</text>
				</view>
			</view>
		</view> 
		<!-- 专题 -->
		<view class="specialSubject">
			<G-listOrigin></G-listOrigin>
			<text>专题</text>
			<view class="specialSubjectContent">
				<view class="row" v-for="(item,index) in newsList" :key="item.id">
					<image :src="baseUrl + item.cover" mode="aspectFill"></image>
					<!-- 					<view class="title">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						 Nemo accusamus obcaecati id temporibus possimus mollitia quaerat omnis aliquam deserunt ducimus!
					</view> -->
					<div>
						<!-- 使用 v-html 指令渲染包含HTML标签的内容 -->
						<div class="title" v-html="item.content"></div>
					</div>
				</view>
			</view>
		</view>
		<!-- 新闻 -->
		<GNew></GNew>
	</view>
</template>

<script>
	import GNew from "../../components/G-new/G-new.vue"
	import Gswiper from "../../components/G-swiper/G-swiper.vue"
	import GlistOrigin from "../../components/G-listOrigin/G-listOrigin.vue"
	export default {
		data() {
			return {
				baseUrl: 'https://45.125.46.201:16698',
				serverList: [],
				newsList: [],
			}

		},
		mounted() {
			this.gitServer();
			this.getNewList();

		},
		methods: {
			//获取全部服务
			gitServer() {
				uni.request({
					url: "https://45.125.46.201:16698/prod-api/api/service/list",
					methods: 'GET',
					sslVerify: false,
					success: res => {
						console.log(res);
						this.serverList = res.data.rows.slice(0, 5);
					},
					fail: function(err) {
						console.log(err); // 打印错误信息
						// 处理请求失败的情况
					}
				})
			},
			//获取新闻标题
			getNewList() {
				uni.request({
					url: "https://45.125.46.201:16698/prod-api/press/press/list",
					methods: 'GET',
					sslVerify: false,
					success: res => {
						console.log(res);
						this.newsList = res.data.rows.slice(0, 4);
					}
				})
			}
		},
		components:{
			GNew,
			Gswiper,
			GlistOrigin
		}
	}
</script>

<style lang="scss">
	.recommend {
		margin-top: 40rpx;

		text {
			display: inline-block;
			font-size: 35rpx;
		}

		.recommendNav {
			margin-top: 20rpx;
			display: flex;
			justify-content: space-around;

			.item {
				display: flex;
				flex-direction: column;
				align-items: center;

				image {
					width: 100rpx;
					height: 100rpx;
				}

				text {
					font-size: 20rpx;
				}
			}
		}
	}

	.specialSubject {
		margin-top: 50rpx;

		.specialSubjectContent {
			display: flex;
			justify-content: space-around;
			flex-wrap: wrap;

			.row {
				box-sizing: border-box;
				padding: 15px;

				image {
					width: 300rpx;
					height: 150rpx;
				}

				.title {
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