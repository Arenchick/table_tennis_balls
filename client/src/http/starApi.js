import {$host} from "./index";

export const fetchStars = async () => {
    const {data} = await $host.get('/api/star')
    return data
}