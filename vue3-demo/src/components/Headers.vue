<!--
 * @Author: xujintai
 * @Date: 2021-01-10 19:47:29
 * @LastEditors: xujintai
 * @LastEditTime: 2021-01-11 21:19:06
 * @Description: file content
 * @FilePath: \Vue3\vue3-demo\src\components\Headers.vue
-->
<template>
  <input
    class="headers-input margin-demo"
    type="text"
    @keyup.enter="addTasks(headersInputValue)"
    v-model="headersInputValue"
    placeholder="请输入你的任务名称,按回车键确认"
  />
</template>

<script lang="ts">
import { reactive, ref } from "vue";

export default {
  props: {
    addTasks: {
      type: Function,
    },
  },
  setup(props) {
    const headersInputValue = ref("");
    const addTasks = props.addTasks;

    return {
      addTasks,
      headersInputValue,
    };
  },
};
</script>

<style lang="scss" scoped>
.headers-input {
  height: 22px;
  width: 95%;
  border: 1px rgb(187, 185, 185) solid;
}
</style>