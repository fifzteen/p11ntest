const version = '__VERSION__'
import HelloWorld from './components/HelloWorld.vue'

const install = Vue => {
  /*
   * NOTE:
   *   if you need to extend Vue contstructor, you can extend it in here.
   */

  Vue.use(HelloWorld)

  /*
   * NOTE:
   *  somthing implementation here ...
   */
}

const plugin = {
  install,
  version
}

export default plugin

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}
