<!--
 * @Author: xujintai
 * @Date: 2020-12-31 16:38:52
 * @LastEditors: xujintai
 * @LastEditTime: 2021-01-12 13:30:06
 * @Description: file content
 * @FilePath: \Vue3\vue3-demo\src\App.vue
-->
<template>
  <div id="app">
    <headers :addTasks="addTasks" :removeTask="removeTask" />
    <list />
    <footers :tasks="tasks" :checkedTask="checkedTask" />
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
    const tasks = reactive([
      { id: 1, name: "宝马", checked: true },
      { id: 2, name: "奥迪", checked: true },
      { id: 3, name: "奔驰", checked: true },
    ]);
    //方法类
    //输入框添加数据的方法
    const addTasks = function (value: string) {
      if (value.trim()) {
        const name = value.trim();
        const task = {
          id: 1,
          name,
          checked: false,
        };
        tasks.unshift(task);
      }
    };
    //输入框移除数据的方法
    const removeTask = function (index: number) {
      tasks.splice(index, 1);
    };
    //取消选择框选中的方法
    const removeChecked = function (index: number) {
      tasks[index].checked = false;
    };
    //选择框选中的方法
    const boxChecked = function (index: number) {
      tasks[index].checked = true;
    };

    //计算属性类
    //筛选checked的计算属性
    const checkedTask = computed(() => {
      return tasks.reduce((pre, item) => {
        return pre + (item.checked ? 1 : 0);
      }, 0);
    });

    //provide传递
    //将tasks传递给孙子组件List-item
    provide("tasks", tasks);
    provide("removeTask", removeTask);
    provide("removeChecked", removeChecked);
    provide("boxChecked", boxChecked);

    return { addTasks, removeTask, tasks, checkedTask };
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
  width: 400px;
  border: 1px rgb(187, 185, 185) solid;
}
</style>