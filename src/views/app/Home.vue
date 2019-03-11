<template>
  <div class="home">
    <h1>This is an home page</h1>
    <button type="button" v-on:click="logout">Logout</button>
  </div>
</template>

<script>
import { db } from '../../main';
import firebase from 'firebase';
export default {
  name: 'home',
  data () {
    return {
      comics: []
    }
  },
  firestore () {
    return {
      comics: db.collection('comics')
    }
  },
  methods: {
    logout () {
      firebase.auth().signOut().then(
        function (user) {
          alert('Logout');
        },
        function (err) {
          alert('oops. ' + err.message)
        }
      );
    }
  }
}
</script>
