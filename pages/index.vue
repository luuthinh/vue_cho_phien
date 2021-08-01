<template>
  <div>
    <Vegetables />
  </div>
</template>

<script>
const Vegetables = () => import('./home')
export default {
  components: {
    Vegetables
  }
}
</script>
