import {makeAutoObservable} from "mobx";

export default class Parameters {
    constructor() {
        this._type = []
        this._brand = []
        this._star = []
        this._producerCountry = []
        makeAutoObservable(this)
    }

    setType(type) {
        this._type = type
    }
    setBrand(brand) {
        this._brand = brand
    }

    setStar(star) {
        this._star = star
    }

    setProducerCountry(producerCountry) {
        this._producerCountry = producerCountry
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