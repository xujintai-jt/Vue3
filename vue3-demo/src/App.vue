<!--
 * @Author: xujintai
 * @Date: 2020-12-31 16:38:52
 * @LastEditors: xujintai
 * @LastEditTime: 2021-01-08 21:49:16
 * @Description: file content
 * @FilePath: \Vue3\vue3-demo\src\App.vue
-->
<template>
  <div id="app">
    <!-- <div>testToRaw:{{state.age}}</div>
    <button @click="testToRaw">testToRaw</button>-->

    <div>testMarkRaw:{{ state}}</div>
    <button @click="testMarkRaw">testMarkRaw</button>
  </div>
</template>

<script lang="ts">
import { markRaw, reactive, toRaw } from "vue";

interface stateInfo {
  name: string;
  age: number;
  hoppies: object;
  arr?: string[];
}
export default {
  setup() {
    const state = reactive<stateInfo>({
      name: "xjt",
      age: 22,
      hoppies: {
        company: "code",
      },
    });

    // const testToRaw = function () {
    // 把代理对象state变为普通对象，state不再响应式
    // const state2 = toRaw(state);
    //   state.age++;
    //   console.log("state.age_toRaw", state.age);
    // };

    const testMarkRaw = function () {
      const arr = ["a", "s", "d"];
      //响应式
      // state.arr = arr;

      //非响应式
      state.arr = markRaw(arr);
      setTimeout(() => {
        state.arr[0] = "x";
        console.log(" state.arr[0]_markRaw", state.arr[0]);
      }, 1000);
    };

    return {
      state,
      // testToRaw,
      testMarkRaw,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>