"build": "babel src -d lib"  运行 npm run build 即可把 src 目录编译输出到 lib

npm install --save-dev babel-preset-es2015 这个是把es6进行编译
根目录创建一个名为 .babelrc 的文件，里面配置如下内容：新建一个文件名为.babelrc.(在win7下)，linux则直接.babelrc

.babelrc 内容 为
{
        "presets": [
            "es2015"
        ]
    }


npm install --save-dev babel-preset-react  编译react

npm install -save-dev babel-polyfill   
Babel 默认只转换新的 JavaScript 句法（syntax），而不转换新的 API ，比如 Iterator、Generator、Set、Maps、Proxy、Reflect、Symbol、Promise 等全局对象，以及一些定义在全局对象上的方法（比如 Object.assign）都不会转码。Babel 默认不转码的 API 非常多，详细清单可以查看 definitions.js 文件

然后，在需要使用的文件的顶部引入

    import "babel-polyfill"
node.js 中：

    require('babel-polyfill');
webpack.config.js 中：

    module.exports = {
        entry: ['babel-polyfill', './app/js']
    }

