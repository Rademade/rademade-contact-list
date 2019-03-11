import Vue       from 'vue';
import Vuex      from 'vuex';
import signStore from '@/store/sign.js';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    signStore
  },
  strict: debug
})
