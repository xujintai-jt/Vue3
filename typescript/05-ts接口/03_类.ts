/*
 * @Author: xujintai
 * @Date: 2020-12-31 13:52:03
 * @LastEditors: xujintai
 * @LastEditTime: 2020-12-31 16:23:06
 * @Description: file content
 * @FilePath: \Vue3\typescript\05-ts接口\03_类.ts
 */
(() => {
  // Ifly接口
  interface Ifly {
    myfly(): any
  }
  // Irun接口
  interface Irun {
    myRun(): any
  }

  //1.多个接口约束类
  class myFly implements Ifly, Irun {
    myfly() {
      console.log('myfly');
    }

    myRun() {
      console.log('myRun');
    }
  }

  let fly = new myFly()
  console.log(fly);

  //2.接口继承多个接口，总接口约束类
  interface flyAndRun extends Ifly, Irun {

  }

  class myFly2 implements flyAndRun {
    myfly() {
      console.log('myfly');
    }

    myRun() {
      console.log('myRun');
    }
  }

  let fly2 = new myFly2()
  console.log(fly2);


})()
