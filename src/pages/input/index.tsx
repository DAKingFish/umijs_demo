import React, { useState } from 'react';
import './index.less'; //导入类或文件要加''
export default (props: any) => {
  const [value, setvalue] = useState(props.value);
  return (
    <div className="input-app">
      <input
        value={value}
        onChange={e => {
          setvalue(e.target.value);
        }}
        onKeyDown={(e: any) => {
          e.keyCode === 13 &&
            typeof props.onPressEnter === 'function' &&
            props.onPressEnter(e);
        }}
      />
    </div>
  );
};
