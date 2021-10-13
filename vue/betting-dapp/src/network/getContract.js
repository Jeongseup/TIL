import Web3 from 'web3'
import { address, ABI } from './betContract'

const getContract = async () => {
    const web3 = new Web3(Web3.givenProvider)
    const myContractInstance = await new web3.eth.Contract(ABI, address)
    return myContractInstance
}

export default getContract
