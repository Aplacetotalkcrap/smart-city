<template>
	<view class="login">
		<form class="form">
			<view class="loginTop">
				<view class="left">账号密码登录</view>
				<view class="right">注册</view>
			</view>
			<view class="fromcontent">
				<label for="account">
					账号
					<input type="text" id="account" placeholder="请输入账号" v-model="username">
				</label>
				<label for="password">
					密码
					<input type="text" id="password" placeholder="请输入密码" v-model="password">
				</label>
			</view>
		</form>
		<button type="primary" @click="gohome">登录</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				username:"",
				password:""

			};
		},
		mounted(){
			this.gittoken();
		},
		methods:{
			gohome(){
				uni.switchTab({
					url:"/pages/index/index"
				})
			},
			gittoken(){
				uni.request({
					url:"https://45.125.46.201:16698/prod-api/api/login",
					method:'POST',
					sslVerify:false,
					data:{
						"username":"test01",
						"password":"123456"
					},
					success:res=>{
						console.log(res);
						uni.setStorageSync('token',res.data.token)
					}
				})
			}

		}
	}
</script>

<style lang="less">
	.login {
		width: 600rpx;
		height: 300rpx;
		margin: 0 auto;
		.form {
			.loginTop {
				width: 600rpx;
				height: 100rpx;
				display: flex;
				justify-content: space-around;
				align-items: center;
				
				.left {
					display: flex;
					justify-content: center;
					align-items: center;
					font-size: 30rpx;
					color: blue;
					width: 300rpx;
					height: 70rpx;
					background-color: aqua;
				}
				.right {
					display: flex;
					justify-content: center;
					align-items: center;
					font-size: 30rpx;
					color: blue;
					width: 300rpx;
					height: 70rpx;
				}


			}
			.fromcontent{
				
			}
		}

	}
</style>