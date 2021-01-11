<!--
 * @Author: xujintai
 * @Date: 2021-01-11 16:02:12
 * @LastEditors: xujintai
 * @LastEditTime: 2021-01-11 21:48:55
 * @Description: file content
 * @FilePath: \Vue3\vue3-demo\src\components\List-Item.vue
-->
<template>
  <div>
    <div
      class="List-item"
      v-for="(item) in tasks"
      :key="item.id"
      @mousemove="toActive"
      :style="{'.active':active}"
    >
      <input type="checkbox" v-model="item.checked" />
      <span>{{item.name}}</span>
      <button class="red-btn absolute-right" v-show="active">删除此任务</button>
    </div>
  </div>
</template>

<script>
import { reactive, inject, ref } from "vue";

export default {
  setup() {
    const tasks = inject("tasks");
    const active = ref(false);
    const toActive = function () {
      console.log(1);
      active.value = true;
    };
    return { active, tasks, toActive };
  },
};
</script>

<style lang="scss" scoped>
.List-item {
  position: relative;
  height: 30px;
  line-height: 30px;
  border: 1px rgb(187, 185, 185) solid;
}

.active {
  background-color: pink;
}
</style>
