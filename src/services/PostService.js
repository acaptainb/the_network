import { AppState } from "../AppState.js"
import { Post } from "../models/Post.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class PostService {
    async changepageV2(url) {
        const response = await api.get(url)
        console.log('url of changepage', response.data);
        const posts = response.data.posts.map(postsData => new Post(postsData))
        AppState.posts = posts
        AppState.currentPage = response.data.page
    }
    async changePage(pagenumber) {
        const response = await api.get(`api/posts?page=${pagenumber}`)
        console.log("posts page", response.data)
        const posts = response.data.posts.map(postsData => new Post(postsData))
        AppState.posts = posts
        AppState.currentPage = response.data.page
        // AppState.totalPages = response.total_Pages

    }
    async createPost(postData) {
        const response = await api.post("api/posts", postData)
        logger.log('creating posts', response.data)
        const newPost = new Post(response.data)
        AppState.posts.push(newPost)
    }
    async getPosts() {
        const response = await api.get("api/posts")
        logger.log('getting posts', response.data)
        const posts = response.data.posts.map(pojo => new Post(pojo))
        AppState.posts = posts
        AppState.currentPage = response.data.page
    }

    async getPostsByProfileId(profileId) {
        AppState.profilePosts = []
        const response = await api.get(`api/posts?creatorId=${profileId}`)
        logger.log('GOT PROJECTS BY PROFILE ID🕴️🖼️🖼️🖼️', response.data)
        const posts = response.data.posts.map(pojo => new Post(pojo))
        AppState.profilePosts = posts
    }

}
export const postService = new PostService()