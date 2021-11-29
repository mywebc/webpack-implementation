/**
 * @description 同步loader, 必须返回buffer/string
 */

const loaderUtils = require('loader-utils')

module.exports = function (source) {
    const options = loaderUtils.getOptions(this);
    // this.callback(null, source);
    return source.replace(/var/g, options.message)

}