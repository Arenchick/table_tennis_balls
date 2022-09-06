import {makeAutoObservable} from "mobx";
export default class FilterStore {
    constructor() {
        this._checkboxes = []
        makeAutoObservable(this)
    }

    setCheckbox(checkbox) {
        this._checkboxes.push(checkbox)
    }

    getCheckboxes(){
        return this._checkboxes
    }
}