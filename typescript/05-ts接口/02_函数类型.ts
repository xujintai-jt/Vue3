/*
 * @Author: xujintai
 * @Date: 2020-12-31 13:29:14
 * @LastEditors: xujintai
 * @LastEditTime: 2020-12-31 13:37:00
 * @Description: file content
 * @FilePath: \Vue3\typescript\05-ts接口\02_函数类型.ts
 */

(() => {
  //接口定义 函数类型
  interface mySearch {
    (source: string, substring: string): boolean
  }

  const search: mySearch = function (source: string, substring: string): boolean {
    // console.log(source.search(substring));
    return source.search(substring) > -1
  }


  console.log(search('wwf', 'f'));



})()