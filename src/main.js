import Vue      from 'vue';
import VueFire  from 'vuefire';
import App      from './App.vue';
import router   from './router';
import store    from '@/store/index';
import firebase from 'firebase';
import 'firebase/firestore';

Vue.config.productionTip = false;
Vue.use(VueFire)

firebase.initializeApp({
  apiKey: process.env.VUE_APP_API_KEY,
  authDomain: process.env.VUE_APP_AUTH_DOMAIN,
  databaseURL: process.env.VUE_APP_DATABASE_URL,
  projectId: process.env.VUE_APP_PROJECT_ID,
  storageBucket: process.env.VUE_APP_STORAGE_BUCKED,
  messagingSenderId: process.env.VUE_APP_MESSAGIN_SENDER_ID
})

let app = '';
let appInitialization = () => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
};

firebase.auth().onAuthStateChanged(appInitialization);

export const db = firebase.firestore();
