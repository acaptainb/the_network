import { AppState } from "../AppState.js"
import { Ads } from "../models/Ads.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class AdsService {
    async getads() {
        const response = await api.get("api/ads")
        logger.log('getting ads', response.data)
        const ads = response.data.map(pojo => new Ads(pojo))
        AppState.ads = ads
    }

}
export const adService = new AdsService()