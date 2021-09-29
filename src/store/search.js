export default {
  namespaced: true,
  state: {
    options: [
      { label: 'Nur-Sultan', disabled: true },
      { label: 'Almaty', disabled: true },
      { label: 'Shymkent', disabled: true },
      { label: 'Atyrau', disabled: true },
      { label: 'Aktau', disabled: true },
      { label: 'Zhana Turmis', disabled: true },
      { label: 'Karaganda', disabled: true },
      { label: 'Kentau', disabled: true },
    ],

    searchVal: '',
    isOpen: true,
    setClassShow: false
  },

  mutations: {
    searchSetVal(state, {value, getters}) {
      state.searchVal = value
      if(state.searchVal.length && getters.searchingCityVal.length) {
        state.setClassShow = true
        state.isOpen = true
      }else {
        state.setClassShow = false
      }
    },

    clearValCities(state){
      state.searchVal = ''
      this.showError = false
    },

    onSubmit(state, getters){
      let { searchingCityVal } =  getters
      if(state.searchVal.length && searchingCityVal.length === 1) {
        state.searchVal = searchingCityVal[0].label
        state.setClassShow = false
        state.isOpen = false
      }
    },
  },

  actions: {
    searchSetValAction({commit, getters}, value) {
      commit('searchSetVal', {
        value, getters
      })
    },

    clearValCityAction({commit}) {
      commit('clearValCities')
    },

    onSubmitAction({commit, getters}) {
      commit('onSubmit', getters)
    }
  },
  getters: {
    getOptionSort(state) {
      return state.options.sort(function(a, b){
        if(a.label < b.label) { return -1; }
        if(a.label > b.label) { return 1; }
        return 0;
      })
    },

    getSearchVal (state) {
      return state.searchVal
    },

    searchingCityVal(state) {
      return state.options.filter(item =>
        item.label.toLowerCase().includes(state.searchVal.toLowerCase())
      )
    },

    getSetClassShow(state) {
      return state.setClassShow
        ? 'form__group--set-shadow'
        : ''
    },
  },

};
