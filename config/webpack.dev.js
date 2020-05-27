const merge = require('webpack-merge');
const common = require('./webpack.config.js');

module.exports = merge(common, {
    devServer: {
        contentBase: './dist', // 根目录，默认同级
        open: true,  // 自动打开浏览器
        port: 8080 // 端口号
    }
})
