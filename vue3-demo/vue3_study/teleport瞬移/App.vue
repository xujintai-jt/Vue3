<!--
 * @Author: xujintai
 * @Date: 2020-12-31 16:38:52
 * @LastEditors: xujintai
 * @LastEditTime: 2021-01-10 19:57:43
 * @Description: file content
 * @FilePath: \Vue3\vue3-demo\src\App.vue
-->
<template>
  <div>
    <h1>App组件</h1>
    <son />
  </div>
</template>

<script>
import Son from "./components/son";
export default {
  components: { Son },
};
</script>

<style lang="scss" scoped>
</style>