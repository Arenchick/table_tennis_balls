import {$host} from "./index";

export const fetchBalls = async (typeId,brandId,starId,producerCountryId) => {
    const {data} = await $host.get('/api/ball', {params : {
            typeId,brandId,starId,producerCountryId
        }})
    return data
}