<template>
  <view style="height: 100%">
    <image
      id="bac"
      src="../static/images/login.png"
      mode="aspectFill"
    ></image>
    <view id="header">
      <view class="text">珈有</view>
      <view class="text">好食</view>
    </view>
    <view>
      <form action="" class="form">
        <input
          class="input"
          type="number"
          placeholder="输入学号"
          placeholder-class="placeholder"
		  v-model="arr1"
        />
        <input
          class="input"
          type="text"
          placeholder="输入密码"
          placeholder-class="placeholder"
		  v-model="arr2"
        />
        <button id="button" @tap="goToFirst">登入</button>
      </form>
    </view>
  </view>
</template>

<script>
	export default {
		data() {
			arr1:'2022301111001'
			arr2:'12345'
			return {
				
			};
		},
		methods:{
			goToFirst() {
				// getApp().globalData.sid = this.arr1
				// getApp().globalData.password = this.arr2
				uni.switchTab({
					url: "/pages/toBeCertified/toBeCertified"
				})
			}
		}
	}
</script>
<style>
page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}
#header .text {
  font-size: 152.25rpx;
  color: rgba(187, 193, 206, 1);
}
#header .text:nth-child(1) {
  margin-right: 350rpx;
}
#header .text:nth-child(2) {
  margin-left: 150rpx;
}
#bac {
  left: 0;
  top: 0;
  height: 100vh;
  width: 100vw;
  position: absolute;
  /* object-fit:fill; */
  z-index: -1;
}

.form {
  display: flex;
  align-items: center;
  flex-direction: column;
}

.form .input {
  z-index: 4;
  background-color: rgba(255, 255, 255, 0.5);
  box-shadow: 0px 3px 6px 1px rgba(0, 0, 0, 0.16);
  border-radius: 50rpx;
  width: 337.75rpx;
  height: 87.5rpx;
  margin-top: 33.25rpx;
  padding-left: 40rpx;
  padding-right: 40rpx;
}
.form .input:nth-child(1) {
  margin-top: 350rpx;
}
.form #button {
  background-color: rgba(210, 187, 171, 0.7);
  color: rgba(70, 49, 36, 1);
  font-size: 43.75rpx;
  width: 252rpx;
  height: 87.5rpxs;
  border-radius: 50rpx;
  margin-top: 49rpx;
  /* align-items: center; */
}
.form #button:active {
  background-color: rgba(210, 187, 171, 1);
}
.form .placeholder {
  text-align: center;
  color: white;
  font-size: 35rpx;
}
.skip {
  margin-top: 10rpx;
  text-align: center;
  color: white;
}
</style>
