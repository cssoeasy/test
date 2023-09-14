// 以后添加新页面只需要在 page 中写一个新的页面组件文件，然后修改路由文件，在 Switch 中添加 path 与组件的对应关系即可。
// 接下来再在 /src/index.js 这一入口文件中渲染路由组件
import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { IndexPage } from "./page";

class MainRouter extends React.Component {
    render() {
        return (
            <HashRouter>
                <Routes>
                    <Route path={'/'} element={<IndexPage/>}/>
                </Routes>
            </HashRouter>
        );
    }
}

export {MainRouter};