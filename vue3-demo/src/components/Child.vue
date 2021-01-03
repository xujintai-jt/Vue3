<!--
 * @Author: xujintai
 * @Date: 2021-01-03 16:30:32
 * @LastEditors: xujintai
 * @LastEditTime: 2021-01-03 16:56:55
 * @Description: file content
 * @FilePath: \Vue3\vue3-demo\src\components\Child.vue
-->
<template>
  <div>
    <h1>child组件</h1>
  </div>
</template>

<script>
export default {
  beforeCreate() {
    console.log("2.x child beforeCreate");
  },
  created() {
    console.log("2.x child created");
  },
  beforeMount() {
    console.log("2.x child beforeMount");
  },
  mounted() {
    console.log("2.x child mounted");
  },
  beforeUpdate() {
    console.log("2.x child beforeUpdate");
  },
  updated() {
    console.log("2.x child updated");
  },
  beforeUnmounted() {
    console.log("2.x child beforeUnmounted");
  },
  unmounted() {
    console.log("2.x child unmounted");
  },
};
</script>

<style>
</style>