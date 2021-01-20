/*
 * @Author: xujintai
 * @Date: 2021-01-20 12:56:49
 * @LastEditors: xujintai
 * @LastEditTime: 2021-01-20 13:25:03
 * @Description: file content
 * @FilePath: \Vue3\test\Observer.js
 */


export default function Observer(target_Obj) {
  for (var key in target_Obj) {
    if (typeof key === 'object') {
      Observer(target_Obj[key])
    } else {
      defineReactive(target_Obj, key)
    }
  }
}