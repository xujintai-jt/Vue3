<!--
 * @Author: xujintai
 * @Date: 2021-01-11 16:02:29
 * @LastEditors: xujintai
 * @LastEditTime: 2021-01-11 20:20:01
 * @Description: file content
 * @FilePath: \Vue3\vue3-demo\src\components\Footers.vue
-->
<template>
  <div class="footers margin-demo">
    <input type="checkbox" />
    <span class="margin-left">已完成2/全部2</span>
    <button class="float-right red-btn">清除已完成任务</button>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";

export default {
  setup() {
    const state = reactive({
      count: 0,
    });

    return {
      ...toRefs(state),
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