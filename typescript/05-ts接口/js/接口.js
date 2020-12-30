"use strict";
/*
 * @Author: xujintai
 * @Date: 2020-12-30 17:24:17
 * @LastEditors: xujintai
 * @LastEditTime: 2020-12-30 17:28:11
 * @Description: file content
 * @FilePath: \Vue3\typescript\05-ts接口\接口.ts
 */
var customer = {
    id: 1,
    firstName: "Tom",
    lastName: "Hanks",
    sayHi: function () { return "Hi there"; }
};
// customer.id = 2  id为只读属性，修改报错
customer.lastName = 'Jack';
console.log(customer);
