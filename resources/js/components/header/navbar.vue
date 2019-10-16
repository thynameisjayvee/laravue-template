<template>
  <div :class="navClass">
    <div class="container">
      <slot />
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <slot name="nav_item"></slot>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Navbar",
  props: {
    navClass: {
      type: String,
      default: "navbar navbar-expand-lg navbar-light"
    }
  }
};
</script>
<style lang="scss" scoped>
.navbar {
  box-shadow: 5px 0px 5px #888888;
}
</style>
