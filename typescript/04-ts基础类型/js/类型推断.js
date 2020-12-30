"use strict";
/*
 * @Author: xujintai
 * @Date: 2020-12-30 15:22:25
 * @LastEditors: xujintai
 * @LastEditTime: 2020-12-30 17:11:55
 * @Description: file content
 * @FilePath: \Vue3\typescript\04-ts基础类型\类型推断.ts
 */
//1.定义变量时赋值、对应类型
var a = 123;
console.log(typeof a);
//2.定义变量时未赋值、any类型
var b;
console.log(typeof b); //undefined
b = 10;
console.log(typeof b); //number
b = '10';
console.log(typeof b); //string
