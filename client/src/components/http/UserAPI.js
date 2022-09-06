import {
    // $authHost,
    $host} from "./index";
import jwt_decode from "jwt-decode";

export const registration = async (name, email, password, telephone) => {
    const {data} = await $host.post('api/user/registration', {email, password, role: 'user'})
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const login = async (email, password) => {
    const {data} = await $host.post('api/user/login', {email, password})
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const check = async () => {
    const {data} = await $host.get('api/user/auth' )
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}
