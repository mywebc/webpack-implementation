/**
 * @description 异步loader
 */

const loaderUtils = require('loader-utils')

module.exports = function (source) {
    const options = loaderUtils.getOptions(this);
    const asyncfunc = this.async();
    setTimeout(() => {
        // source += options.message;
        asyncfunc(null, source);
    }, 200)
}
