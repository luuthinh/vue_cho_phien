(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{376:function(t,e,r){"use strict";var l={props:["title"]},c=r(55),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"breadcrumb-section"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-sm-6"},[r("div",{staticClass:"page-title"},[r("h2",[t._v(t._s(t.title))])])]),t._v(" "),r("div",{staticClass:"col-sm-6"},[r("nav",{staticClass:"theme-breadcrumb",attrs:{"aria-label":"breadcrumb"}},[r("ol",{staticClass:"breadcrumb"},[r("li",{staticClass:"breadcrumb-item"},[r("nuxt-link",{attrs:{to:{path:"/"}}},[t._v("Home")])],1),t._v(" "),t.title?r("li",{staticClass:"breadcrumb-item active"},[t._v(t._s(t.title))]):t._e()])])])])])])])}),[],!1,null,null,null);e.a=component.exports},925:function(t,e,r){"use strict";r.r(e);r(1);var l=r(64),c=r.n(l),o=r(378),n=r(379),d=r(376),v={components:{Header:o.a,Footer:n.a,Breadcrumbs:d.a,"no-ssr":c.a},data:function(){return{galleryFilter:"all",imagearray:[{id:1,title:"Slim Fit Cotton Shirt",alt:"established",filter:"fashion",imagepath:r(396)},{id:2,title:"trim dress",alt:"readable",filter:"shoes",imagepath:r(397)},{id:3,title:"trim dress",alt:"readable",filter:"shoes",imagepath:r(398)},{id:4,title:"trim dress",alt:"readable",filter:"bags",imagepath:r(399)},{id:5,title:"trim dress",alt:"readable",filter:"bags",imagepath:r(400)},{id:6,title:"trim dress",alt:"readable",filter:"bags",imagepath:r(401)},{id:7,title:"trim dress",alt:"readable",filter:"bags",imagepath:r(402)},{id:8,title:"trim dress",alt:"readable",filter:"watch",imagepath:r(403)}]}},computed:{filteredImages:function(){var t=this;return"all"===this.galleryFilter?this.imagearray:this.imagearray.filter((function(data){return data.filter===t.galleryFilter}))}},mounted:function(){"function"==typeof this.$redrawVueMasonry&&this.$redrawVueMasonry()},methods:{isActive:function(t){return this.galleryFilter===t},updateFilter:function(t){this.galleryFilter=t}}},m=r(55),component=Object(m.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("Header"),t._v(" "),r("Breadcrumbs",{attrs:{title:"Mesonary 3 grid"}}),t._v(" "),r("section",{staticClass:"filter-section"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-12"},[t._m(0),t._v(" "),r("div",{staticClass:"filter-container isotopeFilters"},[r("ul",{staticClass:"list-inline filter"},[r("li",{class:{active:t.isActive("all")}},[r("a",{attrs:{href:"javascript:void(0)"},on:{click:function(e){return t.updateFilter("all")}}},[t._v("All")])]),t._v(" "),r("li",{class:{active:t.isActive("fashion")}},[r("a",{attrs:{href:"javascript:void(0)"},on:{click:function(e){return t.updateFilter("fashion")}}},[t._v("Fashion")])]),t._v(" "),r("li",{class:{active:t.isActive("bags")}},[r("a",{attrs:{href:"javascript:void(0)"},on:{click:function(e){return t.updateFilter("bags")}}},[t._v("Bags")])]),t._v(" "),r("li",{class:{active:t.isActive("shoes")}},[r("a",{attrs:{href:"javascript:void(0)"},on:{click:function(e){return t.updateFilter("shoes")}}},[t._v("Shoes")])]),t._v(" "),r("li",{class:{active:t.isActive("watch")}},[r("a",{attrs:{href:"javascript:void(0)"},on:{click:function(e){return t.updateFilter("watch")}}},[t._v("Watch")])])])])])])])]),t._v(" "),r("section",{staticClass:"portfolio-section portfolio-padding pt-0 port-col zoom-gallery"},[r("div",{staticClass:"container"},[r("no-ssr",[r("div",{directives:[{name:"masonry",rawName:"v-masonry"}],staticClass:"masonry-container isotopeContainer row",attrs:{"transition-duration":"3s","item-selector":".item"}},t._l(t.filteredImages,(function(e,l){return r("div",{directives:[{name:"masonry-tile",rawName:"v-masonry-tile"}],key:l,staticClass:"col-sm-4 isotopeSelector item"},[r("div",{staticClass:"overlay"},[r("div",{staticClass:"border-portfolio"},[r("a",{attrs:{href:"javascript:void(0)"}},[r("div",{staticClass:"overlay-background"}),t._v(" "),r("img",{staticClass:"img-fluid",attrs:{src:e.imagepath}})])])])])})),0)])],1)]),t._v(" "),r("Footer")],1)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"title1"},[r("h2",{staticClass:"title-inner1"},[t._v("portfolio")])])}],!1,null,null,null);e.default=component.exports}}]);