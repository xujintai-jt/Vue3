<!--
 * @Author: xujintai
 * @Date: 2021-01-09 17:09:51
 * @LastEditors: xujintai
 * @LastEditTime: 2021-01-09 17:21:55
 * @Description: file content
 * @FilePath: \Vue3\vue3-demo\src\components\son.vue
-->
<template>
  <div id="son">
    <h1>son组件</h1>
    <hr />
    <!-- 孙子组建 -->
    <GrandSon />
  </div>
</template>

<script>
import GrandSon from "./grand-son";
export default {
  components: {
    GrandSon,
  },
};
</script>

<style>
</style>