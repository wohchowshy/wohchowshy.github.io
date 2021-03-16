module.exports = {
    chainWebpack: config => {
      config
        .plugin('html')
        .tap(args => {
          args[0].title= 'Yizzy Peasy - 程式設計 | 程式筆記 | 自然語言處理'
          return args
        })
    }
  }