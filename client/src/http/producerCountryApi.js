import {$host} from "./index";

export const fetchProducerCountries = async () => {
    const {data} = await $host.get('/api/producerCountry')
    return data
}