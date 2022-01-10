<script setup lang="ts">
import AuthBtn from 'components/auth/AuthBtn.vue'
</script>
<template>
    <q-layout view="hHr LpR lFf" :container="false">
        <q-header v-model="header" reveal elevated bordered></q-header>
        <q-toolbar class="bg-purple text-white">
            <q-btn flat round dense icon="assignment_ind" />
            <q-toolbar-title> Toolbar </q-toolbar-title>
            <q-btn flat round dense icon="apps" class="q-mr-xs" />
            <q-btn flat round dense icon="more_vert" />
            <AuthBtn />
        </q-toolbar>
        <q-page-container>
            <router-view />
        </q-page-container>
    </q-layout>
</template>
