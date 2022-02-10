class DemoWebpackPlugin {
    constructor() {
        this.filename = 'fileList.md'
    }
    // 需要实现此函数， compiler是webpack的实例
    // 此函数可以操作webpack本次打包的各个时间节点（hooks，也就是生命周期勾子）
    apply(compiler) {
        // 一个新的编译(compilation)创建之后（同步）
        // compilation代表每一次执行打包，独立的编译
        compiler.hooks.compile.tap('DemoWebpackPlugin', compilation => {
            // console.log(compilation)
        })
        // 生成资源到 output 目录之前（异步）
        compiler.hooks.emit.tapAsync('DemoWebpackPlugin', (compilation, fn) => {
            const fileListName = this.filename;
            let len = Object.keys(compilation.assets).length;
            let content = `# 一共有${len}个文件\n\n`;
            for (let filename in compilation.assets) {
                content += `- ${filename}\n`
            }
            compilation.assets[fileListName] = {
                // 文件内容
                source: function () {
                    return content
                },
                // 文件尺寸
                size: function () {
                    return content.length
                }
            }
            fn()
        })
    }
}

module.exports = DemoWebpackPlugin
