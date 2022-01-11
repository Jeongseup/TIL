<script setup lang="ts">
import {} from 'vue'
import { auth } from 'boot/firebase'
import { firebaseUser, useAuth } from 'src/composable/useAuth'

import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth'

const provider = new GoogleAuthProvider()
useAuth()
</script>
<template>
    <q-btn v-if="firebaseUser" round color="info">
        <q-avatar size="24px">
            <img :src="firebaseUser.photoURL || ''" alt="" />
            <q-menu>
                <q-card>
                    <q-list bordered>
                        <q-item clickable v-ripple>
                            <q-item-section avatar>
                                <q-icon color="primary" name="mdi-account" />
                            </q-item-section>
                            <q-item-section>
                                <q-item-label>이름</q-item-label>
                                <q-item-label caption>{{ firebaseUser.displayName }}</q-item-label>
                            </q-item-section>
                        </q-item>
                        <q-item clickable v-ripple>
                            <q-item-section avatar>
                                <q-icon color="primary" name="mdi-email" />
                            </q-item-section>
                            <q-item-section>
                                <q-item-label>이메일</q-item-label>
                                <q-item-label caption>{{ firebaseUser.email }}</q-item-label>
                            </q-item-section>
                        </q-item>
                    </q-list>
                    <q-card-actions align="right">
                        <q-btn color="primary" icon="mdi-logout" label="로그아웃" @click="signOut(auth)" />
                    </q-card-actions>
                </q-card>
            </q-menu>
        </q-avatar>
    </q-btn>
    <q-btn v-else round color="info" @click="signInWithPopup(auth, provider)">
        <q-avatar size="24" icon="mdi-login" />
    </q-btn>
</template>
