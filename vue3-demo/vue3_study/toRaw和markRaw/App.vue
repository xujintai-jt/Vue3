<!--
 * @Author: xujintai
 * @Date: 2020-12-31 16:38:52
 * @LastEditors: xujintai
 * @LastEditTime: 2021-01-08 21:37:51
 * @Description: file content
 * @FilePath: \Vue3\vue3-demo\src\App.vue
-->
<template>
  <div id="app">
    <!-- <div>testToRaw:{{state2.age}}</div>
    <button @click="testToRaw">testToRaw</button>-->

    <div>testMarkRaw:{{ state}}</div>
    <button @click="testMarkRaw">testMarkRaw</button>
  </div>
</template>

<script lang="ts">
import { markRaw, reactive, toRaw } from "vue";

export default {
  setup() {
    const state = reactive<any>({
      name: "xjt",
      age: 22,
      hoppies: {
        company: "code",
      },
    });

    // const state2 = toRaw(state);
    // const testToRaw = function () {
    //   state2.age++;
    //   console.log("state2.age_toRaw", state2.age);
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
      // state2,
      // testToRaw,
      testMarkRaw,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>