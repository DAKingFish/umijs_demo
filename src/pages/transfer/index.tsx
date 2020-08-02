import React, { useState } from 'react'; //说明该组件是引入react的,并且加入useState方法(hook)
import './index.less'; //导入类或文件要加''
import { Icon, Button } from 'antd';
/**
 * 1.创建transfer模型
 * 一个大div里面包含两小div (即是两个checkbox)
 * 2.给两个checkbox的里面元素添加两种激活状态
 * checkbox1激活状态
 * checkbox2激活状态
 */

const Transfer = (props: any) => {
  const renderChecked = (item: any) => {
    return (
      <>
        <input
          checked={item.checked}
          type="checkbox"
          id={item.id}
          onChange={e => {
            item.checked = e.target.checked; // update
            setArr([...arrlist]); // render
          }}
        />
        <label htmlFor={item.id}>{item.label}</label>
      </>
    );
  };
  const [arrlist, setArr]: any = useState([
    {
      label: '用户',
      value: 'user',
      checked: false,
    },
    {
      label: '权限',
      value: 'auth',
      checked: false,
    },
    {
      label: '角色',
      value: 'role',
      checked: false,
    },
  ]);
  const [arrlist1, setArr1]: any = useState([]);
  console.log('arrlist', arrlist);
  return (
    <div className="app">
      <div className="left">
        {//遍历arrlist中元素属性
        arrlist.map((item: any) => {
          //方法里面的()
          return renderChecked(item);
        })}
      </div>
      <div className="mid">
        <Button
          onClick={() => {
            // left <- right
            let arr1 = arrlist1.filter((item: any) => {
              return item.checked;
            });
            setArr(arrlist.concat(arr1)); //
            let arr = arrlist1.filter((item: any) => {
              return !item.checked;
            });
            setArr1(arr);
          }}
        >
          <Icon type="left" />
        </Button>
        <Button
          onClick={() => {
            // left -> right
            let arr = arrlist.filter((item: any) => {
              return !item.checked;
            });
            setArr(arr);

            let arr1 = arrlist.filter((item: any) => {
              return item.checked;
            });
            setArr1(arrlist1.concat(arr1)); //
          }}
        >
          <Icon type="right" />
        </Button>
      </div>
      <div className="right">
        {//遍历arrlist中元素属性
        arrlist1.map((item: any) => {
          //方法里面的()
          return renderChecked(item);
        })}
      </div>
    </div>
  );
};
export default Transfer;
