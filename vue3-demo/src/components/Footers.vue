<!--
 * @Author: xujintai
 * @Date: 2021-01-11 16:02:29
 * @LastEditors: xujintai
 * @LastEditTime: 2021-01-16 21:44:26
 * @Description: file content
 * @FilePath: \Vue3\vue3-demo\src\components\Footers.vue
-->
<template>
  <div class="footers margin-demo">
    <input type="checkbox" v-model="isAllCheck" />
    <span class="margin-left">已完成{{checkedTask}}/全部{{tasks.state.length}}</span>
    <button class="float-right red-btn" @click="removeChecked">清除已完成任务</button>
  </div>
</template>

<script>
import { reactive, ref, computed, watch, toRefs } from "vue";

export default {
  props: {
    tasks: {
      type: Object,
      default() {
        return {};
      },
    },
    checkedTask: {
      type: Number,
    },
    setChecked: {
      type: Function,
    },
    removeChecked: {
      type: Function,
    },
  },
  setup(props) {
    //props传递
    const setChecked = props.setChecked; //方法

    //计算属性
    const isAllCheck = computed({
      get() {
        return props.checkedTask === props.tasks.state.length;
      },
      set(value) {
        if (value) {
          setChecked(value);
        } else {
          setChecked(value);
        }
      },
    });
    //watch
    // watch(tasks, () => {}, {
    //   immediate: true, // 是否初始化立即执行一次, 默认是false
    //   deep: true, // 是否是深度监视, 默认是false
    // });

    return {
      isAllCheck,
      ...toRefs(props),
    };
  },
};
</script>

<style lang="scss" scoped>
.footers {
  width: 95%;

  .margin-left {
    margin-left: 20px;
  }
}
</style>