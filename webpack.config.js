var path = require("path")
module.exports = {
    entry: function(){
        return "./js/index.js"
    },
    output: {
        path: "/",    //改为在根目录下
        filename: "lib/bundle.js"
    },
    module: {
        loaders: [
            { test:/\.css$/,loader:'style-loader'},
            { test:/\.css$/,loader:'css-loader'}
        ]
    }
}