import React, {useState} from 'react';
import CreateBrand from "../components/UI/Admin/CreateBrand";
import CreateType from "../components/UI/Admin/CreateType";
import CreateStar from "../components/UI/Admin/CreateStar";
import CreateBall from "../components/UI/Admin/CreateBall";

const Admin = () => {
    const [brandVisible, setBrandVisible] = useState(false)
    const [typeVisible, setTypeVisible] = useState(false)
    const [deviceVisible, setDeviceVisible] = useState(false)
    return (
        <div>
                {/*<button*/}
                {/*    variant={"outline-dark"}*/}
                {/*    className="mt-4 p-2"*/}
                {/*    onClick={() => setTypeVisible(true)}*/}
                {/*>*/}
                {/*    Добавить тип*/}
                {/*</button>*/}
                {/*<button*/}
                {/*    variant={"outline-dark"}*/}
                {/*    className="mt-4 p-2"*/}
                {/*    onClick={() => setBrandVisible(true)}*/}
                {/*>*/}
                {/*    Добавить бренд*/}
                {/*</button>*/}
                {/*<button*/}
                {/*    variant={"outline-dark"}*/}
                {/*    className="mt-4 p-2"*/}
                {/*    onClick={() => setDeviceVisible(true)}*/}
                {/*>*/}
                {/*    Добавить устройство*/}
                {/*</button>*/}
                <h2>Новый брэнд мяча</h2>
                <CreateBrand />
                {/*<CreateDevice show={deviceVisible} onHide={() => setDeviceVisible(false)}/>*/}
                <h2>Новый тип мяча</h2>
                <CreateType/>
                <h2>Новое количество звезд мяча</h2>
                <CreateStar/>
                <h2>Новый мяч</h2>
                <CreateBall/>
        </div>
    );
};

export default Admin;