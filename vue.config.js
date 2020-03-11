const replace = require('rollup-plugin-replace')

module.exports = {
  pluginOptions: {
    p11n: {
      configureRollup: {
        plugins: [
          replace({
            '../assets/logo.png': "'../src/assets/logo.png'"
          })
        ]
      }
    }
  }
}