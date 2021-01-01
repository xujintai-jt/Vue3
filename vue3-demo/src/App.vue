<!--
 * @Author: xujintai
 * @Date: 2020-12-31 16:38:52
 * @LastEditors: xujintai
 * @LastEditTime: 2021-01-01 21:29:19
 * @Description: file content
 * @FilePath: \Vue3\vue3-demo\src\App.vue
-->
<template>
  <div id="app">
    <h1></h1>
    <div>
      <h2>firstName</h2>
      <input type="text" v-model="user.firstName" />
      <br />
      <h2>lastName</h2>
      <input type="text" v-model="user.lastName" />
      <br />
    </div>

    <div class="fullName">
      <h2>fullName</h2>
      <input type="text" v-model="fullName1" />
      <br />
      <input type="text" v-model="fullName2" />
      <br />
      <input type="text" v-model="fullName3" />
      <br />
    </div>
  </div>
</template>

<script lang="ts">
import { reactive, ref, computed, watch } from "vue";
import { setup } from "vue-class-component";

export default {
  setup() {
    const user = reactive({
      firstName: "东方",
      lastName: "不败",
    });

    //vue3 只有getter的计算属性
    const fullName1 = computed(() => {
      console.log("fullName1");
      return user.firstName + "-" + user.lastName;
    });

    //vue3 具有getter和setter的计算属性
    const fullName2 = computed({
      get() {
        return user.firstName + "-" + user.lastName;
      },
      set(newValue: string) {
        const arr = newValue.split("-");
        user.firstName = arr[0];
        user.lastName = arr[1];
      },
    });

    //watch(深度监听、初始化调用)
    // const fullName3 = ref("");
    // watch(
    //   user,
    //   () => {
    //     fullName3.value = user.firstName + "-" + user.lastName;
    //   },
    //   {
    //     immediate: true,
    //     deep: true, // 是否是深度监视, 默认是false
    //   }
    // );

    // watch(
    //   fullName3,
    //   (value) => {
    //     const arr = value.split("-");
    //     user.firstName = arr[0];
    //     user.lastName = arr[1];
    //   },
    //   {
    //     immediate: true,
    //     deep: true, // 是否是深度监视, 默认是false
    //   }
    // );

    /* 
    watch多个数据: 
      使用数组来指定
      如果是ref对象, 直接指定
      如果是reactive对象中的属性,  必须通过函数来指定
    */
    const fullName3 = ref("");
    watch([() => user.firstName, () => user.lastName, fullName3], (values) => {
      console.log(values);
      fullName3.value = values[0] + "-" + values[1];
      // user.firstName = values[2].split("-")[0];
      // user.lastName = values[2].split("-")[1];
      // values[2] = values[0] + "-" + values[1];
    });

    return {
      user,
      fullName1,
      fullName2,
      fullName3,
    };
  },
};
</script>

<style lang="scss" scoped>
input {
  height: 30px;
  width: 260px;
  font-size: 20px;
}
.fullName {
  input {
    margin-bottom: 15px;
  }
}
</style>
