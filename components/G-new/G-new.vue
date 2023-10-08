<template>
	<view class="news">
		<scroll-view class="newNav" scroll-x>
			<view class="item" :class="index == navIndex ? 'active' : ''" v-for="(item,index) in newsTitleList"
				@click="clickNav(index,item.id)" :key="item.id">{{item.name}}</view>
		</scroll-view>
		<view class="newContent" @click="godatil">
			<view class="row" v-for="(item,index) in newsList" :key="item.id">
				<view class="pic">
					<image :src="baseUrl + item.cover" mode=""></image>
				</view>
				<!-- <view class="text">
					<view class="title">{{item.content}}</view>
				</view> -->
				<view class="text">
					<span class="title">{{item.content.replace(/<\/?[^>]*>/g, '')}}</span>
					<!-- 使用 v-html 指令渲染包含HTML标签的内容 -->
					<!-- <div class="title" v-html=""></div> -->
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				navIndex: 0,
				newsTitleList: [],
				newsList: [],
				baseUrl: 'https://45.125.46.201:16698'
			}
		},
		mounted() {
			this.getNewTitle();
			this.getNewList();
		},
		methods: {
			clickNav(index,id) {
				this.navIndex = index;
				console.log(id);
				this.getNewTitle(id);
			},
			//获取新闻标题
			getNewTitle(id = 9) {
				uni.request({
					url: "https://45.125.46.201:16698/prod-api/press/category/list",
					methods: 'GET',
					sslVerify: false,
					success: res => {
						console.log(res);
						this.newsTitleList = []
						for(let item of res.data.data){
							this.newsTitleList.push(item)
						}
						console.log(this.newsList);
					},
					fail: function(err) {
						console.log(err); // 打印错误信息
						// 处理请求失败的情况
					}
				})
			},
			//获取新闻详细数据
			getNewList() {
				uni.request({
					url: "https://45.125.46.201:16698/prod-api/press/press/list",
					methods: 'GET',
					sslVerify: false,
					success: res => {
						console.log(res);
						this.newsList = res.data.rows;
					}
				})
			},
			//获取详情页
			godatil(){
				uni.navigateTo({
					url:"/pages/detail/detail"
				})
			}

		}
	}
</script>
<style lang="scss">
	.news {
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

				&.active {
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
						width: 230rpx;
						height: 160rpx;
					}
				}

				.text {
					flex: 1;
					display: flex;
					align-items: center;
					padding-left: 20rpx;

					.title {
						font-size: 26rpx;
						color: #333;
						// 两行省略号
						// text-overflow: -o-ellipsis-lastline;
						// overflow: hidden; //溢出内容隐藏
						// text-overflow: ellipsis; //文本溢出部分用省路号表示
						// display: -webkit-box; //特别显示模式
						// -webkit-line-clamp: 2; //行数
						// line-clamp: 2;
						// -webkit-box-orient: vertical; //盒子中内容竖直排列
						overflow: hidden;
						text-overflow: ellipsis;
						-webkit-line-clamp: 2;
						word-wrap: break-word;
						display: -webkit-box;
						-webkit-box-orient: vertical;
						line-height: 20px;
						margin: 10px auto;
					}
				}
			}
		}
	}
</style>