import firebase from 'firebase';

const state = {}
const mutations = {}
const getters = {}
const actions = {
  async firebaseSignUp () {
    try {
      await firebase.auth().createUserWithEmailAndPassword(this.email, this.password);
      console.log('Success');
      return true;
    } catch (e) {
      console.log(e);
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
