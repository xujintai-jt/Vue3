<!--
 * @Author: xujintai
 * @Date: 2021-01-09 17:10:07
 * @LastEditors: xujintai
 * @LastEditTime: 2021-01-09 17:29:11
 * @Description: file content
 * @FilePath: \Vue3\vue3-demo\src\components\grand-son.vue
-->
<template>
  <h1 :style="{color}">GrandSon组件</h1>
</template>

<script>
import { inject } from "vue";
export default {
  setup() {
    const color = inject("provide-color");
    return {
      color,
    };
  },
};
</script>

<style scoped>
.red {
  background-color: red;
}

.green {
  background-color: green;
}

.yellow {
  background-color: yellow;
}
</style>