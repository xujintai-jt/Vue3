/*
 * @Author: xujintai
 * @Date: 2020-12-26 18:29:18
 * @LastEditors: xujintai
 * @LastEditTime: 2020-12-28 19:30:45
 * @Description: file content
 * @FilePath: \Vue3\typescript\04-ts基础类型\联合类型.ts
 */

//联合类型
// let arr: number[] | string[]
// arr = [1, 2, '3']  //报错
// arr = [1, 2, 3]
// arr = ['1', '2', '3']  


//联合类型
function fn(x: string | number) {
  if (typeof x === 'string') {
    return x.length
  }
  else {
    return x.toString().length
  }
}

console.log(fn('hello'));
console.log(fn(12345));