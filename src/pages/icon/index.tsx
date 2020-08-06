import React, { useState } from 'react';
import './index.less';
export default (props: any) => {
  //思路
  /**
   * icon组件
   * 通过获取porps.type获取引用值
   * 规定iconfont对应的名字 type值
   */
  return (
    <div>
      {
        //创建const
        //<i className="iconfont icon-new"></i>
        <i
          className={
            typeof props.type === 'string' && props.type === ''
              ? 'iconfont icon-empty-fill'
              : 'iconfont' + props.type
          }
          onClick={() => {
            alert('我是猴子的学生');
          }}
        ></i>
      }
    </div>
  );
};
