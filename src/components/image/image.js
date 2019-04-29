import React from 'react';

export default function Image({cls, src, alt, ...other}){
    return(
        <figure className={`${cls}__picture`} >
            <img className={`${cls}__picture-body`} 
                 src={src}
                 alt={alt}
                 data-item={other.item}
                 onClick={other.click}/>
        </figure>
    );
}