export default{
  bind(el, binding) {
    el.handler = function() {
      el.value = el.value.replace(/[^\d]/g, '')
    }
    el.addEventListener('keyup', el.handler)
    el.addEventListener('afterpaste', el.handler)
  },
  unbind(el) {
    el.removeEventListener('keyup', el.handler)
    el.removeEventListener('afterpaste', el.handler)
  }
}
