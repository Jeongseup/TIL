import { createStore } from 'vuex'
import getWeb3 from '@/network/getWeb3'

export default createStore({
    strict: true,
    state() {
        return {
            web3: {}
        }
    },
    mutations: {
        registerWeb3Instance(state, data) {
            state.web3 = data
        }
    },
    actions: {
        async registerWeb3({ commit }) {
            var result = await getWeb3()
            commit('registerWeb3Instance', result)
        }
    },
    modules: {}
})
