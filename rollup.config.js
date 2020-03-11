import path from 'path'
import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import vue from 'rollup-plugin-vue'
import replace from 'rollup-plugin-replace'

export default [{
  input: path.join(__dirname, '.', 'src', 'components', 'HelloWorld.vue'),
  output: [
    {
      file: 'dist/p11ntest_rollup.esm.js',
      format: 'es'
    }
  ],
  plugins: [
    vue({css: true}),
    replace({
      imgpath: "'../src/assets/logo.png'"
    }),
    commonjs(),
    babel({
      exclude: 'node_modules/**',
      runtimeHelpers: true
    }),
  ]
}]