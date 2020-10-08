import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//vant
import Vant from 'vant'
import 'vant/lib/index.css'
//rem
import 'amfe-flexible'
//字体图标
import './assets/font/iconfont.css'


Vue.use(Vant)
import style from './style/index.less'
Vue.config.productionTip = false

new Vue({
    router,
    store,
    style,
    render: h => h(App)
}).$mount('#app')