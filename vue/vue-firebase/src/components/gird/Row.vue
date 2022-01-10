<script setup lang="ts">
import { ref, computed } from 'vue'
const justify = ref('justify-start')
const justifys = ['start', 'center', 'end', 'around', 'between', 'evenly'].map(
    (value) => 'justify-' + value
)

const item = ref('items-start')
const items = ['itmes-start', 'items-center', 'items-end']

const rowClass = computed(() => [justify.value, item.value].join(' '))
</script>

<template>
    <q-page-container>
        <q-card>
            <q-toolbar>
                <q-toolbar-title> row </q-toolbar-title>
                <q-select v-model="justify" :options="justifys" />
                <q-select v-model="item" :options="items" />
            </q-toolbar>

            <q-card-section>
                Current option is {{ justify }} & {{ item }}
            </q-card-section>

            <div class="row" :class="rowClass">
                <div v-for="i in 7" :key="i">
                    <q-avatar
                        :size="`${i * 10 + 50}px`"
                        font-size="52px"
                        color="teal"
                        text-color="white"
                        icon="directions"
                    />
                </div>
            </div>
        </q-card>
    </q-page-container>
</template>
