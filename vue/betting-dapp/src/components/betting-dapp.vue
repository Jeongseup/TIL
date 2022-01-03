<template>
    <div>
        <KlipLogin />
        <!-- <DappMetamask /> -->
        <!-- <Bettingapp /> -->
    </div>
</template>
<script>
// import DappMetamask from '@/components/dapp-metamask'
// import Bettingapp from '@/components/betting-component'
import KlipLogin from '@/components/klip'

export default {
    components: { KlipLogin },
    name: 'betting-dapp',
    beforeCreate() {
        console.log('register Web3 Action')
        this.$store.dispatch('registerWeb3')
        this.$store.dispatch('getContractInstance')
    }
}
</script>
