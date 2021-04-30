import { createApp } from 'vue';
import router from './router/index';
import store from './store/index';
import app  from './vant'
import 'vant/lib/index.css'; // 全局引入样式
import "lib-flexible";
app.use(router).use(store).use().mount('#app')
