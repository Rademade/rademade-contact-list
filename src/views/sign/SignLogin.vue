<template>
  <div class="sign">
    <h1>This is an sign page</h1>
    <form v-on:submit.prevent="login">
      <input v-model="email" type="text" placeholder="Email">
      <input v-model="password" type="text" placeholder="Password">
      <button>Sign up</button>
    </form>
  </div>
</template>

<script>
import firebase from 'firebase';

export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {

    login () {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
        function (user) {
          alert('Well done User signed');
        },
        function (err) {
          alert('oops. ' + err.message)
        }
      );
    }
  }
}
</script>
