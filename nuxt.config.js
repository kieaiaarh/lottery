export default {
  build: {
    /*
     ** You can extend webpack config here
     */

  filenames: {
    app: ({ isDev }) => isDev ? '[name].[hash].js' : '[chunkhash].js',
    chunk: ({ isDev }) => isDev ? '[name].[hash].js' : '[chunkhash].js'
  },
    extend(config, ctx) {}
  }
}
