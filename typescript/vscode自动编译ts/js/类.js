/*
 * @Author: xujintai
 * @Date: 2020-12-24 20:18:44
 * @LastEditors: xujintai
 * @LastEditTime: 2020-12-24 20:35:31
 * @Description: file content
 * @FilePath: \Vue3\typescript\vscode自动编译ts\类.ts
 */
(function () {
    //Person类
    var Person = /** @class */ (function () {
        function Person(firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.fullName = lastName + "-" + firstName;
        }
        return Person;
    }());
    function fn(p) {
        return p.lastName + '-' + p.firstName + ' // ' + p.fullName;
    }
    var person = new Person('jintai', 'xu');
    console.log(fn(person));
})();
