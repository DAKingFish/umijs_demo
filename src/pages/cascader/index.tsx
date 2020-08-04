import React, { useState } from 'react'; //说明该组件是引入react的,并且加入useState方法(hook)
import './index.less'; //导入类或文件要加''
/**
 * 级联就是双向绑定,异步操作
 *
 */
const list1: any = [
  {
    value: 1,
    label: 's1',
    list: [
      {
        value: 1,
        label: 'Fnc',
        list: [
          {
            value: 1,
            label: '上单 theshy',
          },
          {
            value: 2,
            label: '中单 rooike',
          },
          {
            value: 3,
            label: '打野 ning',
          },
          {
            value: 4,
            label: 'adc Jacklove',
          },
          {
            value: 5,
            label: '辅助 baolan',
          },
        ],
      },
      {
        value: 2,
        label: 'TAP',
        list: [
          {
            value: 1,
            label: '上单 zoom',
          },
          {
            value: 2,
            label: '中单 yagao',
          },
          {
            value: 3,
            label: '打野 kanavi',
          },
          {
            value: 4,
            label: 'adc loken',
          },
          {
            value: 5,
            label: '辅助 lvmao',
          },
        ],
      },
    ],
  },
  {
    value: 2,
    label: 's2',
    list: [
      {
        value: 1,
        label: 'SKT',
        list: [
          {
            value: 1,
            label: '上单 zoom',
          },
          {
            value: 2,
            label: '中单 yagao',
          },
          {
            value: 3,
            label: '打野 kanavi',
          },
          {
            value: 4,
            label: 'adc loken',
          },
          {
            value: 5,
            label: '辅助 lvmao',
          },
        ],
      },
      {
        value: 2,
        label: 'SSW',
        list: [
          {
            value: 1,
            label: '上单 957',
          },
          {
            value: 2,
            label: '中单 xiye',
          },
          {
            value: 3,
            label: '打野 condi',
          },
          {
            value: 4,
            label: 'adc mystic',
          },
          {
            value: 5,
            label: '辅助 ben',
          },
        ],
      },
    ],
  },
  {
    value: 3,
    label: 's3',
    list: [
      {
        value: 1,
        label: 'IG',
        list: [
          {
            value: 1,
            label: '上单 theshy',
          },
          {
            value: 2,
            label: '中单 rooike',
          },
          {
            value: 3,
            label: '打野 ning',
          },
          {
            value: 4,
            label: 'adc Jacklove',
          },
          {
            value: 5,
            label: '辅助 baolan',
          },
        ],
      },
      {
        value: 2,
        label: 'WE',
        list: [
          {
            value: 1,
            label: '上单 957',
          },
          {
            value: 2,
            label: '中单 xiye',
          },
          {
            value: 3,
            label: '打野 condi',
          },
          {
            value: 4,
            label: 'adc mystic',
          },
          {
            value: 5,
            label: '辅助 ben',
          },
        ],
      },
    ],
  },
];
export default (props: any) => {
  const [value1, setvalue1]: any = useState();
  const [value2, setvalue2]: any = useState();
  const [value3, setvalue3]: any = useState();
  //
  const list2 = list1.find((item: any) => {
    return item.value === value1;
  }) || { list: [] };
  const list3 = list2.list.find((item: any) => {
    return item.value === value2;
  }) || { list: [] };

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
          setvalue2(Number(e.target.value));
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

      <select
        value={value3}
        onChange={(e: any) => {
          setvalue3(e.target.value);
        }}
      >
        {list3.list.map((item: any) => {
          return (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          );
        })}
      </select>
      <br />
      <input
        onChange={(e: any) => {
          setvalue1(Number(e.target.value));
        }}
        placeholder="输入赛季"
        value={value1}
      />
      <input
        onChange={(e: any) => {
          setvalue2(Number(e.target.value));
        }}
        placeholder="输入队伍"
        value={value2}
      />
      <input
        onChange={(e: any) => {
          setvalue3(Number(e.target.value));
        }}
        placeholder="位置"
        value={value3}
      />
    </div>
  );
};
