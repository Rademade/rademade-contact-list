<template>
  <div class="sign">
    <h1>This is an sign up page</h1>
    <form v-on:submit.prevent="signUp">
      <input v-model="email" type="text" placeholder="Email">
      <input v-model="password" type="text" placeholder="Password">
      <button>Sign up</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    ...mapActions({
      firebaseSignUp: 'signStore/firebaseSignUp'
    }),
    signUp () {
      this.firebaseSignUp();
    }
  }
}
</script>
