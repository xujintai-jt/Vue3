<!--
 * @Author: xujintai
 * @Date: 2020-12-31 16:38:52
 * @LastEditors: xujintai
 * @LastEditTime: 2021-01-10 21:55:53
 * @Description: file content
 * @FilePath: \Vue3\vue3-demo\vue3_study\Suspense组件\App.vue
-->
<template>
  <div>
    <h1>App组件</h1>
    <!-- 子组件 -->
    <AsyncSon />
    <!-- 使用Suspense组件 template中包裹的组件中setup可以返回promise;resolve({ msg })式 -->
    <Suspense>
      <template v-slot:default>
        <AsyncSon />
      </template>

      <template v-slot:fallback>
        <h1>LOADING...</h1>
      </template>
    </Suspense>
  </div>
</template>

<script>
//引入方法
import { defineAsyncComponent } from "vue";
//引入子组件
const AsyncSon = defineAsyncComponent(() => import("./components/son"));
export default {
  components: { AsyncSon },
};
</script>

<style lang="scss" scoped>
</style>