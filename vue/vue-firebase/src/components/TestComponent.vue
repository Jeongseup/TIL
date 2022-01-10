<template>
  <div>
    {{ text.toUpperCase() }}
  </div>
  <div>deep : <TestDeepComponent /></div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import TestDeepComponent from 'components/TestDeepComponent.vue'

export default defineComponent({
  name: 'test',
  components: { TestDeepComponent },
  props: {
    text: {
      type: String,
      default: () => 'test'
    }
  },
  setup() {
    //
  }
})
</script>
