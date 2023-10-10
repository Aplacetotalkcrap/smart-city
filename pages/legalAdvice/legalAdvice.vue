<template>
	<view>
		法律咨询
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		mounted(){
			this.getlawList();
		},
		methods:{
			getlawList(){
				uni.request({
					url:"https://45.125.46.201:16698/prod-api/api/lawyer-consultation/legal-expertise/list",
					methods:'GET',
					sslVerify:false,
					success:res=>{
						console.log(res);
					}
				})
			}
		}
	}
</script>

<style lang="less">

</style>
