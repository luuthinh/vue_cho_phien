(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{274:function(t,e,o){"use strict";o.r(e);var n={},r=o(51),c={props:["products"],components:{ProductBox:Object(r.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",[t._v("Hello")])}),[],!1,null,null,null).exports},data:function(){return{title:"top collection",showCart:!1,showquickviewmodel:!1,showcompareModal:!1,quickviewproduct:{},compareproduct:{},dismissSecs:5,dismissCountDown:0,swiperOption:{slidePerView:5,spaceBetween:20,freeMode:!0,breakpoints:{1199:{slidesPerView:3,spaceBetween:20},991:{slidePerView:2,spaceBetween:20},420:{slidesPerView:1,spaceBetween:20}}}}},methods:{alert:function(t){this.dismissCountDown=t},showCartModal:function(t,e){this.showCart=t,this.$emit("openCart",this.showCart)}}},l=Object(r.a)(c,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("section",{staticClass:"section-b-space addtocart_count radio_square"},[o("div",{staticClass:"container"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col"},[o("div",{staticClass:"title4"},[o("h2",{staticClass:"title-inner4"},[t._v(t._s(t.title))]),t._v(" "),t._m(0)]),t._v(" "),o("div",{directives:[{name:"swiper",rawName:"v-swiper:mySwiper",value:t.swiperOption,expression:"swiperOption",arg:"mySwiper"}]},[o("div",{staticClass:"swiper-wrapper"},t._l(t.products,(function(t,e){return o("div",{key:e,staticClass:"swiper-slide"},[o("div",{staticClass:"product-box"},[o("ProductBox")],1)])})),0)])])])])]),t._v(" "),o("b-alert",{attrs:{show:t.dismissCountDown,variant:"success"},on:{dismissed:function(e){t.dismissCountDonw=0},"dismiss-count-down":t.alert}},[o("p",[t._v("Product is successfully added to your wishlist.")])])],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"line"},[e("span")])}],!1,null,null,null);e.default=l.exports}}]);