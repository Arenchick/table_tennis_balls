import React from 'react';

const OneBallParameters = ({ballInfo}) => {
    try {
        return (
            <div className={'Ball_Page_Params'}>
                <h3 className={'Ball_Page_Params_Title'}>Характеристики:</h3>
                <div className={'Ball_Page_Parameter'}>
                    <h5 className={'Ball_Page_Parameter_Title'}>Brand:</h5>
                    <p className={'Ball_Page_Parameter_Value'}>{ballInfo.brand.value}</p>
                </div>
                <div className={'Ball_Page_Parameter'}>
                    <h5 className={'Ball_Page_Parameter_Title'}>Type:</h5>
                    <p className={'Ball_Page_Parameter_Value'}>{ballInfo.type.value}</p>
                </div>
                <div className={'Ball_Page_Parameter'}>
                    <h5 className={'Ball_Page_Parameter_Title'}>Star:</h5>
                    <p className={'Ball_Page_Parameter_Value'}>{ballInfo.star.value}</p>
                </div>
                <div className={'Ball_Page_Parameter'}>
                    <h5 className={'Ball_Page_Parameter_Title'}>Producer Country:</h5>
                    <p className={'Ball_Page_Parameter_Value'}>{ballInfo.producerCountry}</p>
                </div>
            </div>
        );
    }catch (error){
        if (!ballInfo)
            console.log('Еще не заргузилось')
        else
            console.log(error.message)
    }
};

export default OneBallParameters;