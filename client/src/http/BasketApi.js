import {$authHost} from "./index";

export const getAllBasketBalls = async (basketId) => {
    const {data} = await $authHost.get('api/basketBall' , {params: {basketId}})
    return data
}

export const getAllBaksetBallsCount = async () => {
    const {data} = await $authHost.get('api/basketBall/count')
    return data
}

export const getOneBasketBallCount = async (basketId, ballId) => {
    const {data} = await $authHost.get('api/basketBall/count', {params: {basketId,ballId}})
    return data
}

export const createBasketBall = async (basketId, ballId) => {
    const {data} = await $authHost.post('api/basketBall', {basketId, ballId})
    return data
}

export const changeBasketBallCount = async (basketId ,ballId, count) => {
    const {data} = await $authHost.put(`api/basketBall/${basketId}`,{ballId,count})
    return data
}

export const deleteOneBasketBall = async (id) => {
    const {data} = await $authHost.delete('api/basketBall', {params: {id}})
    return data
}