import React, { useState } from 'react'; //说明该组件是引入react的,并且加入useState方法(hook)
import './index.less'; //导入类或文件要加''
import { Icon } from 'antd';
/**
 * 直接抛
 */
//在文件只有一个index情况下直接抛出
export default (props: any) => {
  //创建展示集合
  const [taglist, setTaglist]: any = useState([]);
  const [value, setValue] = useState('');

  return (
    <div className="app">
      <div className="app_top">
        {taglist.map((item: any, index: any) => {
          return (
            <span key={item.id}>
              {item.value}
              <Icon
                type="close"
                onClick={e => {
                  console.log(e.target);
                  taglist.splice(index, 1);
                  setTaglist([...taglist]); // render
                }}
              />
            </span>
          );
        })}
      </div>
      <div className="app_botton">
        <input
          placeholder="请输入新的tag"
          value={value}
          onChange={e => {
            setValue(e.target.value);
          }}
          onKeyDown={(e: any) => {
            if (e.keyCode === 13) {
              //去重操作用some()来判断
              if (
                !taglist.some((item: any) => {
                  return item.value === e.target.value;
                })
              ) {
                taglist.push({
                  //添加到taglist
                  id: Math.random(),
                  value: e.target.value,
                });
              }
              setTaglist([...taglist]); // render
              setValue('');
            }
          }}
          onBlur={e => {
            //去重操作用some()来判断
            if (
              !taglist.some((item: any) => {
                return item.value === e.target.value;
              })
            ) {
              taglist.push({
                //添加到taglist
                id: Math.random(),
                value: e.target.value,
              });
            }
            setTaglist([...taglist]); // render
            setValue('');
          }}
        ></input>
      </div>
    </div>
  );
};
