<template>
	<view>
		<uni-search-bar @confirm="" @input="" placeholder="请输入搜索内容" />
		<view class="content">
			<view class="contentNav">
				<view class="item" v-for="(title, index) in servercategory" :key="index">
					{{ title }}
				</view>
			</view>

			<view class="contentList">
				<scroll-view scroll-y="true" class="warp">
					<view class="text">便民服务</view>
					<view class="rowBox">
						<view class="row" v-for="(item, index) in dynamicList" :key="item.id"
							v-if="item.serviceType == '便民服务'" @click="getServer(item.id)">
							<image :src="baseUrl + item.imgUrl" mode="aspectFill"></image>
							<view class="title">
								<text>{{item.serviceName}}</text>
							</view>
						</view>
					</view>

					<view class="text">生活服务</view>
					<view class="rowBox">
						<view class="row" v-for="(item, index) in dynamicList" :key="item.id"
							v-if="item.serviceType == '生活服务'"  @click="getServer(item.id)">
							<image :src="baseUrl + item.imgUrl" mode="aspectFill"></image>
							<view class="title">
								<text>{{item.serviceName}}</text>
							</view>
						</view>
					</view>

					<view class="text">车主服务</view>
					<view class="rowBox">
						<view class="row" v-for="(item, index) in dynamicList" :key="item.id"
							v-if="item.serviceType == '车主服务'"  @click="getServer(item.id)">
							<image :src="baseUrl + item.imgUrl" mode="aspectFill"></image>
							<view class="title">
								<text>{{item.serviceName}}</text>
							</view>
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
				servercategory: [],
				baseUrl: 'https://45.125.46.201:16698'
			}
		},
		mounted() {
			this.getServerTitle();
			this.getServerlist();
		},
		methods: {
			//获取服务类别
			getServerTitle() {
				uni.request({
					url: "https://45.125.46.201:16698/prod-api/api/service/list",
					method: 'GET',
					sslVerify: false,
					success: res => {
						console.log(res);
						const uniqueTitles = new Set(); // 使用 Set 存储唯一的标题
						res.data.rows.forEach(item => {
							uniqueTitles.add(item.serviceType); // 将标题添加到 Set 中
						});
						this.servercategory = Array.from(uniqueTitles); // 将 Set 转换为数组，并赋值给 servercategory
					},
					fail: function(err) {
						console.log(err); // 打印错误信息
						// 处理请求失败的情况
					}
				});
			},
			//获取服务列表
			getServerlist() {
				uni.request({
					url: "https://45.125.46.201:16698/prod-api/api/service/list",
					methods: 'GET',
					sslVerify: false,
					success: res => {
						console.log(res);
						this.dynamicList = res.data.rows

					},
					fail: function(err) {
						console.log(err); // 打印错误信息
						// 处理请求失败的情况
					}
				})
			},
			getServer(id){
				console.log(id);
				if(id == 3){
					uni.navigateTo({
						
					})
					return;
				}
				uni.showToast({
					icon:"error",
					title:"正在开发中"
				})
			}


		}
	}
</script>

<style lang="less">
	.content {
		width: 95vw;
		height: 100%;
		margin: 0 auto;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;

		.contentNav {
			width: 200rpx;
			height: 100%;
			background-color: gainsboro;
			display: flex;
			flex-direction: column;

			.item {
				font-size: 30rpx;
				margin: 20rpx;
			}
		}

		.contentList {
			flex: 1;
			height: 100%;
			display: flex;
			flex-direction: column;

			.warp {
				width: 100%;
				height: auto;

				.text {
					font-size: 40rpx;
					margin: 25rpx 10rpx;
				}

				.rowBox {
					width: 100%;
					height: auto;
					display: flex;
					flex-wrap: wrap;
					align-items: center;
					justify-content: space-around;
					.row {
						width: 32%;
						height: 80px;
						display: flex;
						flex-direction: column;
						align-items: center;
						image {
							width: 50px;
							height: 50px;
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
	}
</style>