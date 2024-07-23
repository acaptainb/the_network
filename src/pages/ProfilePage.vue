<script setup>
import { computed, onMounted } from 'vue';
import Pop from '../utils/Pop.js';
import { profilesService } from '../services/ProfileService.js';
import { useRoute } from 'vue-router';
import { logger } from '../utils/Logger.js';
import { AppState } from '../AppState.js';
import { postService } from '../services/PostService.js';
import Changepage from '../components/changepage.vue';
import { adService } from '../services/AdsService.js';

const profile = computed(() => AppState.profile)

const posts = computed(() => AppState.profilePosts)
const account = computed(() => AppState.account)
const profileCoverImg = computed(() => `url(${profile.value?.coverImg})`)
const route = useRoute()

const ads = computed(() => AppState.ads)
onMounted(() => {
    const profileId = route.params.profileId
    getProfileById(profileId)
    getPostsById(profileId)
    getAds()

})
async function getProfileById(profileId) {
    try {
        await profilesService.getProfileById(profileId)
    } catch (error) {
        Pop.error(error)
    }
}
async function getAds() {
    try {
        await adService.getads()
    }
    catch (error) {
        Pop.error(error);
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
                    <p class="mt-5">{{ profile.bio }}</p>
                    <a :href="profile.github" v-if="profile.github">
                        <i class="mdi mdi-github fs-5"></i>
                    </a>
                    <a :href="profile.linkedin" v-if="profile.linkedin">
                        <i class="mdi mdi-linkedin fs-5"></i>
                    </a>
                    <p>{{ profile.class }}</p>
                    <div v-if="profile.graduated == true">
                        <p>Graduated <i class="mdi mdi-account-school"></i></p>
                    </div>
                    <div v-else="profile.graduated!= true">
                        <p>Not gratuated</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="row justify-content-between">
            <div class="col-12">
                <Changepage />
            </div>
            <div class="row">
                <div class="col-6">
                    <div class="row">
                        <div v-for="post in posts" :key="post.id" class="col-md-12 mb-6">
                            <PostsCard :postsProp="post" />
                        </div>
                    </div>
                </div>
                <div class="col-6">
                    <div class="row text-end">
                        <div v-for="ad in ads" :key="ad.title" class="col-12 my-4">
                            <img :src="ad.tall" alt="">
                        </div>
                    </div>
                </div>
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