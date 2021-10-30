const app = Vue.createApp({
    data() {
        return {
            cart: [],
            premium: true,
            test: "test"
        }
    },
    methods: {
        updateCart(id) {
            this.cart.push(id)
        }
    }
  })
  