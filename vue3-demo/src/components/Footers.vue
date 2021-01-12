<!--
 * @Author: xujintai
 * @Date: 2021-01-11 16:02:29
 * @LastEditors: xujintai
 * @LastEditTime: 2021-01-12 13:24:35
 * @Description: file content
 * @FilePath: \Vue3\vue3-demo\src\components\Footers.vue
-->
<template>
  <div class="footers margin-demo">
    <input type="checkbox" v-model="isAllCheck" />
    <span class="margin-left">已完成{{checkedTask}}/全部{{tasks.length}}</span>
    <button class="float-right red-btn">清除已完成任务</button>
  </div>
</template>

<script>
import { reactive, ref } from "vue";

export default {
  props: {
    tasks: {
      type: Array,
      default() {
        return [];
      },
    },
    checkedTask: {
      type: Function,
    },
  },
  setup(props) {
    const isAllCheck = ref(true);
    //props传递
    const tasks = props.tasks;
    const checkedTask = props.checkedTask;

    return {
      isAllCheck,
      tasks,
      checkedTask,
    };
  },
};
</script>

<style lang="scss" scoped>
.footers {
  width: 95%;

  .margin-left {
    margin-left: 20px;
  }
}
</style>