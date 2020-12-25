/*
 * @Author: xujintai
 * @Date: 2020-12-24 19:30:17
 * @LastEditors: xujintai
 * @LastEditTime: 2020-12-24 19:56:49
 * @Description: file content
 * @FilePath: \Vue3\typescript\vscode自动编译ts\接口.ts
 */
//接口
(function () {
    var person1 = {
        FirstName: 'jintai',
        LastName: 'xu',
    };
    function fn(person) {
        return person.LastName + '_' + person.FirstName;
    }
    console.log(fn(person1));
})();
