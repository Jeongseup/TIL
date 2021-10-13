<template>
    <div>
        <h2>Betting component</h2>
        <h2>{{ contract }}</h2>
    </div>
</template>
<script>
export default {
    name: 'betting-component',
    computed: {
        contract() {
            return this.$store.state.contractInstance
        }
    }
}
</script>
