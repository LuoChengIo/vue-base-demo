import numberOnly from './numberOnly'

const install = function(Vue) {
  Vue.directive('numberOnly', numberOnly)
}

if (window.Vue) { // 当存在全局vue时，全局注册
  window.numberOnly = numberOnly
  Vue.use(install); // eslint-disable-line
}

numberOnly.install = install
export default numberOnly
