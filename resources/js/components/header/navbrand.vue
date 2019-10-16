<template>
  <div :class="navBrandClass">
    <router-link :to="to">
      <!-- default value -->
      <slot>Default</slot>
    </router-link>
  </div>
</template>
<script>
export default {
  name: "NavBrand",
  props: {
    navBrandClass: {
      type: String,
      default: ""
    },
    to: {
      type: Object,
      default: function(){
        return {
          name: '',
          path: '/'
        }
      }
    }
  }
};
</script>
<style lang="scss" scoped>
</style>
