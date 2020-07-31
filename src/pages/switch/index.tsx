import React, { useState } from 'react'; //说明该组件是引入react的,并且加入useState方法(hook)
//在程序开发过中.组件变化,其父组件是不知道,所以才会让useState方法去通知父组件的变化
import './index.less'; //导入类或文件要加''
import { OmitProps } from 'antd/lib/transfer/renderListBody';
//组件的两种向外抛出形式
//以组件名的方式抛出
//单一index.tsx直接抛出
//创建组件名
const Switch = (props: any) => {
  //选择开关
  const {} = props;
};
