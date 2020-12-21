module.exports = {
  publicPath: '/',
  // publicPath: process.env.NODE_ENV === 'development' ?  './' : '/',
  outputDir: 'Root',
  devServer:{
    port: 8000,
    host: '0.0.0.0',
    open: true,
  }
}