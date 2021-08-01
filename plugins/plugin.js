import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper/dist/ssr'
import Vue2Filters from 'vue2-filters'
import { VueMasonryPlugin } from 'vue-masonry'
import InfiniteLoading from 'vue-infinite-loading'
import firebase from 'firebase/app'
import PayPal from 'vue-paypal-checkout'
import VueLazyLoad from 'vue-lazyload'
import ProductZoomer from 'vue-product-zoomer'
import VueScrollTo from 'vue-scrollto'

Vue.use(VueAwesomeSwiper)
Vue.use(Vue2Filters)
Vue.use(VueMasonryPlugin)
Vue.use(InfiniteLoading)
Vue.component('paypal-checkout', PayPal)
Vue.use(VueLazyLoad)
Vue.use(ProductZoomer)
Vue.use(VueScrollTo)

const firebaseConfig = {
  apiKey: "AIzaSyBiN_lVo28xKROGs806BgsQcPjn-xK0SoI",
  authDomain: "cho-phien.firebaseapp.com",
  projectId: "cho-phien",
  storageBucket: "cho-phien.appspot.com",
  messagingSenderId: "177322225556",
  appId: "1:177322225556:web:9e6580d69dc87761c6a981",
  measurementId: "G-RL3KTSDSZQ"
};
firebase.initializeApp(firebaseConfig)
