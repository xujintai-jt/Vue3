/*
 * @Author: xujintai
 * @Date: 2020-12-30 17:24:17
 * @LastEditors: xujintai
 * @LastEditTime: 2020-12-31 13:18:28
 * @Description: file content
 * @FilePath: \Vue3\typescript\05-ts接口\接口.ts
 */

(() => {
  //接口：对象类型
  interface IPerson {
    readonly id: number
    firstName: string,
    lastName: string,
    sex?: string
    sayHi: () => string
  }

  var customer: IPerson = {
    id: 1,
    firstName: "Tom",
    lastName: "Hanks",
    sayHi: (): string => { return "Hi there" }
  }

  // customer.id = 2  id为只读属性，修改报错
  customer.lastName = 'Jack'
  console.log(customer);


  //接口:函数类型
  interface SearchFunc {
    (source: string, subString: string): boolean
  }

  const mySearch: SearchFunc = function (source: string, sub: string): boolean {
    console.log(source.search(sub));
    return source.search(sub) > -1
  }

  console.log(mySearch('abcd', 'c'))


  let a: any
  a = 123
  a = '123'

  let b: void
  b = undefined

})()