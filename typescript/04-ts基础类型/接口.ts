/*
 * @Author: xujintai
 * @Date: 2020-12-28 19:35:01
 * @LastEditors: xujintai
 * @LastEditTime: 2020-12-28 21:49:20
 * @Description: file content
 * @FilePath: \Vue3\typescript\04-ts基础类型\接口.ts
 */
//接口
interface IPerson {
  firstName: string,
  lastName: string,
  sayHi: () => string
}

var customer: IPerson = {
  firstName: "Tom",
  lastName: "Hanks",
  sayHi: (): string => { return "Hi there" },
}

console.log(customer.hasOwnProperty('sayHi'));//true
console.log(customer.hasOwnProperty('lastName'));//truef
console.log(customer);

