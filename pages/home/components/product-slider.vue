<template>
  <div>
      <section class="section-b-space addtocart_count radio_square">
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="title4">
                        <h2 class="title-inner4">{{title}}</h2>
                        <div class="line">
                            <span></span>
                        </div>
                    </div>
                    <div v-swiper:mySwiper="swiperOption">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide" v-for="(product,index) in products" :key="index">
                                <div class="product-box">
                                  <ProductBox />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>    
      </section> 
      <b-alert :show="dismissCountDown" variant="success" @dismissed="dismissCountDonw=0" @dismiss-count-down="alert">
        <p>Product is successfully added to your wishlist.</p>
      </b-alert>
  </div>
</template>

<script>
import ProductBox from '../../../components/product-box'
export default {
  props: ['products'],
  components: {
    ProductBox,
  },
  data(){
    return {
      title: 'top collection',
      showCart: false,
      showquickviewmodel: false,
      showcompareModal: false,
      quickviewproduct: {},
      compareproduct: {},
      dismissSecs: 5,
      dismissCountDown: 0,
      swiperOption: {
        slidePerView: 5,
        spaceBetween: 20,
        freeMode: true,
        breakpoints: {
          1199: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          991: {
            slidePerView: 2,
            spaceBetween: 20,

          },
          420: {
            slidesPerView: 1,
            spaceBetween: 20
          }
        }
      }
    }
  },
  methods: {
    alert(item) {
      this.dismissCountDown = item
    },
    showCartModal(item, productData){
      this.showCart = item
      this.$emit('openCart', this.showCart)
    }
  }
}
</script>

<style>

</style>