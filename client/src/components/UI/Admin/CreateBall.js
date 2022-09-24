import React, {useContext, useEffect, useState} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../../index";
import {fetchTypes} from "../../../http/typeApi";
import {fetchBrands} from "../../../http/brandApi";
import TennisInput from "../Input/TennisInput";
import {createBall} from "../../../http/ballApi";

const CreateBall = observer(() => {
    const {ballStore} = useContext(Context)
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [file, setFile] = useState(null)
    const [count, setCount] = useState(0)

    useEffect(() => {
        fetchTypes().then(data => ballStore.setTypes(data))
        fetchBrands().then(data => ballStore.setBrands(data))
    }, [])
    const selectFile = e => {
        setFile(e.target.files[0])
    }

    const addDevice = () => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('price', `${price}`)
        formData.append('count', `${count}`)
        formData.append('img', file)
        // formData.append('ballInfoId', JSON.stringify(info))
        createBall(formData)
    }
    console.log(ballStore.types)
    return (
        <div>
            {/*селекты нахуй не нужны просто хотел понять как взаимодействовать с балинфо, хуй знает пока что))*/}
            <select>

                {ballStore.types.map(type =>
                    <option
                        onClick={() => ballStore.setSelectedType(type)}
                        key={type.id}
                    >
                        {type.name}
                    </option>
                )}

            </select>
            <select >

                {ballStore.brands.map(brands =>
                    <option
                        onClick={() => ballStore.setSelectedBrand(brands)}
                        key={brands.id}
                    >
                        {brands.name}
                    </option>
                )}

            </select>
            <TennisInput value={name}
                         onChange={e => setName(e.target.value)}

                         placeholder="Введите название устройства" />

            <TennisInput value={price}
                         onChange={e => setPrice(Number(e.target.value))}

                         placeholder="Введите стоимость устройства"
                         type="number"/>
            <TennisInput type="file" onChange={selectFile}/>

            <button
                variant={"outline-dark"}
                // onClick={addInfo}
            >
                Добавить новое свойство
            </button>
        </div>
    );
});

export default CreateBall;