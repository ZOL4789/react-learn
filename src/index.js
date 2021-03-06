// 引入React核心库
import React from 'react';
// 引入ReactDOM
import ReactDOM from 'react-dom';
// 引入App组件
import App from './App';


// 渲染组件
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
