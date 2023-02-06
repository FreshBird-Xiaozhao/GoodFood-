<template>
	<view class="header">
			<button @click="back">退出</button>
	</view>
	
	<scroll-view scroll-y="true" class="container">
		<view class="stores" v-for="(item,index) in storeList">
			<view class="flex-item1">
				<img class="image" :src="item.shop_profile_photo" alt="无"/>
			</view>
			<view class="flex-item2">
				<view class="name">这是{{item.shop_name}}</view>
				<view class="stars" style="background-color: orange;"></view>
				<view class="comments">{{item.comment_count}}条评论</view>
			</view>
			<button class="flex-item3" @click="renZheng">给予<br/>认证</button>
		</view>
	</scroll-view>
</template>

<script>
	export default {
		data() {
			return {
				//商店的数据列表，默认为空数组
				storeList:[]
			};
		},
		onLoad() {
			//获取商店数据
			this.getStoreList()
		},
		methods:{
			async getStoreList() {
				const params = {
									sid: '2022301111001',
									password: '12345'	
								};
				const {data: res} = await uni.$http.get('/shop_renzheng/todo',params)
				// console.log(res)
				//请求失败
				if(res.status == '') {
					return uni.showToast({
						title: '数据请求失败！',
						duration: 1500,
						icon: 'none'
					})
				}
				
				//请求成功
				this.storeList = res.data
			},
			
			async renZheng(id) {
				const data = {
					            shop_id: id,
								sid: '2022301111001',
								password: '12345'
				            } 
				const {data: res} = await uni.$http.post('/shop_renzheng/todo',data);
					if (res.status == '') {
						return uni.showToast({
							title: '认证失败',
							duration: 2000,
							icon: 'none'
						});
						return;
					} else {
						this.getStoreList();
						uni.showToast({
							title: '认证成功',
							duration: 2000,
							icon: 'none'
						})
					}
			},
			
			back() {
				console.log(getApp().globalData.sid)
				uni.reLaunch({
					url:"/pages/index/login"
				})
			}
		}
	}
</script>

<style>
	page{
		background-color: #FFE3CD;
	}
</style>

<style lang="scss">
.header{
	height: 70rpx;
	width: 100%;
	padding-top: 15rpx;
	padding-bottom: 15rpx;
	background-color: #FFE3CD;
}
button{
	color: #000;
	background-color: orange;
	width: 130rpx;
	height: 70rpx;
	border-radius: 15rpx;
	margin-right: 15rpx;
	font-size: 30rpx;
	font-weight: 700;
}
.container{
	width: 100%;
	height: 1196rpx;
}
.stores{
	width: 700rpx;
	height: 200rpx;
	border-radius: 30rpx;
	box-shadow: 3px 7rpx #d3d3d3;
	margin: auto;
	margin-bottom: 30rpx;
	background-color: papayawhip;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
}
.flex-item1{
	width: 150rpx;
	height: 150rpx;
	margin-left: 20rpx;
	overflow: hidden;
	display: flex;
	align-items: center;
}
.image{
	width: 100%;
	height: 100%;
	border-radius: 30rpx;
}
.flex-item2{
	width: 350rpx;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
}
.name{
	width: 100%;
	height: 50rpx;
	margin-bottom: 10rpx;
	font-size: 40rpx;
	font-weight: 500;
}
.stars{
	width: 100%;
	height: 60rpx;
}
.comments{
	width: 100%;
	margin-top: 10rpx;
	color: #8a8a8a;
}
.flex-item3{
	background-color: #1dd501;
	width: 100rpx;
	height: 100rpx;
	margin-right: 40rpx;
	margin-left: 0rpx;
	padding-top: 18rpx;
	border-radius: 30rpx;
	font-size: 24rpx;
	font-weight: 600;
	line-height: 1.4;
}
.flex-item3:active{
	background-color: #ffb040;
}
</style>