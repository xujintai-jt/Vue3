/*
 * @Author: xujintai
 * @Date: 2020-12-24 20:18:44
 * @LastEditors: xujintai
 * @LastEditTime: 2020-12-24 20:35:31
 * @Description: file content
 * @FilePath: \Vue3\typescript\vscode自动编译ts\类.ts
 */
(() => {
  //接口类型
  interface greeter {
    firstName: string
    lastName: string
    fullName: string
  }

  //Person类
  class Person {
    firstName: string
    lastName: string
    fullName: string

    constructor(firstName: string, lastName: string) {
      this.firstName = firstName
      this.lastName = lastName
      this.fullName = lastName + "-" + firstName
    }
  }

  function fn(p: greeter) {
    return p.lastName + '-' + p.firstName + ' // ' + p.fullName
  }

  let person = new Person('jintai', 'xu')

  console.log(fn(person));


})()