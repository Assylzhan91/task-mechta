export default {
  namespaced: true,
  state: {
    options: [
      {
        id: 1,
        label: 'Nur-Sultan',
        disabled: true
      },
      {
        id: 2,
        label: 'Almaty',
        disabled: true
      },
      {
        id: 3,
        label: 'Shymkent',
        disabled: true
      },
      {
        id: 4,
        label: 'Atyrau',
        disabled: true
      },
      {
        id: 5,
        label: 'Aktau',
        disabled: true
      },
      {
        id: 6,
        label: 'Zhana Turmis',
        disabled: true
      },
      {
        id: 7,
        label: 'Karaganda',
        disabled: true
      },
      {
        id: 8,
        label: 'Kentau',
        disabled: true
      },
    ],

    searchVal: '',
    isOpen: true,
    setClassShow: false
  },

  mutations: {
    searchSetVal(state, {value, getters}) {
      state.searchVal = value
      let { searchingCityVal } =  getters
      if(state.searchVal.length && searchingCityVal.length) {
        state.setClassShow = true
        state.isOpen = true
        if(state.searchVal === searchingCityVal[0].label){
          state.setClassShow = false
        }
      }else {
        state.setClassShow = false
      }
    },
    selectedCity(state, id) {
      let item = state.options.find(item => item.id === id)
      state.searchVal = item.label
      state.setClassShow = false
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
    },
    selectedCityAction({commit}, id) {
      commit('selectedCity', id)
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

    searchingCityVal(state, getters) {
      let { searchVal } = state
      return getters.getOptionSort.filter( item => {
        item.label = item.label.toLowerCase()
        searchVal = searchVal.toLowerCase()
        if(!item.label.indexOf(searchVal, 0)) {
          return item.label
        }
      })
    },

    getSetClassShow(state) {
      return state.setClassShow
        ? 'form__group--set-shadow'
        : ''
    },
  },

};
