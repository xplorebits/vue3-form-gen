// Import your component
import MyComp from './components/MyComp.vue'

// Install function executed by Vue.use()
const install = function(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component('Vue3FormGen', MyComp);
};

// Create module definition for Vue.use()
const plugin = {
  install,
};

// To auto-install when vue is found
let GlobalVue = null;
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.vue;
}
if (GlobalVue) {
  GlobalVue.use(plugin);
}

// To allow use as module (npm/webpack/etc.) export component
export default MyComp;
export { MyComp, install };
