<!--
 * @Author: xujintai
 * @Date: 2021-01-10 19:47:29
 * @LastEditors: xujintai
 * @LastEditTime: 2021-01-10 21:51:10
 * @Description: file content
 * @FilePath: \Vue3\vue3-demo\src\components\son.vue
-->
<template>
  <h1>{{msg}}</h1>
</template>

<script>
export default {
  setup() {
    // const msg = "hahaha";
    // return {
    //   msg,
    // };
    return new Promise((resolve, reject) => {
      const msg = "hahaha";
      resolve({ msg });
    });
  },
};
</script>

<style lang="scss" scoped>
</style>