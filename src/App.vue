<template>
  <van-notice-bar
    left-icon="volume-o"
    scrollable
    mode="closeable"
    text="在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。"
  />
  <van-nav-bar
    title="我想买一点"
    left-text="返回"
    right-text="按钮"
    left-arrow
    @click-left="onClickLeft"
    @click-right="onClickRight"
  />
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Vue 3 + TypeScript + Vite" />

  <van-action-bar>
  <van-action-bar-icon icon="chat-o" text="客服" dot />
  <van-action-bar-icon icon="cart-o" text="购物车" badge="5" />
  <van-action-bar-icon icon="shop-o" text="店铺" badge="12" />
  <van-action-bar-button type="warning" text="加入购物车" />
  <van-action-bar-button type="danger" text="立即购买" />
</van-action-bar>
</template>

<script lang="ts">
import { Toast } from "vant";
import { defineComponent } from "vue";
import HelloWorld from "./components/HelloWorld.vue";

export default defineComponent({
  name: "App",
  components: {
    HelloWorld,
  },
  setup() {
    const onClickLeft = () => Toast("返回");
    const onClickRight = () => Toast("按钮");
    return {
      onClickLeft,
      onClickRight,
    };
  },
});
</script>

