/*
 * @Author: xujintai
 * @Date: 2020-12-25 18:47:06
 * @LastEditors: xujintai
 * @LastEditTime: 2020-12-25 19:03:49
 * @Description: file content
 * @FilePath: \Vue3\typescript\04-ts基础类型\Object.ts
 */
(() => {
  //Object 类型
  // let x: object = 123
  // let x: object = "123"
  let x: object = {}
  function fn(obj: object): object {
    console.log(obj);
    return obj
  }
  console.log(fn({ z: '1' }));

})()
