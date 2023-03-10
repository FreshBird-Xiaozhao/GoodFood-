import App from './App.vue'
import Vue from 'vue'

//导入网络请求的包
import { $http } from '@escook/request-miniprogram'

uni.$http = $http
$http.baseUrl = 'https://mock.apifox.cn/m1/1961063-0-default'

//请求拦截器
$http.beforeRequest = function(options) {
	uni.showLoading({
		title:'数据加载中...'
	})
}

//响应拦截器
$http.afterRequest = function() {
	uni.hideLoading()
}

// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif