<template>
  <div class="home">
    <h1>This is an home page</h1>
    <ul>
      <li v-for="(contact, index) of contacts" v-bind:key="index">
        {{contact.firstName}}
        {{contact.lastName}}
        {{contact.phone}}
        {{contact.position}}
        {{contact.joinDate}}
      </li>
    </ul>
    <button type="button" v-on:click="logout">Logout</button>
    <button type="button" v-on:click="addItem">Add Item</button>
  </div>
</template>

<script>
import { db } from '../../main';
import firebase from 'firebase';
export default {
  name: 'home',
  data () {
    return {
      contacts: []
    }
  },
  firestore () {
    return {
      contacts: db.collection('contacts')
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
    },
    addItem () {
      db.collection('contacts').add({
        birthdate: 'Tokyo',
        contacts: {
          email: 'max@radeamde.com',
          facebook: 'http://localhost:3000',
          skype: 'maxshutyak'
        },
        firstName: 'Maksym',
        lastName: 'Shutiak',
        joinDate: '',
        phone: '073 127 97 77',
        position: 'Team Lead',
        seniority: 'Senior'
      })
    }
  }
}
</script>
