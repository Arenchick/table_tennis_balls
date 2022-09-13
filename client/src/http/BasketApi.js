import {$host} from "./index";

export const getAllBaksetBalls = async (basketId) => {
    const {data} = await $host.get('api/basketBall' , {params: {basketId}})
    return data
}

export const getAllBaksetBallsCount = async () => {
    const {data} = await $host.get('api/basketBall/count')
    return data
}

export const getOneBasketBallCount = async (ballId) => {
    const {data} = await $host.get('api/basketBall/count', {params: {ballId}})
    return data
}

export const createBasketBall = async (basketId, ballId) => {
    const {data} = await $host.post('api/basketBall', {basketId, ballId})
    return data
}

export const changeBasketBallCount = async (id, count) => {
    const {data} = await $host.put(`api/basketBall/${id}`,{count})
    return data
}

export const deleteOneBasketBall = async (id) => {
    const {data} = await $host.delete('api/basketBall', {params: {id}})
    return data
}