import pickUp from '../assets/images/pick-up.svg'
import courier from '../assets/images/courier.svg'
import post from '../assets/images/post.svg'
export default {
  namespaced: true,
  state: {
    deliveryMethods: [
      {
        title: 'Pick up',
        img: pickUp,
        price: 0,
        picked: true
      },
      {
        title: 'Courier',
        img: courier,
        price: 9.99,
        picked: false
      },
      {
        title: 'Post',
        img: post,
        price: 15.99,
        picked: false
      }
    ]
  },

  getters: {
    getDeliveryMethod(state) {
      return state.deliveryMethods
    }
  }
}
