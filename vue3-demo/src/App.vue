<template>
  <div>
    <h2>页面坐标</h2>
    <div>
      <span>X:</span>
      {{value.x}}
    </div>
    <div>
      <span>Y:</span>
      {{value.y}}
    </div>
  </div>
</template>

<script>
import useMousePosition from "./hooks/useMousePosition";
export default {
  // 需求1: 收集用户鼠标点击的页面坐标
  setup() {
    let { value } = useMousePosition();
    return { value };
  },
};
</script>

<style>
</style>

