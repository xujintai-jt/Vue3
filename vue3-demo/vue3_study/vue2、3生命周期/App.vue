<!--
 * @Author: xujintai
 * @Date: 2020-12-31 16:38:52
 * @LastEditors: xujintai
 * @LastEditTime: 2021-01-03 16:59:01
 * @Description: file content
 * @FilePath: \Vue3\vue3-demo\src\App.vue
-->
<template>
  <div>
    <h1>父组件</h1>
    <hr />
    <child v-if="isShowChild" />
    <button @click="isShow">显示/隐藏 child组件</button>
  </div>
</template>

<script>
// 引入方法
import {
  ref,
  onMounted,
  onUpdated,
  onUnmounted,
  onBeforeMount,
  onBeforeUpdate,
  onBeforeUnmount,
} from "vue";
// 引入子组件
import Child from "./components/Child";

export default {
  components: { Child },
  beforeCreate() {
    console.log("2.x father beforeCreate");
  },
  created() {
    console.log("2.x father created");
  },
  beforeMount() {
    console.log("2.x father beforeMount");
  },
  mounted() {
    console.log("2.x father mounted");
  },
  beforeUpdate() {
    console.log("2.x father beforeUpdate");
  },
  updated() {
    console.log("2.x father updated");
  },
  setup() {
    console.log("3.0 father setup()");
    let isShowChild = ref(true);
    const isShow = function () {
      isShowChild.value = !isShowChild.value;
    };

    //生命周期组合API
    onBeforeMount(() => {
      console.log("3.0 father onBeforeMount()");
    });

    onMounted(() => {
      console.log("3.0 father onMounted()");
    });

    onBeforeUpdate(() => {
      console.log("3.0 father onBeforeUpdate()");
    });

    onUpdated(() => {
      console.log("3.0 father onUpdated()");
    });

    return {
      isShowChild,
      isShow,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>

