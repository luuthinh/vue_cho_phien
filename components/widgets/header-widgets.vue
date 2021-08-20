<template>
  <div>
      <div class="icon-nav">
          <ul>
              <li class="onhover-div mobile-search">
                  <div>
                        <img alt 
                            :src='"@/assets/images/icon/layout4/search.png"'
                            @click="openSearch()"
                            class="img-fluid">
                        <i class="ti-search" @click="openSearch()"></i>
                  </div>
                  <div id="search-overlay" class="search-overlay" :class="{opensearch:search}">
                      <div>
                          <span class="closebtn" @click="closeSearch()" title="Close Overplay">x</span>
                          <div class="overlay-content">
                              <div class="container">
                                  <div class="row">
                                      <div class="col-xl-12">
                                          <form>
                                              <div class="form-group mb-0">
                                                  <input type="text"
                                                         class="form-control"
                                                         v-model="searchString"
                                                         placeholder="Tìm kiếm sản phẩm"
                                                    >
                                              </div>
                                              <button type="submit" class="btn btn-primary">
                                                  <i class="fa fa-search"></i>
                                              </button>
                                          </form>
                                          <ul class="search-results" v-if="searchItems.length">
                                              <li v-for="(product,index) in searchItems" :key="index" class="product-box">
                                                  <div class="img-wrapper">
                                                      <img :src="getImgUrl(product.images[0].src)"
                                                            class="img-fluid bg-img"
                                                            :key="index"
                                                        />
                                                  </div>
                                                  <div class="product-detail">
                                                      <nuxt-link :to="{path:'/product/sider' + product.id}">
                                                          <h6>{{product.title}}</h6>
                                                      </nuxt-link>
                                                  </div>
                                                    <h4>{{product.price}} Đ </h4>
                                              </li>
                                          </ul>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </li>
          </ul>
      </div>
  </div>
</template>

<script>
import { mapState, mapGetters} from 'vuex'
export default {
    data() {
        return {
            search: false,
            searchString: ''
            // searchItems: []
        }
    },
    computed: {
        ...mapState({
            searchItems: state => state.products.searchProduct
        }),
        ...mapGetters({
            cart: 'cart/cartItems',
            cartTotal: 'cart/cartTotalAmount',
        })
    },
    methods: {
        openSearch(){
            this.search = true
        },
        closeSearch(){
            this.search = false
        }
    }
}
</script>

<style>

</style>