const path = require('path')

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
                    message: "this is sync info"
                }
            },
            {
                loader: 'asyncLoader'
            }
        ]
    }
}