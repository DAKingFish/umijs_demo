import React, { useState } from 'react'; //说明该组件是引入react的,并且加入useState方法(hook)
import './index.less'; //导入类或文件要加''
export default (props: any) => {
  //创建控制更新页面的usestate
  const [list, setList] = useState([
    {
      label: '介绍',
      value: '0',
      expand: false,
      active: false,
      list: [
        {
          label: '介绍',
          value: '0-0',
          active: false,
        },
        {
          label: '快速上手',
          value: '0-1',
          active: false,
        },
      ],
    },
    {
      label: '写组件Demo',
      value: '1',
      active: false,
      list: [
        {
          value: '1-0',
          label: 'dumi的Demo理念',
          active: false,
        },
        {
          value: '1-1',
          label: 'Demo的类型',
          active: false,
        },
        {
          value: '1-2',
          label: '控制Demo渲染',
          active: false,
        },
      ],
    },
    {
      label: '控制菜单和路由生成',
      value: '2',
      expand: true,
      active: false,
      list: [
        {
          label: '控制路由生成',
          value: '2-0',
          active: false,
        },
        {
          label: '控制菜单生成',
          value: '2-1',
          active: false,
        },
        {
          label: '控制导航生成',
          value: '2-2',
          active: false,
        },
      ],
    },
    {
      label: '更多用法',
      value: '3',
      active: false,
      list: [
        {
          label: '多种呈现模式',
          value: '3-0',
          active: false,
        },
      ],
    },
  ]);
  //创建修改激活状态的方法
  const listActive = (list: any, index: any, index1: any) => {
    list.forEach((item: any, _index: number) => {
      item.active = _index === index;
      item.list.forEach(
        (item1: any, _index1: number) =>
          (item1.active = _index === index && _index1 === index1),
      );
    });
  };

  return (
    <div className="app-list">
      {//list === undefined ? list=[] : list
      list.map((item, index) => {
        //加判断显示不同样式
        return (
          <div
            className={item.active ? 'app-label-active' : 'app-label'}
            key={item.value}
            onClick={() => {
              //单击判断,
              item.expand ? (item.expand = false) : (item.expand = true);
              listActive(list, index, '');
              setList([...list]); // 不知怎么熟练使用 {}
            }}
          >
            {item.label}
            {item.expand &&
              item.list.map((children, index1) => {
                return (
                  <div
                    className={
                      children.active ? 'app-sub-label-active' : 'app-sub-label'
                    }
                    key={children.value}
                    // js事件冒泡
                    onClick={e => {
                      e.stopPropagation(); // 阻止冒泡
                      listActive(list, index, index1);
                      setList([...list]); // 不知怎么熟练使用 {}
                    }}
                  >
                    {children.label}
                  </div>
                );
              })}
          </div>
        );
      })}
    </div>
  );
};
