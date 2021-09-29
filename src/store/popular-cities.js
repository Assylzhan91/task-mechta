export default {
  namespaced: true,
  state: {
    popularCities: [
      {city: 'Nur - Sultan'},
      {city: 'Almaty'},
      {city: 'Shymkent'},
      {city: 'Atyrau'},
      {city: 'Aktau'},
      {city: 'Zhana Turmis'},
      {city: 'Karaganda'},
      {city: 'Kentau'},
      {city: 'Aitei'},
      {city: 'Pavlodar'},
    ],
  },
  getters: {
    getPopularCities(state) {
      let results1 = [];
      let results2 = [];
      let cnunkSize = (state.popularCities.length / 2) - 1
      state.popularCities.forEach((item, idx) => {
        if(cnunkSize >= idx){
          results1.push(item)
        }else {
          results2.push(item)
        }
      })
      return [results1, results2]
    }
  }
}
