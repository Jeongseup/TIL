import Web3 from 'web3'
import store from '../store'

const pollWeb3 = function(state) {
    const web3 = new Web3(Web3.givenProvider)

    setInterval(async () => {
        // current provider check
        // console.log('current', await web3.eth.getCoinbase())
        // state provider check
        // console.log('state', store.state.web3.coinbase)

        // Web3가 있는 지 없는 체크 ?
        // if (!Web3 || !store.state.web3) {
        //     console.log('here', Web3)
        //     return
        // }

        if ((await web3.eth.getCoinbase()) !== store.state.web3.coinbase) {
            const newCoinbase = await web3.eth.getCoinbase()
            web3.eth.getBalance(newCoinbase, (err, newBalance) => {
                if (err) {
                    console.error(err)
                } else {
                    store.dispatch('updateWeb3', {
                        coinbase: newCoinbase,
                        balance: newBalance
                    })
                }
            })
        } else {
            web3.eth.getBalance(
                store.state.web3.coinbase,
                (err, newBalance) => {
                    if (err) {
                        console.log(err)
                    } else if (newBalance !== store.state.web3.balance) {
                        store.dispatch('updateWeb3', {
                            coinbase: store.state.web3.coinbase,
                            balance: newBalance
                        })
                    }
                }
            )
        }
    }, 700)
}

export default pollWeb3
