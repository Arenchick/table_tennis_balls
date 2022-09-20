import {makeAutoObservable} from "mobx";

export default class BallStore {
    constructor() {
        this._balls = []
        this._types = []
        this._brands = []
        this._devices = []
        this._сount = 0
        this._selectedType = {}
        this._selectedBrand = {}

        makeAutoObservable(this)
    }
    setSelectedType(type) {

        this._selectedType = type
    }
    setSelectedBrand(brand) {
        this._selectedBrand = brand
    }
    setBalls(balls) {
        this._balls = balls

    }

    get balls() {
        return this._balls
    }
    get types() {
        return this._types
    }
    get brands() {
        return this._brands
    }
    get devices() {
        return this._devices
    }

    setTypes(types) {
        this._type = types
    }
    setBrands(brands) {
        this._brands = brands
    }
}