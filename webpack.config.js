module.exports = {
  entry:{
    main:'./components/main.js'
  },
  output:{
    filename:'./dist/bundle.js'
  },
  module:{
    loaders:[
      {
        test:/\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader : 'babel',
        query :{
            presets: ['react', 'es2015']
        }
      }
    ]
  }
}
