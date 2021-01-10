<!--
 * @Author: xujintai
 * @Date: 2021-01-10 19:47:29
 * @LastEditors: xujintai
 * @LastEditTime: 2021-01-10 19:55:01
 * @Description: file content
 * @FilePath: \Vue3\vue3-demo\src\components\son.vue
-->
<template>
  <h1>Son组件</h1>
  <button @click="isShow=true">显示对话框</button>
  <!-- 对话框 -->
  <teleport to="body">
    <div v-if="isShow">
      <h1>Hello World!</h1>
      <button @click="isShow=false">隐藏对话框</button>
    </div>
  </teleport>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const isShow = ref(false);

    return {
      isShow,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>