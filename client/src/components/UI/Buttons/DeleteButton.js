import React from 'react';

const DeleteButton = ({click}) => {
    return (
        <div onClick={click}
             className={'Delete_Button'}>
        X
        </div>
    );
};

export default DeleteButton;