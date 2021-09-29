import Vue from 'vue'
import Vuex from 'vuex'
import search from './search'
import popularCities from './popular-cities'
import delivery from './delivery'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    search,
    popularCities,
    delivery
  }
})
