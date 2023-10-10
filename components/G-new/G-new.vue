<template>
	<view>
		<view class="typebox">
			<uni-segmented-control class="type" :current="current" :values="newsTypeName" @clickItem="onClickItem" />
		</view>
		<view class="newsList">
			<view class="news" v-for="(item,index) in allNews" :key="item.id" v-if="newsTypeId == item.type"
				@click="godetail(item.id)">
				<image :src="baseUrl + item.cover" mode=""></image>
				<span>{{item.content.replace(/<\/?[^>]*>/g, '') }}</span>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "News",
		data() {
			return {
				baseUrl: "https://45.125.46.201:16698",
				current: 0,
				newsType: [],
				newsTypeName: [],
				newsTypeId: 9,
				allNews: []
			};
		},
		methods: {
			godetail(id) {
				uni.navigateTo({
					url: "/pages/detail/detail?id=" + id
				})
			},
			onClickItem(e) {
				this.current = e.currentIndex
				this.newsTypeId = this.newsType[this.current].id
				console.log(e);
			},
			getAllNews() {
				uni.request({
					url: "https://45.125.46.201:16698/prod-api/press/press/list",
					methods: 'GET',
					sslVerify: false,
					success: (r) => {
						// console.log(r);
						this.allNews = r.data.rows
					}
				})
			},
			getNewsType() {
				uni.request({
					url: "https://45.125.46.201:16698/prod-api/press/category/list",
					methods: 'GET',
					sslVerify: false,
					success: (r) => {
						// console.log(r);
						this.newsType = r.data.data
						this.newsTypeName = []
						for (let i of this.newsType) {
							this.newsTypeName.push(i.name)
						}
					}
				})
			}
		},
		mounted() {
			this.getAllNews();
			this.getNewsType();
		}
	}
</script>

<style lang="scss">
	.typebox {
		width: 95vw;
		margin: 0 auto;
		height: 40px;
		overflow-x: scroll;

		.type {
			width: 130%;
			height: 100%;
		}
	}

	.typebox::-webkit-scrollbar {
		display: none;
	}

	.newsList {
		width: 95vw;
		margin: 10px auto;
		height: auto;

		.news {
			width: 100%;
			height: 80px;
			display: flex;
			flex-wrap: wrap;
			justify-content: space-around;
			align-items: center;

			image {
				width: 100px;
				height: 75px;
			}

			span {
				flex: 1;
				height: 70%;
				font-size: 12px;
				overflow: hidden;
				text-overflow: ellipsis;
				-webkit-line-clamp: 2;
				word-wrap: break-word;
				display: -webkit-box;
				-webkit-box-orient: vertical;
				line-height: 20px;
				margin: 0 10px;
			}
		}
	}
</style>