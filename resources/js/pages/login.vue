<template>
  <div class="main-layout">
    <form @submit.prevent="login" @keydown="form.onKeydown($event)">
      <div class="form-group">
        <label>{{$t('top_6')}}</label>
        <input v-model="form.email" type="text" name="email"
          class="form-control" :class="{ 'is-invalid': form.errors.has('email') }">
        <has-error :form="form" field="email"></has-error>
      </div>

      <div class="form-group">
        <label>Password</label>
        <input v-model="form.password" type="password" name="password"
          class="form-control" :class="{ 'is-invalid': form.errors.has('password') }">
        <has-error :form="form" field="password"></has-error>
      </div>

      <button :disabled="form.busy" type="submit" class="btn btn-primary">Log In</button>
    </form>
  </div>
</template>

<script>
import Form from 'vform'

export default {
  data() {
    return {
      form: new Form({
        email: '',
        password: '',
        remember: false
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .main-layout {
    width: 500px;
    margin: 50px auto;
    padding: 50px;
    background-color: gray;
    border-radius: 10px;
  }
</style>
