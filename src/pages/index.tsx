import React, { useState } from 'react';
import styles from './index.less';
import Radio from './radio';
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
    </div>
  );
};
