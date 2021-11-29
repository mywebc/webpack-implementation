/**
 * @description 异步loader
 */

const loaderUtils = require('loader-utils')

module.exports = function (source) {
    const options = loaderUtils.getOptions(this)
    const asyncfunc = this.async()
    setTimeout(() => {
        source += 'this is extra async info'
        asyncfunc(null, source)
    }, 200)
}
