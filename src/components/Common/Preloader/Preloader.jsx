import React from 'react';
import preloader from "../../../assets/img/preloader.svg";

const Preloader = (props) => {
    return (
        <div>
            <img width="40" height="50" src={ preloader } alt=""/>
        </div>
    )
};

export default Preloader;
