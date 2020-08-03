import React, { useState } from 'react'; //说明该组件是引入react的,并且加入useState方法(hook)
import './index.less'; //导入类或文件要加''
/**
 * 级联就是双向绑定,异步操作
 *
 */
export default (props: any) => {
  const [value1, setvalue1] = useState(1);
  const [value2, setvalue2] = useState();
  const [list1, setlist1]: any = useState([
    {
      value: 1,
      label: 's1',
      list: [
        {
          value: '1',
          label: 'Fnc',
        },
        {
          value: '2',
          label: 'TAP',
        },
      ],
    },
    {
      value: 2,
      label: 's2',
      list: [
        {
          value: '1',
          label: 'SKT',
        },
        {
          value: '2',
          label: 'SSW',
        },
      ],
    },
    {
      value: 3,
      label: 's3',
      list: [
        {
          value: '1',
          label: 'IG',
        },
        {
          value: '2',
          label: 'WE',
        },
      ],
    },
  ]);
  const list2 = list1.find((item: any) => {
    return item.value === value1;
  });
  return (
    <div>
      <select
        value={value1}
        onChange={(e: any) => {
          setvalue1(Number(e.target.value));
        }}
      >
        {list1.map((item: any) => {
          return (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          );
        })}
      </select>

      <select
        value={value2}
        onChange={(e: any) => {
          setvalue2(e.target.value);
        }}
      >
        {//遍历list1中选中value的list属性
        list2.list.map((item: any) => {
          return (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          );
        })}
      </select>
      <span>
        {value1}/{value2}
      </span>
    </div>
  );
};
