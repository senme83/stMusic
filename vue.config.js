module.exports = {
  publicPath: './',
  chainWebpack(config) {
    config.plugins.delete('preload') 
    config.plugins.delete('prefetch') 
  }
}