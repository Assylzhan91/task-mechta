import pickUp from '../assets/images/pick-up.svg'
import courier from '../assets/images/courier.svg'
import post from '../assets/images/post.svg'
let urlCity = 'https://qvjgl.mocklab.io/delivery/check?search=';
let deliveryList = [
  {
    img: pickUp,
    title: 'Pick up'
  },
  {
    img: courier,
    title: 'Courier'
  },
  {
   img: post,
    title: 'Post'
}]

export default {
  namespaced: true,
  state: {
    deliveryMethods: []
  },

  getters: {
    getDeliveryMethod(state) {
      return state.deliveryMethods
    }
  },
  mutations: {
    getCity(state, newResponse) {
      state.deliveryMethods = newResponse
    },
    pickedUpMethod(state, idx){
      state.deliveryMethods.map((item, id) => {
        item.picked = false
        if(id === idx) {
          console.log()
          item.picked = true
        }
        return item
      })
    },

  },
  actions: {
    async getCityAction(store) {
      let { rootState: { search } } = store
      search.showedLoading = true
      try {
        let res = await fetch(`${urlCity}${search.searchVal}`, {
          method: 'GET',
          headers: {
            'Accept': "application/json",
            'Content-Type': 'application/json'
          }
        })
        let json = await res.json()
        let newResponse = json.map((item, id)=> {
          item.picked = false
          item.img = deliveryList[id].img
          item.title = deliveryList[id].title
          return item
        })
        store.commit('getCity', newResponse)
      }catch (e){
        console.log('getCitiAction', e)
      }
      finally {
        search.showedLoading = false
      }
    },
    pickUpMethodAction(store, idx){
      store.commit('pickedUpMethod', idx)
    }
  }
}
