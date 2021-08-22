<template>
    <div>
        <Header />
        <Slider />
        <Service />
        <ProductSlider />
        <Footer />
    </div>
</template>

<script>
import Header from '../../components/header'
import Footer from '../../components/footer'
import Slider from './components/slider'
import Service from './components/services'
import ProductSlider from './components/product-slider'
export default {
    components:{
        Header,
        Slider,
        Service,
        ProductSlider,
        Footer,
    }
}
</script>
