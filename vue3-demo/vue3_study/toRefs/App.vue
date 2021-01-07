<template>
  <div id="app">
    <div>name:{{name}}</div>
    <div>age:{{age}}</div>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
export default {
  setup() {
    const state = reactive({
      name: "xjt",
      age: 22,
    });

    const stated = toRefs(state);
    console.log(stated);
    const { name, age } = toRefs(state);

    setInterval(() => {
      state.age += "---";
    }, 500);

    return {
      //非响应式
      // ...state,
      name,
      age,
    };
  },
};
</script>

<style>
</style>
