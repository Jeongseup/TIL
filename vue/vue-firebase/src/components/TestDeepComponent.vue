<template>
    <h1>
        {{ text }}
    </h1>
</template>
<script lang="ts">
import { defineComponent, inject } from 'vue'
export default defineComponent({
    name: 'test',
    setup() {
        const text = inject('text')
        //
        return { text }
    }
})
</script>
