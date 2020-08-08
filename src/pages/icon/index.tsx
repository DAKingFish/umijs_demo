import React from 'react';
import './index.less';
export default (props: any) => {
  //思路
  /**
   * icon组件
   * 通过获取porps.type获取引用值
   * 规定iconfont对应的名字 type值
   */
  return (
    <i
      className={'iconfont ' + props.type}
      onClick={() => {
        typeof props.onClick === 'function' && props.onClick();
      }}
    ></i>
  );
};
