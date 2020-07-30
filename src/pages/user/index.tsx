import React, { useState } from 'react';
import { Icon, Input, Button } from 'antd';
import './index.less';
const User = (props: any) => {
  const { addClick, dataList, removeClick } = props;
  const [list, setlist] = useState(
    props.dataList || [
      {
        imgsrc:
          'https://pic4.zhimg.com/100/v2-dd69c1283d5217f3ed4bf32e52f95863_hd.png',
        title: '快乐随心任性飞 机票选购指南',
        subtitle: '更新 * 1,074,248 浏览',
        btnTitle: '关注专题',
        textlist: [
          {
            title: '买它打卡美好中国，能否值回票价？',
            subtitle: '海航随心飞',
          },
          {
            title: '买它打卡美好中国，能否值回票价？',
            subtitle: '海航随心飞',
          },
          {
            title: '买它打卡美好中国，能否值回票价？',
            subtitle: '海航随心飞',
          },
        ],
      },
    ],
  ); // hooks
  const add = () => {
    list.push();
    setrender(!render); // 刷新
    props.addClick && props.addClick(); // 父组件通信
  };
  const remote = () => {
    list.splice(0, 1);
    setrender(!render); // 刷新
    props.removeClick && props.removeClick();
  };
  const [render, setrender] = useState(false); // 控制刷新
  return (
    <div>
      <div style={{ margin: 10 }}>
        <Button type="primary" onClick={add} style={{ marginRight: 20 }}>
          <Icon type="plus" />
        </Button>
        <Button type="primary" onClick={remote}>
          <Icon type="minus" />
        </Button>
      </div>
      {list.map((item: any) => {
        //遍历属性并给定专有的样式盒子
        return (
          <div className="zhihuModel">
            <div className="model_top">
              <img src={item.imgsrc} style={{ width: 300, height: 140 }} />
            </div>
            <div className="model_mid">
              <div className="mid_left">
                <div className="title">{item.title}</div>
                <div className="subtitle">{item.subtitle}</div>
              </div>
              <div className="mid_right">
                <div className="btnTitle">
                  <Button>{item.btnTitle}</Button>
                </div>
              </div>
            </div>
            <div className="model_button">
              {item.textlist.map((item: any) => {
                return (
                  <div>
                    <span>{item.subtitle}</span>
                    <span>{item.title}</span>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default User;
