import React, { useState } from 'react';
import { message } from 'antd';
import './index.less';
export default (props: any) => {
  const [list, setList]: any = useState([]);
  const addList = () => {
    list.push({
      key: Math.random(),
      value1: '',
      value2: '',
    });
    setList([...list]);
  };
  const label = '< 金额 <=';
  const submit = () => {
    let error = list.some((item: any) => {
      return Number(item.value1) > Number(item.value2);
    });
    if (error) {
      return message.error('error');
    }
    if (isError()) {
      return message.error('优惠金额重叠');
    }
    message.success('success');
    // api ==>
  };
  const isError = () => {
    list.sort((a: any, b: any) => {
      return a.value1 > b.value1 ? 1 : -1;
    });
    let error = list.some((item: any, index: any) => {
      if (index < list.length - 1) {
        return Number(list[index + 1].value1) < Number(item.value2);
      }
      return false;
    });
    return error;
  };
  return (
    <div>
      <div>
        活动规则:
        <button className="app-add" onClick={addList}>
          添加活动规则
        </button>
      </div>
      <div>
        {list.map((item: any, index: any) => {
          return (
            <div key={item.key}>
              <input
                value={item.value1}
                onChange={(e: any) => {
                  item.value1 = e.target.value;
                  setList([...list]);
                }}
                placeholder="最小"
              />
              <span>{label}</span>
              <input
                value={item.value2}
                onChange={(e: any) => {
                  item.value2 = e.target.value;
                  setList([...list]);
                }}
                placeholder="最大"
              />
            </div>
          );
        })}
      </div>
      <div>
        <button onClick={submit}>提交</button>
      </div>
    </div>
  );
};
