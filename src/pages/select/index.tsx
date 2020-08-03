import React, { useState } from 'react'; //说明该组件是引入react的,并且加入useState方法(hook)
import './index.less'; //导入类或文件要加''
/**
 * 两种抛出模式
 * 1.组件名抛出
 * 2.单独抛出
 *
 */
//在文件只有一个index情况下直接抛出
export default (props: any) => {
  //创建select项目的集合 并用useSate进行绑定
  const [value, setvalue]: any = useState();
  const [selectlist, setList] = useState([
    {
      value: '1',
      label: '数学',
      check: false,
    },
    {
      value: '2',
      label: '英语',
      check: false,
    },
    {
      value: '3',
      label: '语文',
      check: false,
    },
    {
      value: '4',
      label: '英语',
      check: false,
    },
  ]);
  return (
    <div className="qpp">
      <select
        value={value}
        onChange={e => {
          setvalue(e.target.value);
        }}
      >
        {selectlist.map((item: any) => {
          return (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          );
        })}
      </select>
      <div>
        选中的值:
        <input
          value={value}
          onChange={e => {
            setvalue(e.target.value);
          }}
        />
      </div>
    </div>
  );
};
