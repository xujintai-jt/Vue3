<!--
 * @Author: xujintai
 * @Date: 2021-01-11 16:02:12
 * @LastEditors: xujintai
 * @LastEditTime: 2021-01-12 18:11:50
 * @Description: file content
 * @FilePath: \Vue3\vue3-demo\src\components\List-Item.vue
-->
<template>
  <div>
    <div
      class="List-item"
      v-for="(item,index) in tasks"
      :key="item.id"
      @mousemove="toActive(index)"
      @mouseout="clearActive"
      :class="(activeIndex===index)?'active':''"
    >
      <input type="checkbox" v-model="item.checked" />
      <span>{{item.name}}{{item.id}}</span>
      <button
        class="red-btn absolute-right"
        v-show="(activeIndex===index)"
        @click="removeTask(index)"
      >删除此任务</button>
    </div>
  </div>
</template>

<script>
import { reactive, inject, ref } from "vue";

export default {
  setup() {
    //inject接收数据
    const tasks = inject("tasks");
    const removeTask = inject("removeTask");

    //创建数据
    const activeIndex = ref("");

    //创建方法
    const toActive = function (index) {
      activeIndex.value = index;
    };
    const clearActive = function () {
      activeIndex.value = "";
    };

    return { activeIndex, tasks, toActive, clearActive, removeTask };
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
  color: #1a73e8;
  background-color: rgb(243, 243, 243);
}
</style>
