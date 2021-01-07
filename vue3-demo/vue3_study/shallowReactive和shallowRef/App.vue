<template>
  <div id="app">
    <div>
      <h1>reactive</h1>
      <div>name: {{data1.name}}</div>
      <div>sex: {{data1.hoppies.sex}}</div>
    </div>
    <div>
      <h1>shallowReactive</h1>
      <div>name: {{data2.name}}</div>
      <div>sex: {{data2.hoppies.sex}}</div>
    </div>
    <div>
      <h1>ref</h1>
      <div>name: {{data3.name}}</div>
      <div>sex: {{data3.hoppies.sex}}</div>
    </div>
    <div>
      <h1>shallowRef</h1>
      <div>name: {{data4.name}}</div>
      <div>sex: {{data4.hoppies.sex}}</div>
    </div>
    <button @click="update">update</button>
  </div>
</template>

<script lang="ts">
import { reactive, shallowReactive, ref, shallowRef } from "vue";

export default {
  setup() {
    const data1 = reactive({
      name: "韦王丰",
      sex: "男",
      hoppies: {
        sex: "男",
      },
    });

    const data2 = shallowReactive({
      name: "韦王丰",
      sex: "男",
      hoppies: {
        sex: "男",
      },
    });

    const data3 = ref({
      name: "韦王丰",
      sex: "男",
      hoppies: {
        sex: "男",
      },
    });

    const data4 = shallowRef({
      name: "韦王丰",
      sex: "男",
      hoppies: { sex: "男" },
    });

    const update = function () {
      //注意：测试时应该分开测试，因为响应式数据会引起页面渲染，那么发生改变的非响应式数据也会在页面上重新渲染，
      // 就会出现所有的数据都在视图上更新的结果。

      // 1.reactive  深度监听
      // data1.name += "666";
      // data1.hoppies.sex += "666";

      // 2.shallowReactive  只处理了对象内最外层属性的响应式(也就是浅响应式)
      // data2.name += "777";
      data2.hoppies.sex += "777";

      // 3.ref 处理value的响应式, 并且可以进行对象的reactive处理
      // data3.value.name += "888";
      // data3.value.hoppies.sex += "888";

      // 4.shallowRef 只处理了value的响应式, 不进行对象的reactive处理
      // data4.value.name += "999";
      // data4.value.hoppies.sex += "999";
    };

    return {
      data1,
      data2,
      data3,
      data4,
      update,
    };
  },
};
</script>

<style>
</style>
