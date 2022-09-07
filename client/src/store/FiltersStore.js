import {makeAutoObservable} from "mobx";

export default class FiltersStore {
    constructor() {
        this._type = {
            name: 'Type',
            properties: [],
            allSelectedId: [],
            setSelectedId : (id) => {
                this._type.allSelectedId.push(id)
            },
            removeSelectedId : (id) => {
                this._type.allSelectedId.remove(id)
            }
        }
        this._brand = {
            name: 'Brand',
            properties: [],
            allSelectedId: [],
            setSelectedId : (id) => {
                this._brand.allSelectedId.push(id)
                console.log(this._brand.allSelectedId)
            },
            removeSelectedId : (id) => {
                this._brand.allSelectedId.remove(id)
                console.log(this._brand.allSelectedId)
            }
        }
        this._star = {
            name: 'Star',
            properties: [],
            allSelectedId: [],
            setSelectedId : (id) => {
                this._star.allSelectedId.push(id)
            },
            removeSelectedId : (id) => {
                this._star.allSelectedId.remove(id)
            }
        }
        this._producerCountry = {
            name: 'ProducerCountry',
            properties: [],
            allSelectedId: [],
            setSelectedId : (id) => {
                this._producerCountry.allSelectedId.push(id)
            },
            removeSelectedId : (id) => {
                this._producerCountry.allSelectedId.remove(id)
            }
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