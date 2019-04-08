import firebase from 'firebase/app';
import 'firebase/auth';

const state = {}
const mutations = {}
const getters = {}
const actions = {
  async firebaseSignUp () {
    try {
      await firebase.auth().createUserWithEmailAndPassword(this.email, this.password);
      return true;
    } catch (e) {
      return e;
    }
  },
  async firebaseLogout () {
    await firebase.auth().signOut();
  }
}
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
