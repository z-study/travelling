let mydirective = {}

mydirective.install = function (Vue) {
  // 切换密码是可见还是不可见
  Vue.directive('input-see', {
    bind (el, binding) {
      Vue.nextTick(function () {
        let inputEl = document.querySelector('#' + binding.arg)
        if (inputEl.tagName !== 'INPUT') {
          throw new Error('参数指定节点必须是input元素');
        }
        el.addEventListener('click', function (e) {
          if (el.className === 'w-unpeep') {
            inputEl.type = 'text'
            el.className = 'w-peep'
          } else {
            inputEl.type = 'password'
            el.className = 'w-unpeep'
          }
        }, false)
      })
    }
  })
}
export default mydirective
