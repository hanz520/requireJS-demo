// 非依赖的函数式
define(function(require,exports,modules) {
  // 非依赖的函数式这样导入依赖，而不能在function(require,exports,modules)前面以数组形式添加依赖，否则报错
  // var example = require('example');
  function dateFormater(date, fmt) {
    if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
    }
    var o = {
      'M+': date.getMonth() + 1,
      'd+': date.getDate(),
      'h+': date.getHours(),
      'm+': date.getMinutes(),
      's+': date.getSeconds()
    }
    for (var k in o) {
      if (new RegExp('(' + k + ')').test(fmt)) {
        var str = o[k] + ''
        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str))
      }
    }
    return fmt
  }
  
  function padLeftZero(str) {
    return ('00' + str).substr(str.length)
  }
  return dateFormater

  // 非依赖的函数式可以 exports 导出，但是导出的东西是一个对象了，而不是直接一个dateFormater方法
  // exports.dateFormater = dateFormater  
});