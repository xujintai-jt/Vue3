<!--
 * @Author: xujintai
 * @Date: 2021-01-11 16:02:12
 * @LastEditors: xujintai
 * @LastEditTime: 2021-01-11 20:49:38
 * @Description: file content
 * @FilePath: \Vue3\vue3-demo\src\components\List-Item.vue
-->
<template>
  <div>
    <div class="List-item" v-for="(item) in tasks" :key="item.id">
      <input type="checkbox" v-model="item.checked" />
      <span>{{item.name}}</span>
    </div>
  </div>
</template>

<script>
import { reactive, inject } from "vue";

export default {
  setup() {
    const tasks = inject("tasks");
    return {
      tasks,
    };
  },
};
</script>

<style lang="scss" scoped>
.List-item {
  // margin-top: -1px;
  height: 30px;
  line-height: 30px;
  border: 1px rgb(187, 185, 185) solid;
}
</style>
