<!--
 * @Author: xujintai
 * @Date: 2020-12-31 16:38:52
 * @LastEditors: xujintai
 * @LastEditTime: 2021-01-19 14:56:20
 * @Description: file content
 * @FilePath: \Vue3\vue3-demo\src\App.vue
-->
<template>
  <div id="app">
    <headers :addTasks="addTasks" :removeTask="removeTask" />
    <list />
    <footers
      :tasks="tasks"
      :checkedTask="checkedTask"
      :setChecked="setChecked"
      :removeChecked="removeChecked"
    />
  </div>
</template>

<script lang="ts">
//引入子组件
import Headers from "./components/Headers.vue";
import List from "./components/List.vue";
import Footers from "./components/Footers.vue";
// 引入方法
import { reactive, provide, computed } from "vue";

export default {
  setup() {
    // const res = JSON.parse(localStorage.getItem("Task") || '{"state":[]}');
    // const tasks = reactive(res);
    const tasks = reactive({
      state: [
        { id: 1, name: "奔驰", checked: false },
        { id: 2, name: "宝马", checked: false },
        { id: 3, name: "奥迪", checked: false },
      ],
    });

    //方法类
    //输入框添加数据的方法
    const addTasks = function (value: string) {
      if (value.trim()) {
        const name = value.trim();
        const task = {
          id: Date.now(),
          name,
          checked: false,
        };
        tasks.state.unshift(task);
      }
    };
    //输入框移除数据的方法
    const removeTask = function (index: number) {
      tasks.state.splice(index, 1);
    };
    //设置所有的checked
    const setChecked = function (isAllChecked: boolean) {
      if (tasks.state.length) {
        tasks.state.forEach((item) => {
          item.checked = isAllChecked;
        });
      }
    };
    //清除选中任务
    const removeChecked = function () {
      // console.log("清除所有信息");
      tasks.state = tasks.state.filter((item) => !item.checked);
    };

    //计算属性类
    //筛选checked的计算属性(使用时取xxx.value)
    const checkedTask = computed(() => {
      const checkedTasks = tasks.state.reduce((pre, item) => {
        return pre + (item.checked ? 1 : 0);
      }, 0);

      return checkedTasks;
    });

    //provide传递
    //将tasks传递给孙子组件List-item
    provide("tasks", tasks);
    provide("removeTask", removeTask);

    return {
      addTasks,
      removeTask,
      tasks,
      checkedTask,
      setChecked,
      removeChecked,
    };
  },

  components: {
    Headers,
    List,
    Footers,
  },
};
</script>

<style lang="scss" scoped>
#app {
  position: absolute;
  top: 10%;
  left: 0;
  right: 0;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 550px;
  border: 1px rgb(187, 185, 185) solid;
}
</style>