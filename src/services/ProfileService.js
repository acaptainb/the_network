
import { AppState } from "../AppState.js"
import { Profile } from "../models/Profile.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class ProfilesService {

    async getProfileById(profileId) {
        AppState.profile = null
        const response = await api.get(`api/profiles/${profileId}`)
        logger.log('GOT PROFILE 🕴️', response.data)
        const profile = new Profile(response.data)
        AppState.profile = profile
    }
}

export const profilesService = new ProfilesService()