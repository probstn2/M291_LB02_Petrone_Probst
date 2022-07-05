import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const baseURL = "http://localhost:3000/";
export default new Vuex.Store({
  state: {
    angebot:[
      {type:'ringe', title:'Ring Silber', size:'OneSize', prize:'CHF 8.00', img: require('../assets/silberring.jpeg')},
      {type:'ringe', title:'Ring Gold', size:'OneSize', prize:'CHF 10.00', img: require('../assets/goldring.jpeg')},
      {type:'ringe', title:'Ring Rosegold', size:'OneSize', prize:'CHF 3.00', img: require('../assets/rosegoldring.png')},
      {type:'ketten', title:'Kette Gold', size: '40cm', prize:'18.50', img: require('../assets/kettegold.jpeg')},
      {type:'ketten', title:'Kette Gold', size: '50cm', prize:'22.00', img: require('../assets/kettegold.jpeg')},
      {type:'ketten', title:'Kette Gold', size: '60cm', prize:'30.00', img: require('../assets/kettegold.jpeg')},
    ],
    products: [],
    cart: []
  },
  getters: {
    /**
     * https://thecodebarbarian.com/javascript-reduce-in-5-examples.html
     * @param state
     * @returns {*}
     */
    ringe(state) {
      return state.angebot.filter(fach => fach.type === 'ringe');
    },
    ketten(state) {
      return state.angebot.filter(fach => fach.type === 'ketten');
    },
    cartTotal(state) {
      return state.cart.reduce((total, item) => {
        let product = state.products.find(p => p.name === item.name);
        return total + (product.price * item.quantity);
      }, 0);
    }
  },
  mutations: {
    setProducts(state, products) {
      state.products = products;
    },
    addToCart(state, product) {
      let index = state.cart.findIndex(p => p.name === product.name);
      if (index !== -1) {
        state.cart[index].quantity++;
      } else {
        state.cart.push({name: product.name, quantity: 1});
      }
    },
    removeFromCart(state, product) {
      let index = state.cart.findIndex(p => p.name === product.name);
      if (index !== -1) {
        state.cart[index].quantity--;
        if (state.cart[index].quantity === 0) state.cart.splice(index, 1);
      }
    }
  },
  actions: {
    loadProducts(context) {
      fetch(baseURL + "v1/products")
          .then((res) => {
            //console.log(res.json());
            return res.json();
          })
          .then((data) => {
            //console.log(data);
            context.commit('setProducts', data);
          }).catch(error => {
        console.error(error);
      });
    }
  },

})
