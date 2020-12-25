/*
 * @Author: xujintai
 * @Date: 2020-12-24 18:21:42
 * @LastEditors: xujintai
 * @LastEditTime: 2020-12-24 18:27:31
 * @Description: file content
 * @FilePath: \Vue3\typescript\test1.ts
 */
(function fn(str: string) {
  let x = ' hahaha'
  console.log('你好啊' + str + x);
}(' xjt'))

{
  let a = 1
}

//1.ts中的let，编译为var
//2.ts中的类型限制，编译后消失