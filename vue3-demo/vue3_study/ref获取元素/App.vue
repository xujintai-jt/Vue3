<template>
  <div id="app">
    <input type="text" ref="input1" />
    <br />
    <input type="text" ref="input2" />
  </div>
</template>

<script lang="ts">
import { reactive, toRefs, ref, onMounted } from "vue";
export default {
  setup() {
    //利用ref函数获取组件中的标签元素;
    //功能需求: 让输入框自动获取焦点
    const input1 = ref<HTMLElement | null>(null);
    console.log("input1", input1);

    onMounted(() => {
      // console.log("input1.value", input1.value);
      input1.value && input1.value.focus();
    });
    return {
      input1,
    };
  },
};
</script>

<style>
</style>
