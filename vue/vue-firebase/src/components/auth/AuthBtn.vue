<script setup lang="ts">
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import firebaseConfig from '../../../firebaseConfig.js'
import {
    getAuth,
    connectAuthEmulator,
    GoogleAuthProvider,
    signInWithPopup
} from 'firebase/auth'

initializeApp(firebaseConfig)

const auth = getAuth()
connectAuthEmulator(auth, 'http://localhost:9099')

auth.useDeviceLanguage()

const provider = new GoogleAuthProvider()
</script>
<template>
    <q-btn round color="info" @click="signInWithPopup(auth, provider)">
        <q-avatar size="24" icon="mdi-login" />
    </q-btn>
</template>
