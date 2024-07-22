<script setup>
import { computed } from 'vue';
import { AppState } from '../AppState.js';
import Pop from '../utils/Pop.js';
import { logger } from '../utils/Logger.js';
import { postService } from '../services/PostService.js';

const currentPage = computed(() => AppState.currentPage)
const totalPage = computed(() => AppState.totalPages)

async function changePage(pagenumber) {
    try {
        logger.log(pagenumber)
        await postService.changePage(pagenumber)
    }
    catch (error) {
        Pop.error(error);
    }
}

async function changePagev2(url) {
    try {
        logger.log(url)
        await postService.changepageV2(url)
    }
    catch (error) {
        Pop.error(error);
    }
}
</script>


<template>
    <section class="row justify-content-between my-2">
        <button :disabled="currentPage == 1" @click="changePage(currentPage - 1)" class="col-3 btn btn-primary"><i
                class="mdi mdi-arrow-left"></i>New posts</button>
        <div class="col-3">{{ currentPage }} of {{ totalPage }}</div>
        <button @click="changePage(currentPage + 1)" class="col-3 btn btn-primary"><i
                class="mdi mdi-arrow-right"></i>Old
            posts</button>
    </section>
</template>


<style lang="scss" scoped></style>