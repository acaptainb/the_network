<script setup>
import { computed, onMounted } from 'vue';
import Pop from '../utils/Pop.js';
import { profilesService } from '../services/ProfileService.js';
import { useRoute } from 'vue-router';
import { logger } from '../utils/Logger.js';
import { AppState } from '../AppState.js';
import { postService } from '../services/PostService.js';

const profile = computed(() => AppState.profile)

const posts = computed(() => AppState.profilePosts)

const profileCoverImg = computed(() => `url(${profile.value?.coverImg})`)
const route = useRoute()
onMounted(() => {
    const profileId = route.params.profileId
    getProfileById(profileId)
    getPostsById(profileId)
})
async function getProfileById(profileId) {
    try {
        await profilesService.getProfileById(profileId)
    } catch (error) {
        Pop.error(error)
    }
}

async function getPostsById(profileId) {
    try {
        await postService.getPostsByProfileId(profileId)
    }
    catch (error) {
        Pop.error(error);
    }
}

</script>


<template>
    <div v-if="profile" class="container">
        <section class="row border">
            <div class="col-12">
                <div class="justify-content-start d-flex cover-img ">
                    <img :src="profile.picture" :alt="profile.name" class="profile-img rounded-circle pt-5 px-4">
                    <span>
                        <h1>
                            {{ profile.name }}
                        </h1>
                    </span>
                    <div class="justify-content-between">
                        <span>

                        </span>
                    </div>
                </div>
                <div class="pt-5 mt-5">
                    <p>{{ profile.bio }}</p>
                    <p>{{ profile.github }}</p>
                    <p>{{ profile.class }}</p>
                    <p>{{ profile.linkedin }}</p>
                </div>
            </div>
        </section>
        <section class="row">
            <div v-for="post in posts" :key="post.id" class="col-md-6 mb-3">
                <PostsCard :postsProp="post" />
            </div>
        </section>
    </div>
</template>


<style lang="scss" scoped>
.profile-img {
    height: 35.6vh;
}

.cover-img {
    height: 20vh;
    background-image: v-bind(profileCoverImg);
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
}
</style>