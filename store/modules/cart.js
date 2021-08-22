import products from '../../data/products'

const state = {
    products: products.data,
    cart: []
}

const getters = {
    cartItems: (state) => {
        return state.cart
    },
    cartTotalAmount: (state) => {
        return state.cart.reduce((total,product) => {
            return total + (product.price * product.quantity)
        }, 0)
    }
}

const mutations = {

}

const actions = {

}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}