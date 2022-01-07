<template>
  <q-card>
    <q-card-section> text : {{ addedText }}

    </q-card-section>
    <q-card-section>
      <q-input v-model="text"

       type="text" label="Label" />
    </q-card-section>

    <q-btn color="primary" icon="check" label="add" @click="add" />
  </q-card>
  <TestComponent :text="text" />
</template>
<script lang="ts">
import { defineComponent, ref, computed, provide } from 'vue'
import TestComponent from 'components/TestComponent.vue'

export default defineComponent({
  name: 'test',
  components: { TestComponent },
  // data () {
  //   //
  //   return {
  //     text: 'abc'
  //   }
  // },
  // computed: {
  //   addedText () :string {
  //     return this.text + 'added'
  //   }
  // },
  // methods: {
  //   add () {
  //     this.text += ' add'
  //   }
  // }
  setup () {
    const text = ref('abc')
    const addedText = computed(() => text.value + 'added')
    const add = () => {
      text.value += 'add'
    }

    provide('text', text)
    return {
      text,
      add,
      addedText
    }
  }
})
</script>
