// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible/flexible'

Vue.config.productionTip = false

//封装的tap事件
Vue.directive({
  bind:function(el,binding){
    el.addEventListener("tap",function(e){
      let method=binding.value.method;
      let params=binding.value.params;
      method(params);
    },false)
  }
});


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
