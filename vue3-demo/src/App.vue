<!--
 * @Author: xujintai
 * @Date: 2020-12-31 16:38:52
 * @LastEditors: xujintai
 * @LastEditTime: 2021-01-05 23:05:28
 * @Description: file content
 * @FilePath: \Vue3\vue3-demo\src\App.vue
-->
<template>
  <div class="App">
    <!-- 页面坐标 -->
    <h2>页面坐标</h2>
    <div>
      <span>X:</span>
      {{value.x}}
    </div>
    <div>
      <span>Y:</span>
      {{value.y}}
    </div>
    <!-- ajax -->
    <h2>ajax</h2>
    <div v-if="isLoading">loading</div>
    <div v-else-if="errorMessage">errorMessage</div>
    <ul v-else>
      <li>id:{{successMessage[0].id}}</li>
      <li>address:{{successMessage[0].address}}</li>
      <li>id:{{successMessage[1].id}}</li>
      <li>address:{{successMessage[1].address}}</li>
      <li>id:{{successMessage[2].id}}</li>
      <li>address:{{successMessage[2].address}}</li>
    </ul>
  </div>
</template>

<script>
//引入钩子函数
import useMousePosition from "./hooks/useMousePosition";
import useRequest from "./hooks/useRequest";
export default {
  // 需求1: 收集用户鼠标点击的页面坐标
  // 需求2: 封装axios
  setup() {
    // 需求1: 收集用户鼠标点击的页面坐标
    const { value } = useMousePosition();
    // 需求2: 封装axios
    const { isLoading, errorMessage, successMessage } = useRequest(
      "./public下的data/address.json"
    );

    return { value, isLoading, errorMessage, successMessage };
  },
};
</script>

<style>
</style>

