import React, {useState} from 'react';
import BallItem from "../Balls/BallItem";
import DeleteButton from "../Buttons/DeleteButton";

const BasketBallItem = ({basketBall, deleteBasketBall, changeCount, select, unselect}) => {

    const [inputQuery, setInputQuery] = useState(basketBall.count)

    const selectBall = (checked) => {
        if (checked){
            select(basketBall)
        }
        else {
            unselect(basketBall)
        }
    }

    const deleteBall = () => {
        deleteBasketBall(basketBall.id)
    }

    return (
        <div className={'Basket_Ball_Item'}>
            <label>
                <input className={'Filter_Input'} type={'checkbox'} name={basketBall.id} value={'da'} defaultChecked={true} onChange={(event)=>{selectBall(event.target.checked)}}/>
                <span className={'Filter_Input_Span'}></span>
            </label>
            <BallItem ball={basketBall.ball} showBaksetButton={false}/>
            <div>
                <DeleteButton click={deleteBall} />
                {/*<button onClick={() => {}}>Del</button>*/}
                <input defaultValue={inputQuery} onChange={(event) => {setInputQuery(event.target.value)}}/>
                <button onClick={() => {changeCount(basketBall.ball.id,inputQuery)}}>Change</button>
            </div>
        </div>
    );
};

export default BasketBallItem;