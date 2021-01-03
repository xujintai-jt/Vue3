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
    <div v-else-if="errorMessage">loading</div>
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
    const { value } = useMousePosition();
    const { isLoading, errorMessage, successMessage } = useRequest(
      "./public下的data/address.json"
    );

    return { value, isLoading, errorMessage, successMessage };
  },
};
</script>

<style>
</style>

