const path = require('path')
const DemoWebpackPlugin = require('./demo-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: {
        main: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    // 这个字段指定loader查找顺序
    resolveLoader: {
        // loader路径查找顺序从左往右
        modules: ['node_modules', './']
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'syncLoader',
                options: {
                    // 将所有var替换为let
                    message: "let"
                }
            },
            {
                loader: 'asyncLoader',
                options: {
                    message: "this is async info;"
                }
            }
        ]
    },
    plugins: [
        new DemoWebpackPlugin()
    ]
}