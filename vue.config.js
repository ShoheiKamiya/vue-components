const path= require('path')
const fs= require('fs')

module.exports = {
  publicPath: '/vue-components/',
  outputDir: 'docs',
  devServer: {
    https: process.env.NODE_ENV === 'production' ? {} : {
      key: fs.readFileSync(path.resolve(__dirname, 'localhost-key.pem')),
      cert: fs.readFileSync(path.resolve(__dirname, 'localhost.pem'))
    }
  }
};
