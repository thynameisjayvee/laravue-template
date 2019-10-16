<template>
  <li :class="navItemClass">
    <router-link :to="to">
      <slot></slot>
    </router-link>
  </li>
</template>
<script>
export default {
  name: "NavbarItem",
  props: {
    navItemClass: {
      type: String,
      default: "nav-link navbar_nav-item"
    },
    to: {
      type: Object,
      default: function(){
        return {
          name: '',
          path: ''
        }
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.navbar_nav-item {
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
  line-height: 70px;
  color: #333;
  text-decoration: none;
  a {
    color: inherit;
    text-decoration: none;
  }
  .router-link-exact-active {
    color: #222;
  }
}
</style>
