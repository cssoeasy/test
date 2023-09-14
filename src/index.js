import React from 'react';
import ReactDom from 'react-dom';
import { MainRouter } from "./router";

// 将一个<MainRouter/>标题，插入 id="root" 节点中
ReactDom.render(
    <MainRouter/>,
    document.getElementById('root')
);