require.config({
	baseUrl: 'js',
	paths: {
    'jquery': 'lib/jquery',
    'dateFormater': 'tool/dateFormater',
    'getWeather': 'tool/getWeather'
	}
});


define(['jquery', 'dateFormater', 'getWeather'], function($, DF, GW) {
  $("#today").html(DF(new Date(), 'yyyy-MM-dd'))

  GW.success(function(res) {
    var $weather = $("#weather")
    var data = res.data[0]
    $weather.find('.wea').text(data.wea)
    $weather.find('.tem').text(data.tem1 + '~' + data.tem2)
    $weather.find('.air').text(data.air_tips)
  })
  
});
