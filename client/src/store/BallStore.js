import {makeAutoObservable} from "mobx";
import itemImage from '../Assets/ItemImage.jpg'

export default class BallStore {
    constructor() {
        this._balls = [
            {id: 1, name:'asd',price: "5000 р.", image: itemImage},
            {id: 2, name:'asdasd',price: "5000 р.", image: itemImage},
            {id: 3, name:'asdasdda',price: "5000 р.", image: itemImage},
            {id: 4, name:'asdasddasda',price: "5000 р.", image: itemImage},
            {id: 5, name:'asdasddasd',price: "5000 р.", image: itemImage},
            {id: 6, name:'asdasddassssss',price: "5000 р.", image: itemImage}
        ]
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