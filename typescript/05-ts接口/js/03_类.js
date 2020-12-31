"use strict";
/*
 * @Author: xujintai
 * @Date: 2020-12-31 13:52:03
 * @LastEditors: xujintai
 * @LastEditTime: 2020-12-31 14:25:32
 * @Description: file content
 * @FilePath: \Vue3\typescript\05-ts接口\03_类.ts
 */
(function () {
    //1.多个接口约束类
    var myFly = /** @class */ (function () {
        function myFly() {
        }
        myFly.prototype.myfly = function () {
            console.log('myfly');
        };
        myFly.prototype.myRun = function () {
            console.log('myRun');
        };
        return myFly;
    }());
    var fly = new myFly();
    console.log(fly);
    var myFly2 = /** @class */ (function () {
        function myFly2() {
        }
        myFly2.prototype.myfly = function () {
            console.log('myfly');
        };
        myFly2.prototype.myRun = function () {
            console.log('myRun');
        };
        return myFly2;
    }());
})();
