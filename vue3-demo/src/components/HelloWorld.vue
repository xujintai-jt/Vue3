<!--
 * @Author: xujintai
 * @Date: 2020-12-31 16:38:52
 * @LastEditors: xujintai
 * @LastEditTime: 2021-01-01 15:22:04
 * @Description: file content
 * @FilePath: \Vue3\vue3-demo\src\components\HelloWorld.vue
-->
<template>
  <div class="hello">
    <h1>男二号{{ obj1.name }}</h1>
    <h1>女二号{{ obj1.wife.name }}</h1>
  </div>
  <child />
</template>

<script lang="ts">
//引入方法
import { reactive, ref } from "vue";
//引入组件
import Child from "./child.vue";

export default {
  setup() {
    const obj1 = reactive({
      name: "佐助",
      age: 20,
      wife: {
        name: "小樱",
        age: 19,
      },
    });

    const child = ref("二柱子");
    return {
      obj1,
      child,
    };
  },
  created() {
    console.log(this);
  },
  components: { Child },
};
</script>


