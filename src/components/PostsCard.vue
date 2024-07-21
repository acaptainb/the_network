<script setup>
import { Post } from '../models/Post.js';

defineProps({
    postsProp: { type: Post, required: true }
})
</script>


<template>
    <div class="row border border-3 shadow my-2 p-3">
        <div class="col-12">
            <div class="justify-content-start d-flex align-items-center">
                <RouterLink :to="{ name: 'Profile', params: { profileId: postsProp.creatorId } }"
                    :title="`Go to ${postsProp.creator.name}'s page.`">
                    <img class="pfp selectable" :src="postsProp.creator.picture" :alt="postsProp.creator.name">
                </RouterLink>
                <!-- <img class="img-fluid rounded-circle pfp" :src="postsProp.creator.picture" -->
                <!-- :alt="postsProp.creator.name"> -->
                <span class="mx-3">
                    <h2>{{ postsProp.creator.name }}</h2>
                    <p>{{ postsProp.createdAt.toLocaleString() }}</p>
                </span>
            </div>
            <div class="p-3">
                <p>{{ postsProp.body }}</p>
            </div>
            <div>
                <img class="img-fluid" :src="postsProp.imgUrl" :alt="postsProp.body">
            </div>
            <div class="text-end">
                <i class="mdi mdi-heart"></i>
                <p>{{ postsProp.likes.length }}</p>
            </div>
        </div>
    </div>

</template>


<style lang="scss" scoped>
.pfp {
    height: 9dvh;
    object-fit: cover;
    object-position: center;
}
</style>