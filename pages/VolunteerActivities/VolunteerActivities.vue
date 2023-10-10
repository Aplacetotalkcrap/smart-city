<template>
	<view class="volunteerBox">
		<view class="volunteerList" v-for="(item,index) in volunteerList" :key="item.id">
			<view class="title"><text>志愿活动：</text>{{item.title}}</view>
			<view class="content"><text>活动内容：</text>{{item.detail}}</view>
			<view class="ask"><text>要求：</text>{{item.requireText}}</view>
			<view class="time"><text>时间：</text>{{item.startAt}}</view>
			<view class="unit"><text>志愿队伍：</text>{{item.undertaker}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				volunteerList:[],
				token:uni.getStorageSync('token','')
			};
		},
		mounted(){
			this.getvolunteer();
		},
		methods:{
			getvolunteer(){
				uni.request({
					url:"https://45.125.46.201:16698/prod-api/api/volunteer-service/activity/list",
					methods:'GET',
					sslVerify:false,
					header:{
						'Authorization':this.token
					},
					success:res=>{
						console.log(res);
						this.volunteerList = res.data.rows
					},
					fail: function(err) {
						console.log(err); // 打印错误信息
						// 处理请求失败的情况
					}
				})
			}
		}
	}
</script>

<style lang="less">
.volunteerBox{
	.volunteerList{
		background-color: azure;
		width: 90vw;
		margin: 30rpx;
		.title{
			text-align: center;
		}
	}
}
</style>
