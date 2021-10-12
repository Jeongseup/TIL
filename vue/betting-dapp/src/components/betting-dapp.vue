<template>
    <DappMetamask />
</template>
<script>
import DappMetamask from '@/components/dapp-metamask'

export default {
    components: { DappMetamask },
    name: 'betting-dapp',
    beforeCreate() {
        console.log('register Web3 Action')
        this.$store.dispatch('registerWeb3')
    }
}
</script>
