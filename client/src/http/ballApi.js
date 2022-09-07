import {$host} from "./index";

export const fetchBalls = async () => {
    const {data} = await $host.get('/api/ball')
    return data
}