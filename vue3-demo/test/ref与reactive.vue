<!--
 * @Author: xujintai
 * @Date: 2021-01-01 20:05:35
 * @LastEditors: xujintai
 * @LastEditTime: 2021-01-01 20:06:00
 * @Description: file content
 * @FilePath: \Vue3\vue3-demo\test\ref与reactive.vue
-->
<template>
  <div></div>
</template>

<script>
import { reactive, toRefs } from "@vue/composition-api";

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
</style>
