<script setup>
import { computed, ref } from 'vue';
import Pop from '../utils/Pop.js';
import { AppState } from '../AppState.js';
import { postService } from '../services/PostService.js';

const searchingterm = ref()
const searchingFor = computed(() => AppState.searchingFor)

async function searchPosts() {
    try {
        console.log('searching for', searchingterm.value);
        await postService.searchpost(searchingterm.value)
        searchingterm.value = ''
    }
    catch (error) {
        Pop.error(error);
    }
}
</script>


<template>
    <nav class="navbar bg-dark">
        <div class="container-fluid">
            <form @submit.prevent="searchPosts" class="d-flex" role="search">
                <input v-model="searchingterm" class="form-control me-2" type="search" placeholder="Search"
                    aria-label="Search">
                <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
        </div>
    </nav>
</template>


<style lang="scss" scoped></style>