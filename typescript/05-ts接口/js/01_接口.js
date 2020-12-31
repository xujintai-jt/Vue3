"use strict";
/*
 * @Author: xujintai
 * @Date: 2020-12-30 17:24:17
 * @LastEditors: xujintai
 * @LastEditTime: 2020-12-31 13:18:28
 * @Description: file content
 * @FilePath: \Vue3\typescript\05-ts接口\接口.ts
 */
(function () {
    var customer = {
        id: 1,
        firstName: "Tom",
        lastName: "Hanks",
        sayHi: function () { return "Hi there"; }
    };
    // customer.id = 2  id为只读属性，修改报错
    customer.lastName = 'Jack';
    console.log(customer);
    var mySearch = function (source, sub) {
        console.log(source.search(sub));
        return source.search(sub) > -1;
    };
    console.log(mySearch('abcd', 'c'));
    var a;
    a = 123;
    a = '123';
    var b;
    b = undefined;
})();
