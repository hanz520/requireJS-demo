({  
  baseUrl: '../js/',
  // 打包的输出目录
  dir: '../dist',
  // name: 'index',
  paths: {
    'jquery': 'lib/jquery',
    'dateFormater': 'tool/dateFormater',
    'getWeather': 'tool/getWeather',
    'trim': 'tool/trim',
    'verify': 'tool/verify'
  },
  // 打包的模块
  modules: [
    { 
      name: 'index',
      exclude: ['jquery']
    },
    { 
      name: 'login',
      exclude: ['jquery']
    },
    { 
      name: 'register',
      exclude: ['jquery']
    }
  ],
})