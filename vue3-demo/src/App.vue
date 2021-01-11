<!--
 * @Author: xujintai
 * @Date: 2020-12-31 16:38:52
 * @LastEditors: xujintai
 * @LastEditTime: 2021-01-11 21:11:39
 * @Description: file content
 * @FilePath: \Vue3\vue3-demo\src\App.vue
-->
<template>
  <div id="app">
    <headers :addTasks="addTasks" />
    <list />
    <footers />
  </div>
</template>

<script lang="ts">
//引入子组件
import Headers from "./components/Headers.vue";
import List from "./components/List.vue";
import Footers from "./components/Footers.vue";
// 引入方法
import { reactive, provide } from "vue";

export default {
  setup() {
    const tasks = reactive([
      { id: 1, name: "宝马", checked: true },
      { id: 2, name: "奥迪", checked: true },
      { id: 3, name: "奔驰", checked: true },
    ]);
    //将tasks传递给孙子组件List-item
    provide("tasks", tasks);

    //输入框添加数据的方法
    const addTasks = function (value: string) {
      if (value.trim()) {
        const name = value.trim();
        const task = {
          id: 1,
          name,
          checked: false,
        };
        tasks.unshift(task);
      }
    };
    return { addTasks };
  },
  components: {
    Headers,
    List,
    Footers,
  },
};
</script>

<style lang="scss" scoped>
#app {
  position: absolute;
  top: 10%;
  left: 0;
  right: 0;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 400px;
  border: 1px rgb(187, 185, 185) solid;
}
</style>