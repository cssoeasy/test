// 在项目根目录下创建一个 main.js，用于作为 Electron 应用的入口
// 从此，每次运行 Electron，只需要输入
//
// # 运行构建指令
// yarn build
// # 使用electron运行构建出来的Web项目
// yarn estart

const { app, BrowserWindow } = require('electron');

// 浏览器引用
let window;

// 创建浏览器窗口函数
let createWindow = () => {
    // 创建浏览器窗口
    window = new BrowserWindow({
        width: 800,
        height: 600
    });

    // 加载应用中的index.html文件
    window.loadFile('./build/index.html/');

    // 当window被关闭时，除掉window的引用
    window.on('closed', () => {
        window = null;
    });
};

// 当app准备就绪时候开启窗口
app.on('ready', createWindow);

// 当全部窗口都被关闭之后推出
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

// 在macos上，单击dock图标并且没有其他窗口打开的时候，重新创建一个窗口
app.on('activate', () => {
    if (window == null) {
        createWindow();
    }
});