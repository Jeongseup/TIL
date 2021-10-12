<template>
    <div>
        <h1>Metamask</h1>
        <div class="meatmask-info">
            <p>연결상태 : {{ web3 }}</p>
        </div>
    </div>
</template>
<script>
export default {
    name: 'dapp-metamask',

    computed: {
        web3() {
            return this.$store.state.web3
        }
    }
}
</script>
