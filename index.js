//manifest loader for replacing rev'd sources
var loaderUtils = require('loader-utils');
var path = require('path');
var gutil = require('gulp-util');

module.exports = function(content) {

    this.cacheable && this.cacheable();
    var callback = this.async();

    var options = loaderUtils.parseQuery(this.query);
    var manifest = require(path.join(options.outputDir, options.manifest));
    var relativeSplit = options.relativeSplit || '/';
    var fileName = this.resourcePath.split(relativeSplit)[1] || '';
    var prefix = options.prefix || '';
    var result = manifest[fileName] ? path.join(prefix, manifest[fileName]) : '';

    gutil.log('manifest loader:', gutil.colors.gray(fileName), '>', gutil.colors.green(result));
    callback(null, 'module.exports = "' + result + '"');

};

module.exports.raw = true;
