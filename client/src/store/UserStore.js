import {makeAutoObservable} from "mobx";

export default class UserStore {
    constructor() {
        this._isAuth = false
        this._user = {}
        makeAutoObservable(this)
    }

    setIsAuth(bool) {
        this._isAuth = bool
    }
    setUser(user) {
        console.log(user)
        this._user = user
    }

    get isAuth() {
        console.log(this._isAuth)
        console.log(this._user)
        return this._isAuth
    }
    get user() {

        return this._user
    }
}