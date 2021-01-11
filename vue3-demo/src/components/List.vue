<!--
 * @Author: xujintai
 * @Date: 2021-01-11 16:01:49
 * @LastEditors: xujintai
 * @LastEditTime: 2021-01-11 21:32:01
 * @Description: file content
 * @FilePath: \Vue3\vue3-demo\src\components\List.vue
-->
<template>
  <div class="list margin-demo">
    <list-item />
  </div>
</template>

<script lang="ts">
//引入子组件
import ListItem from "./List-Item";
//引入方法
import { ref } from "vue";

export default {
  setup() {},
  components: {
    ListItem,
  },
};
</script>

<style lang="scss" scoped>
.list {
  width: 95%;
}
</style>
