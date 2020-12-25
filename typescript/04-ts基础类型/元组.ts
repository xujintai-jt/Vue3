/*
 * @Author: xujintai
 * @Date: 2020-12-25 15:42:03
 * @LastEditors: xujintai
 * @LastEditTime: 2020-12-25 15:46:49
 * @Description: file content
 * @FilePath: \Vue3\typescript\04-ts基础类型\元组.ts
 */
(() => {
  let t1: [string, number] = ['abc', 123]
  console.log(t1);
  t1 = ['fff', 456]
  console.log(t1);
  // t1 = [456, 'fff']
  // console.log(t1);
})()