/*
 * @Author: xujintai
 * @Date: 2020-12-30 17:24:17
 * @LastEditors: xujintai
 * @LastEditTime: 2020-12-30 17:28:11
 * @Description: file content
 * @FilePath: \Vue3\typescript\05-ts接口\接口.ts
 */

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

