<template>
  <div id="app">
    <input type="text" ref="input1" />
    <br />
    <input type="text" ref="input2" />
  </div>
</template>

<script lang="ts">
import { reactive, toRefs, ref, onMounted } from "vue";
export default {
  setup() {
    const input1 = ref<HTMLElement | null>(null);
    console.log("input1", input1);

    onMounted(() => {
      // console.log("input1.value", input1.value);
      input1.value && input1.value.focus();
    });
    return {
      input1,
    };
  },
};
</script>

<style>
</style>
