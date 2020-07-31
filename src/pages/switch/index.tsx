import React, { useState } from 'react'; //说明该组件是引入react的,并且加入useState方法(hook)
//在程序开发过中.组件变化,其父组件是不知道,所以才会让useState方法去通知父组件的变化
import './index.less'; //导入类或文件要加''
//组件的两种向外抛出形式
//以组件名的方式抛出
//单一index.tsx直接抛出
//创建组件名
const Switch = (props: any) => {
  //组件名不能重复,常识
  //选择开关里面的属性
  const { checked, setChecked } = props; //const 定义常量,props就是父子组件的信息传递
  //
  return (
    //return 返回逻辑dome显示 是要()
    <div>我是switch</div>
  );
};
export default Switch;
