<template>
    <DappMetamask />
    <Bettingapp />
</template>
<script>
import DappMetamask from '@/components/dapp-metamask'
import Bettingapp from '@/components/betting-component'

export default {
    components: { DappMetamask, Bettingapp },
    name: 'betting-dapp',
    beforeCreate() {
        console.log('register Web3 Action')
        this.$store.dispatch('registerWeb3')
        this.$store.dispatch('getContractInstance')
    }
}
</script>
