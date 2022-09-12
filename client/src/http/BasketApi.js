import {$host} from "./index";

export const getAllBaksetBalls = async (basketId) => {
    const {data} = await $host.get('api/basketBall' , {params: {basketId}})
    return data
}

export const getAllBaksetBallsCount = async () => {
    const {data} = await $host.get('api/basketBall/count')
    return data
}

export const getOneBaksetBallCount = async (ballId) => {
    const {data} = await $host.get(`api/basketBall/count/${ballId}`)
    return data
}

export const createBasketBall = async (basketId, ballId) => {
    const {data} = await $host.post('api/basketBall', {basketId, ballId})
    return data
}

export const deleteOneBasketBall = async (basketBallId) => {
    const {data} = await $host.delete(`api/basketBall/${basketBallId}`)
    return data
}