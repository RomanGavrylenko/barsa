import React from 'react';
import './head-block.css';
import Image from '../image/image';
import CommonText from '../common-text/common-text';


export default function HeadBlock({photo, about}){

    const { title, text, button  } = about;

    return(
        <section className='head'>
            <Image  src={photo} 
                    cls='head'
                    alt='Cathedral'/>
            <CommonText title={title}
                        text={text}
                        button={button}
                        cls='head' />
        </section>    
    );
}