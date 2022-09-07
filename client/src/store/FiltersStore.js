import {makeAutoObservable} from "mobx";

export default class FiltersStore {
    constructor() {
        this._type = {
            name: 'Type',
            properties: [],
            selectedId: 0,
            setSelectedId : (id) => {
                this._type.selectedId = id
            }
        }
        this._brand = {
            name: 'Brand',
            properties: [],
            setSelectedId : (id) => {
                this._brand.selectedId = id
            }
        }
        this._star = {
            name: 'Star',
            properties: [],
            setSelectedId : (id) => {
                this._star.selectedId = id
            }
        }
        this._producerCountry = {
            name: 'ProducerCountry',
            properties: [],
            setSelectedId : (id) => {
                this._producerCountry.selectedId = id
            }
        }
        makeAutoObservable(this)
    }

    setType(typeProperties) {
        this._type.properties = typeProperties
    }

    setTypeSelectedId(id) {
        this._type.selectedId = id
    }

    get typeSelectedId(){
        return this._type.selectedId
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