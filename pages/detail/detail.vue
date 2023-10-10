<template>
	<view>
		<view class="newsDetail">
			<view class="detailTitle">
				{{newsDetail.title}}
			</view>
			<div>
				<view class="detailcontent" v-html="newsDetail.content"></view>
			</div>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				newsDetail: []
			};
		},
		onLoad(e) {
			this.getnewsdetail(e.id);
		},
		methods: {
			getnewsdetail(id) {
				uni.request({
					url: "https://45.125.46.201:16698/prod-api/press/press/" + id,
					methods: 'GET',
					sslVerify: false,
					success: res => {
						console.log(res);
						// 处理返回的数据
						const data = res.data; // 获取返回的数据对象
						// 在这里进行你想要的数据处理操作，比如将数据存储到组件的数据属性中
						this.newsDetail = data.data; // 假设有一个名为 newsDetail 的数据属性来存储新闻详情数据
						console.log(this.newsDetail);
					}
				})
			}

		}

	}
</script>

<style lang="scss">
	.newsDetail {
		width: 95vw;
		height: auto;
		margin: auto;

		.detailTitle {
			width: 100%;
			height: 40px;
			font-size: 30rpx;
			text-align: center;
			color: black;
			overflow: hidden;
			white-space: nowrap;
			text-overflow: ellipsis;
		}

		.detailcontent {
			display: flex;
			flex-direction: column;
			align-items: center;

			image {
				width: 700rpx;
				height: 300rpx;
				border-radius: 50rpx;
				margin: 0 auto;
			}

			text {
				font-size: 38rpx
			}
		}
	}
</style>