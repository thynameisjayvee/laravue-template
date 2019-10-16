<template>
  <div class="main-layout">
    <HeaderItem></HeaderItem>
    <div class="container mt-4">
        <slot></slot>
    </div>
  </div>
</template>

<script>
import HeaderItem from '~/components/header/index.vue'

export default {
  components: {
    HeaderItem
  }
}
</script>

<style lang="scss" scoped>
</style>
