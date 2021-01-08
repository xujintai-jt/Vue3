<!--
 * @Author: xujintai
 * @Date: 2020-12-31 16:38:52
 * @LastEditors: xujintai
 * @LastEditTime: 2021-01-08 21:03:39
 * @Description: file content
 * @FilePath: \Vue3\vue3-demo\src\App.vue
-->
<template>
  <div id="app">
    <div>state2:{{state2.age}}</div>
    <div>company:{{state2.hoppies.company}}</div>
    <button @click="update">update</button>
  </div>
</template>

<script>
import { reactive, readonly, shallowReadonly } from "vue";

export default {
  setup() {
    const state = reactive({
      name: "xjt",
      age: 22,
      hoppies: {
        company: "code",
      },
    });

    //readonly 深度只读
    //const state2 = readonly(state);
    //shallowReadonly 浅度只读
    const state2 = shallowReadonly(state);

    const update = function () {
      //readonly 深度只读
      // state2.age++;
      // state2.hoppies.company = "work";
      //shallowReadonly 浅度只读
      // state2.age++;
      state2.hoppies.company = "work";
    };

    return {
      state,
      update,
      state2,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>