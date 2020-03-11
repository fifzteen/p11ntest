const replace = require('rollup-plugin-replace')

module.exports = {
  pluginOptions: {
    p11n: {
      configureRollup: {
        plugins: [
          replace({
            imgpath: "'../src/assets/logo.png'"
          })
        ]
      }
    }
  }
}