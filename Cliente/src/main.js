import Vue from 'vue'
import App from './App.vue'
import router from "./routes";
 
import "./sass/default.css"; 
import * as api from './controllers/api';

Vue.config.productionTip = false
Vue.prototype.$api = api; 

const requireComponent = require.context(
  './components/ui',
  false,
  /[A-Z]\w+\.(vue|js)$/
);

requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName);

  const componentName = fileName
      .split('/')
      .pop()
      .replace(/\.\w+$/, '');

  Vue.component(
      componentName,
      componentConfig.default || componentConfig
  );
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
