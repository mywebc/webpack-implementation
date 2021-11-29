# webpack-implementation
### webpack打包原理
1. 从入口读取文件， 解析为ast
2. 递归寻找所有依赖项， 并收集
3. 将ast转化为code, eval函数执行