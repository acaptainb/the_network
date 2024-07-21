<script setup>
import { computed } from 'vue';
import { AppState } from '../AppState.js';

const account = computed(() => AppState.account)
</script>


<template>
    <!-- TODO show this content when there is an account , hide this this profile when there is not a profile -->
    <!-- <div class="text-center">
        <h1>Welcome {{ account.name }}</h1>
         <img class="rounded" :src="account.picture" alt="" /> -->
    <!-- <p>{{ account.email }}</p>
        <p>{{ account.bio }}</p>
        <p>{{ account.class }}</p>
        <p>{{ account.github }}</p>
        <p>{{ account.linkedin }}</p> -->
    <!-- <div v-if="account.graduated == true">
            <p>Graduated <i class="mdi mdi-account-school"></i></p>
        </div> -->
    <!-- <div v-else="account.graduated!= true">
            <p>not gratuated</p>
        </div> -->
    <!-- </div> -->
</template>


<style lang="scss" scoped></style>