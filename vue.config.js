const path = require('path')

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  pages: {
    index: 'src/views/index',
    home: 'src/views/home'
  },
  publicPath: '/',
  productionSourceMap: false,
  assetsDir: 'web-client',
  devServer: {
    // can be overwritten by process.env.HOST
    host: '0.0.0.0',
    port: 2588
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
  },
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        win: {
          icon: './public/web-client/ico/app.ico'
        },
        mac: {
          icon: './public/web-client/ico/app.icns'
        },
        productName: 'electron-cross-vue'
      }
    }
  }
}
