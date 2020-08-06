import React, { useState } from 'react';
import styles from './index.less';
import Radio from './radio';
import Switch from './switch';
import Button from './button';
import Input from './input';
import Icon from './icon';
export default () => {
  const [value, setValue] = useState(); // 选中的值
  return (
    <div>
      <h1 className={styles.title}>Page index {value} </h1>
      <Radio
        value={1}
        onChange={(value: any, e: any) => {
          setValue(value);
        }}
        dataList={[
          {
            // 数据源
            label: 'shanghai',
            value: 0,
          },
          {
            label: 'beijing',
            value: 1,
          },
          {
            label: 'shanghai',
            value: 2,
          },
          {
            label: 'anhui',
            value: 3,
          },
        ]}
      />
      <Switch></Switch>
      <Button
        value={100}
        onClick={(value: any) => {
          setValue(value);
        }}
      ></Button>
      <Input
        onPressEnter={(e: any) => {
          alert(e.target.value);
        }}
      />
      <Icon type=""></Icon>
      <Icon type=" icon-weizhi"></Icon>
      <Icon type=" icon-yunjiankongBCM"></Icon>
      <Icon type={() => {}}></Icon>
    </div>
  );
};
