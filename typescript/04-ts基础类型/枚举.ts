/*
 * @Author: xujintai
 * @Date: 2020-12-25 15:23:41
 * @LastEditors: xujintai
 * @LastEditTime: 2020-12-25 15:37:14
 * @Description: file content
 * @FilePath: \Vue3\typescript\04-ts基础类型\枚举.ts
 */

(() => {
  //1.默认枚举
  enum Color {
    red,
    blue,
    green
  }

  console.log(Color);
  console.log('Color[0]: ' + Color[0] + " ; " + 'Color.red: ' + Color.red);

  console.log("=====================================================================");

  //2.给定序号的枚举
  enum Money {
    Rmb,
    Dollar,
    Franch = 100
  }

  console.log(Money);
  console.log('Money[0]: ' + Money[0] + " ; " + 'Money.Rmb: ' + Money.Rmb);
  console.log('Money[1]: ' + Money[1] + " ; " + 'Money.Dollar: ' + Money.Dollar);
  console.log('Money[2]: ' + Money[2] + " ; " + 'Money.Franch: ' + Money.Franch);
})()