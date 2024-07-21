import { AppState } from "../AppState.js"
import { Post } from "../models/Post.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class PostService {
    changepageV2(url) {
        throw new Error('Method not implemented.')
    }
    changePage(pagenumber) {
        throw new Error('Method not implemented.')
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