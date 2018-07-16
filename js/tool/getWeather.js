define(['jquery'], function($) {
  return $.ajax({
    type: 'GET',
    url: 'https://www.tianqiapi.com/api/',
    data: 'version=v1&city=广州',
    dataType: 'JSON',
    error: function () {
        alert('网络错误');
    }
  })
  
});