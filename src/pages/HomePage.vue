<script setup>
import { computed, onMounted, ref } from 'vue';
import { postService } from '../services/PostService.js';
import Pop from '../utils/Pop.js';
import { AppState } from '../AppState.js';
import { adService } from '../services/AdsService.js';
import Changepage from '../components/changepage.vue';
const posts = computed(() => AppState.posts)
const ads = computed(() => AppState.ads)
onMounted(() => {
  getPost()
  getAds()
})
async function getAds() {
  try {
    await adService.getads()
  }
  catch (error) {
    Pop.error(error);
  }
}
const postData = ref({
  body: '',
  imgUrl: ''
})

async function createPost() {
  try {
    await postService.createPost(postData.value)
    postData.value = {
      body: '',
      imgUrl: ''
    }
  }
  catch (error) {
    Pop.error(error);
  }
}

async function getPost() {
  try {
    await postService.getPosts()
  }
  catch (error) {
    Pop.error(error);
  }
}
</script>

<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-3">
        <ProfileCard />
      </div>
      <div class="col-md-6">
        <div class="row">
          <form @submit.prevent="createPost()">
            <div class="form-floating mb-3">
              <input v-model="postData.body" type="text" class="form-control" id="body" placeholder="Create port..."
                required maxlength="500">
              <label for="body">Create post</label>
              <input v-model="postData.imgUrl" type="url" class="form-control" id="imgUrl" placeholder="Create img..."
                required maxlength="500">
            </div>
            <div class="text-end">
              <button class="btn btn-dark" type="submit">Submit</button>
            </div>
          </form>
          <div v-for="post in posts" :key="post.id" class="col-12">
            <PostsCard :postsProp="post" />
          </div>
        </div>
      </div>
      <div class="col-3">
        <div class="row">
          <div v-for="ad in ads" :key="ad.title" class="col-12 my-4">
            <img :src="ad.tall" alt="">
          </div>
        </div>
      </div>
    </div>
    <Changepage />
  </div>
</template>

<style scoped lang="scss"></style>
