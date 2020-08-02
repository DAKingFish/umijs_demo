import React, { useState } from 'react'; //说明该组件是引入react的,并且加入useState方法(hook)
import './index.less'; //导入类或文件要加''
import { Tag, Input, Button } from 'antd';
const container = [
  {
    text: 'ar压缩包的解压方法',
  },
  {
    text: '项目框架架构与优化 阶段8、',
  },
  {
    text: '明该组件是引入rea',
  },
  {
    text: '义常量,props就是父子组件的信息传递',
  },
  {
    text: 'onClick(value + number)',
  },
  {
    text: ' const [number, setNu] = useState(0)',
  },
];
/**
 *
 * 1: 创建输入框样式
 * 2: 给输入框绑定值
 * 3: 获取输入内容进行筛选存入显示的容积
 * 4: 展示容积
 */

const Search = (props: any) => {
  const [result, setresult] = useState([]); // 查找结果的集合
  const [keyword, setkeyword] = useState(''); // keyword
  return (
    <>
      <div className="app">
        <Input
          style={{ width: 200 }}
          placeholder="请输入查询"
          onChange={e => {
            setkeyword(e.target.value);
          }}
          value={keyword}
        />
        <Button
          type="primary"
          onClick={() => {
            // 过滤数据
            let result: any = container.filter((item, index, arr) => {
              return item.text.includes(keyword);
            });
            setresult(result);
          }}
        >
          搜索
        </Button>
        <Button
          onClick={() => {
            setkeyword(''), setresult([]);
          }}
        >
          清除
        </Button>
      </div>
      <div>
        显示结果:
        {result.map((item: any) => {
          return <Tag key={item.text}>{item.text}</Tag>;
        })}
      </div>
    </>
  );
};
export default Search;
