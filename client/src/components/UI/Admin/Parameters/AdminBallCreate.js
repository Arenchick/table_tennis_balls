import React, {useState} from 'react';
import TennisInput from "../../Input/TennisInput";
import GreenButton from "../../Buttons/GreenButton";

const AdminBallCreate = () => {

    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [count, setCount] = useState(0)
    const [image, setImage] = useState('')

    return (
        <div>
            <TennisInput placeholder='Название'
                         type='text'
                         value={name}
                         onChange={e => setName(e.target.value)}/>
            <TennisInput placeholder='Цена'
                         type='number'
                         value={price}
                         onChange={e => setPrice(e.target.value)}/>
            <TennisInput placeholder='Кол-во'
                         type='number'
                         value={count}
                         onChange={e => setCount(e.target.value)}/>
            <TennisInput placeholder='Изображение'
                         type="file"
                         value={image}
                         onChange={e => setImage(e.target.value)}/>
            <GreenButton text='Добавить' click={(event)=>{console.log('Add')}}/>
        </div>
    );
};

export default AdminBallCreate;