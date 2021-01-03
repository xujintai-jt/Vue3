/*
 * @Author: xujintai
 * @Date: 2021-01-03 19:24:33
 * @LastEditors: xujintai
 * @LastEditTime: 2021-01-03 19:33:44
 * @Description: file content
 * @FilePath: \Vue3\vue3-demo\src\hooks\useMousePosition.ts
 */
import { onMounted, reactive, onBeforeUnmount } from "vue";
export default function () {
  const value = reactive({ x: 0, y: 0 });

  function updatePosition(MouseEvent: MouseEvent) {
    value.x = MouseEvent.pageX;
    value.y = MouseEvent.pageY;
    // console.log(value);
  }

  onMounted(() => {
    //click事件监听
    document.addEventListener("click", updatePosition);
  });

  //页面卸载之前移除addEventListener
  onBeforeUnmount(() => {
    document.removeEventListener("click", updatePosition);
  });

  return { value };

}