import Vue from 'vue';
import {QRCode} from 'qrcode'

var qrcodeOptions = {
    width: 180,
    height: 180,
    colorDark : "#f7931a"
  }

// Initialize the qrcode directive.
export const QRCode = {
  bind(el, binding, vnode) {

    qrcodeOptions.text = typeof binding === 'object'
      ? binding.href || binding.value || binding.text
      : binding

    new QRCode(el, qrcodeOptions)
  }
}

// You can also make it available globally.
Vue.directive('qrcode', QRCode) 