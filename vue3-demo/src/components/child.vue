<!--
 * @Author: xujintai
 * @Date: 2021-01-01 15:02:20
 * @LastEditors: xujintai
 * @LastEditTime: 2021-01-01 19:10:03
 * @Description: file content
 * @FilePath: \Vue3\vue3-demo\src\components\child.vue
-->
<template>
  <div class="child">
    <h1>child:{{sonName}}</h1>
    <button @click="changeChild">点击改变child值</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      a: 1,
    };
  },
  props: {
    sonName: {
      type: String,
      default: "",
    },
  },
  setup(props, context) {
    console.log("setup_props", props);
    console.log("setup_context", context);
  },
  beforeCreate() {
    console.log("this.sonName  beforeCreate", this.sonName); //this.sonName  beforeCreate wwf
    console.log("this.a  beforeCreate", this.a); //this.a  beforeCreate undefined
  },
  created() {
    console.log("this.a  created", this.a); //this.a  created 1
  },
};
</script>

<style>
</style>