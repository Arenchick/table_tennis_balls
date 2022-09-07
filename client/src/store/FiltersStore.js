import {makeAutoObservable} from "mobx";

export default class FiltersStore {
    constructor() {
        this._type = {
            name: 'Type',
            properties: []
        }
        this._brand = {
            name: 'Brand',
            properties: [
                {id: "12452342", name: 'Hui'},
                    {id: "2235252142", name: 'Vagina'}
                ]
        }
        this._star = {
            name: 'Star',
            properties: [
                {id: "42534612", name: 'Ebaniy'},
                    {id: "221242353", name: 'Rot'}
                ]
        }
        this._producerCountry = {
            name: 'ProducerCountry',
                properties: [
                {id: "12213", name: 'Vashego'},
                    {id: "231232", name: 'Cazino'}
                ]
        }
        makeAutoObservable(this)
    }

    setType(typeProperties) {
        this._type.properties = typeProperties
    }
    setBrand(brandProperties) {
        this._brand.properties = brandProperties
    }

    setStar(starProperties) {
        this._star.properties = starProperties
    }

    setProducerCountry(producerCountryProperties) {
        this._producerCountry.properties = producerCountryProperties
    }

    get type() {
        return this._type
    }

    get brand() {
        return this._brand
    }

    get star() {
        return this._star
    }

    get producerCountry() {
        return this._producerCountry
    }
}