<script setup>
import { computed } from 'vue';
import { AppState } from '../AppState.js';

const account = computed(() => AppState.account)

</script>

<template>
  <div class="about">
    <div v-if="account">
      <div class="text-center">
        <h1>Welcome {{ account.name }}</h1>
        <img class="rounded" :src="account.picture" alt="" />
        <p>{{ account.email }}</p>
        <p>{{ account.bio }}</p>
        <p>{{ account.class }}</p>
        <!-- <p>{{ account.github }}</p>
        <p>{{ account.linkedin }}</p> -->
        <a :href="account.github" v-if="account.github">
          <i class="mdi mdi-github fs-5"></i>
        </a>
        <a :href="account.linkedin" v-if="account.linkedin">
          <i class="mdi mdi-linkedin fs-5"></i>
        </a>
        <div v-if="account.graduated == true">
          <p>Graduated <i class="mdi mdi-account-school"></i></p>
        </div>
        <div v-else="account.graduated!= true">
          <p>Not gratuated</p>
        </div>
      </div>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-8">
            <AccountForm />
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <h1>Loading... <i class="mdi mdi-loading mdi-spin"></i></h1>
    </div>
  </div>
</template>

<style scoped lang="scss">
img {
  max-width: 100px;
}
</style>
