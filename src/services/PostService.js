import { AppState } from "../AppState.js"
import { Post } from "../models/Post.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class PostService {
    async userInLike(post) {

    }

    async likeposts(postId) {
        const res = await api.post(`/api/posts/${postId}/like`)
        const postIndex = AppState.posts.findIndex(p => p.id == res.data.id)
        AppState.posts[postIndex].likeIds = res.data.likeIds
    }
    async deletepost(postId) {
        const response = await api.delete(`api/posts/${postId}`)
        console.log('post destroyed');
        const postIndex = AppState.posts.findIndex(post => post.id == postId)
        if (postIndex == -1) throw new Error("You messed up on findIndex,")
        AppState.posts.splice(postIndex, 1)
    }
    async searchpost(searchingFor) {
        const response = await api.get(`api/posts?query=${searchingFor}`)
        console.log('search resuls', response.data);
        const searched = response.data.posts.map(searchData => new Post(searchData))
        AppState.searchingFor = searchingFor
        AppState.posts = searched
        AppState.currentPage = response.data.page
        AppState.totalPages = response.data.totalPages

    }
    async changePage(pagenumber) {
        const response = await api.get(`api/posts?page=${pagenumber}`)
        console.log("posts page", response.data)
        const posts = response.data.posts.map(postsData => new Post(postsData))
        AppState.posts = posts
        AppState.currentPage = response.data.page
        AppState.totalPages = response.data.totalPages

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
        AppState.totalPages = response.data.totalPages
    }

    async getPostsByProfileId(profileId) {
        AppState.profilePosts = []
        const response = await api.get(`api/posts?creatorId=${profileId}`)
        logger.log('GOT PROJECTS BY PROFILE ID🕴️🖼️🖼️🖼️', response.data)
        const posts = response.data.posts.map(pojo => new Post(pojo))
        AppState.profilePosts = posts
        AppState.currentPage = response.data.page
        AppState.totalPages = response.data.totalPages
    }

}
export const postService = new PostService()