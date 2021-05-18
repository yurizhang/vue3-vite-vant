import { createApp } from 'vue'
// import { Button,Cell, CellGroup,Toast,NoticeBar } from 'vant';
import App from './App.vue'
import { useVant } from './load.js'
import './assets/css/common.css'

const app = createApp(App);
useVant(app);
app.mount('#app');
(window as any).APP=app;