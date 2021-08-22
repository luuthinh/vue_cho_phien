import Vue from 'vue'
import Vuex from 'vuex'
import menu from './modules/menu'
import products from './modules/products'
import cart from './modules/cart'
Vue.use(Vuex)
const createStore = () => {
    return new Vuex.Store({
        modules:{
            menu,
            products,
            cart
        }
    })
}
export default createStore