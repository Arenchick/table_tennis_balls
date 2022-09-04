import {makeAutoObservable} from "mobx";

export default class BallStore {
    constructor() {
        this._balls = []
        this._ballsInfo = []
        makeAutoObservable(this)
    }

    setBalls(balls) {
        this._balls = balls
    }
    setBallsInfo(ballsInfo) {
        this._ballsInfo = ballsInfo
    }

    get balls() {
        return this._balls
    }
    get ballsInfo() {
        return this._ballsInfo
    }
}