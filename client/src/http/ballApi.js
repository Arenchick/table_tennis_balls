
import jwt_decode from "jwt-decode";
import {$host} from "./index";


// export const createType = async (type) => {
//     const {data} = await $authHost.post('api/type', type)
//     return data
// }

export const fetchTypes = async () => {
    const {data} = await $host.get('api/type')
    return data
}
//
// export const createBrand = async (brand) => {
//     const {data} = await $authHost.post('api/brand', brand)
//     return data
// }

export const fetchBrands = async () => {
    const {data} = await $host.get('api/brand', )
    return data
}

// export const createDevice = async (device) => {
//     const {data} = await $authHost.post('api/device', device)
//     return data
// }

export const fetchDevices = async (typeId, brandId, page, limit= 5) => {
    const {data} = await $host.get('api/ball', {params: {
            typeId, brandId, page, limit
        }})
    return data
}

export const fetchOneBall = async (id) => {
    const {data} = await $host.get('api/ball/' + id)
    return data
}
