// Import your component
import Vue3FormGen from './components/Vue3FormGen.vue';

// Install function executed by Vue.use()
const install = function(app) {
  app.component('Vue3FormGen', Vue3FormGen);
};

// Create module definition for Vue.use()
const plugin = {
  install,
};

// Export component by default and plugin as named export
export default Vue3FormGen;
export { plugin as Vue3FormGenPlugin };
