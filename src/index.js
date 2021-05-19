// JS
import './js/';

// SCSS
import './assets/scss/main.scss';
import './assets/scss/modules/index.scss';
import './assets/scss/modules/header.scss';
import './assets/scss/modules/footer.scss';
import './assets/scss/modules/login.scss';
import './assets/scss/modules/registration.scss';
//import './assets/scss/modules/searchRoomFilter.scss';
//import './assets/scss/modules/roomDetails.scss';

// CSS (example)
// import './assets/css/main.css'
//import './assets/css/header.css';

// Vue.js
window.Vue = require('vue')

// Vue components (for use in html)
Vue.component('example-component', require('./components/Example.vue').default)

// Vue init
const app = new Vue({
  el: '#app'
})
