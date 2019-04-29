import React from 'react';
import './image-row.css';

export default function ImagesRow({images, click, last}){

    //перебираем массив с фото. В зависимости от last параметра
    //задаем фото с темным фоном и указанием доп. цифр
    const row = images.map((item, i) => {

        if(last && i === last ){
            let count = images.length - (last+1);
            let cls = count>0 ? 'image-row__picture image-row__add' : 'image-row__picture';
            return (
                <figure className={cls}
                        key={i} 
                        data-item={i}
                        onClick={click} >
                    <img  src={item} alt='amazing'/>
                    { count>0 &&
                        <div className = 'image-row__count'>
                            +{count}
                        </div>
                    }
                </figure>
            );
        }

        if(last && i > last) return 

        return (
            <figure className='image-row__picture' 
                    key={i} 
                    data-item={i}
                    onClick={click} >
                <img  src={item} alt='amazing'/>
            </figure>
        );
    })

    return  <>
                {row}
            </>
}