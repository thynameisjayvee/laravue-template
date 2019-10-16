<template>
  <div class="main-layout">
    <NavBar>
      <NavBrand>

      </NavBrand>

      <template v-slot:nav_item>
        <NavItem :to="{ name: 'login' }">
          login
        </NavItem>
        <NavItem :to="{ name: 'register' }">
          register
        </NavItem>
        <LocaleDropdown />
      </template>
    </NavBar>
  </div>
</template>

<script>
import NavBar from '~/components/header/navbar'
import NavBrand from '~/components/header/navbrand'
import NavItem from '~/components/header/navitem'

export default {
  components: {
    NavBar,
    NavBrand,
    NavItem
  }
}
</script>

<style>

</style>
