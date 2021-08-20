<template>
  <div>
      <div class="main-navbar">
          <div id="mainnav">
              <div class="toggle-nav" @click="openmobilenav=true">
                  <i class="fa fa-bars sidebar-bar"></i>
              </div>
              <ul class="nav-menu" :class="{ opennav: openmobilenav}">
                  <li class="back-btn">
                      <div class="mobile-back text-right">
                          <span @click="openmobilenav=false">Back</span>
                          <i class="fa fa-angle-right pl-2" aria-hidden="true"></i>
                      </div>
                  </li>
                    <li v-for="(menuItem,index) in menulist" :key="index" :class="menuItem.megamenu ? 'mega-menu':'dropdown'">
                        <nuxt-link :to="{path: menuItem.path}" @click="setActive(menuItem.title)" class='nav-link'>
                            {{menuItem.title}}
                        </nuxt-link>
                    </li>
              </ul>
          </div>
      </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    data(){
        return {
            openmobilenav: false,
            subnav: false,
            activeItem: 'home',        
        }
    },
    computed: {
        ...mapState({
            menulist: state => state.menu.data
        })
    }
}
</script>

<style lang="scss" scoped>
.togger-nav {
    &.toggle-button {
        z-index: 1;
    }
}
</style>