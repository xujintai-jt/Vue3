<!--
 * @Author: xujintai
 * @Date: 2021-01-10 19:47:29
 * @LastEditors: xujintai
 * @LastEditTime: 2021-01-10 20:43:04
 * @Description: file content
 * @FilePath: \Vue3\vue3-demo\src\components\son.vue
-->
<template>
  <div>
    <h1>Son组件</h1>
    <button @click="isShow=true">显示对话框</button>
    <!-- 对话框 -->
    <teleport to="body">
      <div v-if="isShow" class="dialog">
        <div>
          <h1>Hello World!</h1>
          <button @click="isShow=false">隐藏对话框</button>
        </div>
      </div>
    </teleport>
  </div>
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
.dialog {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  div {
    position: absolute;
    top: 20%;
    right: 0;
    left: 0;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 240px;
    width: 240px;
    background-color: white;
  }
}
</style>