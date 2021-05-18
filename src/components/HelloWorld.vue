<template>
  <h1>{{ msg }}</h1>
  <van-button type="primary" @click="changeEvent">count is: {{ count }}</van-button>

  <van-cell-group>
    <van-cell title="单元格" value="内容" />
    <van-cell title="单元格" value="内容" label="描述信息" />
  </van-cell-group>  
    <transition name="van-fade">
    <div v-show="visible">Fade</div>
  </transition>
</template>

<script lang="ts">
import { Form, Toast } from 'vant';
import { ref, defineComponent } from 'vue';
export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      required: true
    }
  },
  setup: (props, context) => {
    console.log(props, context)
    const count = ref(0);
    const visible=ref(false)


    const changeEvent=()=>{
        count.value++;
        visible.value=!visible.value;
        Toast.loading({
          message: '加载中...',
          position: 'top',
          forbidClick: true,
        });
    }
    return { count,visible,changeEvent }
  }
 
});
</script>
