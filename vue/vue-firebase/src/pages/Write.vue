<script setup lang="ts">
import { firebaseUser, isSigned } from 'src/composable/useAuth'
import {} from 'vue'
</script>
<template>
    <q-page padding>
        <q-card class="my-card">
            <q-card-section>
                <div class="text-h6">Our Changing Planet</div>
                <div class="text-subtitle2">by John Doe</div>
            </q-card-section>
            <q-card-section>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </q-card-section>
        </q-card>

        <q-page-sticky
            v-if="isSigned"
            position="bottom-right"
            :offset="[18, 18]"
            expand
        >
            <q-btn>WRITE {{ firebaseUser?.email }}</q-btn></q-page-sticky
        >
    </q-page>
</template>
