import {$authHost, $host} from "./index";

export const fetchAboutText = async () => {
    const {data} = await $host.get('/api/text/about')
    return data
}

export const fetchContactText = async () => {
    const {data} = await $host.get('/api/text/contact')
    return data
}

export const changeAboutText = async (text) => {
    const {data} = await $host.post('/api/text/about', {text})
    return data
}

export const changeContactText = async (text) => {
    const {data} = await $host.post('/api/text/contact', {text})
    return data
}
