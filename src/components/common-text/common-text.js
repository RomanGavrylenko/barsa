import React from 'react';

export default function CommonText({cls, title, text, button}){
    return(
        <div className={`${cls}__info`}>
            <h3 className={`${cls}__title`}>
                {title}
            </h3>
            <p className={`${cls}__text`}>
                {text}            
            </p>
            <button className={`${cls}__button`}>
                {button}
            </button>
        </div>
    );
}