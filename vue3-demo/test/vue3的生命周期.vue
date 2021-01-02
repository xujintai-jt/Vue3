<!--
 * @Author: xujintai
 * @Date: 2021-01-02 18:06:32
 * @LastEditors: xujintai
 * @LastEditTime: 2021-01-02 18:06:33
 * @Description: file content
 * @FilePath: \Vue3\vue3-demo\test\vue3的生命周期.vue
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