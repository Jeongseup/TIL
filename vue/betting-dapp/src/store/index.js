import { createStore } from 'vuex'
// import getWeb3 from '@/network/getWeb3'
// import pollWeb3 from '@/network/pollWeb3'
// import getContract from '@/network/getContract'

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
            // pollWeb3()
        },
        updateWeb3Instance(state, data) {
            console.log('updateWeb3Instance', data)
            state.web3.coinbase = data.coinbase
            state.web3.balance = data.balance
        },
        registerContractInstance(state, data) {
            console.log('register contract instance', data)
            state.contractInstance = () => 'data'
        }
    },
    actions: {
        async registerWeb3({ commit }) {
            // var result = await getWeb3()
            // commit('registerWeb3Instance', result)
        },
        updateWeb3({ commit }, data) {
            commit('updateWeb3Instance', data)
        },
        async getContractInstance({ commit }) {
            // var result = await getContract()
            // commit('registerContractInstance', result)
        }
    },
    modules: {}
})
