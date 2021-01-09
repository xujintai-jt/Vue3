<!--
 * @Author: xujintai
 * @Date: 2020-12-31 16:38:52
 * @LastEditors: xujintai
 * @LastEditTime: 2021-01-09 17:25:07
 * @Description: file content
 * @FilePath: \Vue3\vue3-demo\src\App.vue
-->
<template>
  <div>
    <h1>app组件</h1>
    <div>color：{{color}}</div>
    <button @click="color='red'">red</button>
    <button @click="color='green'">green</button>
    <button @click="color='yellow'">yellow</button>
    <hr />
    <!-- son组件 -->
    <Son />
  </div>
</template>

<script lang="ts">
//引入方法
import { ref, provide } from "vue";

//引入子组件
import Son from "./components/son.vue";

export default {
  setup() {
    const color = ref("red");
    provide("provide-color", color);

    return { color };
  },
  components: {
    Son,
  },
};
</script>

<style lang="scss" scoped>
</style>