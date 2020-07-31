import React, { useState } from 'react';
import './index.less';
export default (props: any) => {
  const { value, dataList, onChange } = props;
  const [_value, setValue] = useState(value); // 选中的值
  return (
    <div className="radio">
      {dataList &&
        dataList.map((item: any) => {
          return (
            <button
              className={item.value === _value ? 'checked' : 'none'}
              key={item.value}
              onClick={() => {
                setValue(item.value);
                onChange(item.value);
              }}
            >
              {item.label}
            </button>
          );
        })}
    </div>
  );
};
