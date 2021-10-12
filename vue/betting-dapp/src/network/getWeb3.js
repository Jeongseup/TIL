import Web3 from 'web3'

const getWeb3 = async () => {
    let result = {}

    const web3 = new Web3(Web3.givenProvider)
    console.log(web3.currentProvider)
    console.log(web3.eth.currentProvider)

    var isInjected = await web3.eth.net.isListening()
    var coinbase = await web3.eth.getCoinbase()
    var balance = await web3.eth.getBalance(coinbase)
    var chainId = await web3.eth.net.getId()

    result = {
        ...result,
        isInjected,
        coinbase,
        balance,
        chainId
    }

    return result
}

export default getWeb3
