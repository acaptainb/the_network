<script setup>
import { computed, } from 'vue';
import { Post } from '../models/Post.js';
import { AppState } from '../AppState.js';
import Pop from '../utils/Pop.js';
import { postService } from '../services/PostService.js';

const account = computed(() => AppState.account)
const posts = computed(() => { AppState.profilePosts })



defineProps({
    postsProp: { type: Post, required: true }
})

async function removePost(postId) {
    try {
        const wantsToDelete = await Pop.confirm('Are you sure you want to delete your post?')
        if (!wantsToDelete) return
        await postService.deletepost(postId)
    }
    catch (error) {
        Pop.error(error);
    }
}
</script>


<template>
    <div class="row border border-3 shadow my-2 p-3">
        <div class="col-12">
            <div class="justify-content-start d-flex align-items-center">
                <div>
                    <RouterLink :to="{ name: 'Profile', params: { profileId: postsProp.creatorId } }"
                        :title="`Go to ${postsProp.creator.name}'s page.`">
                        <img class="pfp selectable" :src="postsProp.creator.picture" :alt="postsProp.creator.name">
                    </RouterLink>

                    <div v-if="account.id == postsProp.creatorId" class="col-md-2 col-4 p-2 mb-5">
                        <div class="dropdown text-center">
                            <button class="btn btn-light " type="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                <i class="mdi mdi-dots-horizontal "></i>
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item text-danger" @click="removePost(postsProp.id)"> <i
                                            class="mdi mdi-trash-can-outline "></i> Delete Post</a></li>
                            </ul>
                        </div>
                    </div>

                </div>
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