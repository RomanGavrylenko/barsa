import React from 'react';
import Image from '../image/image';
import './gallery-row.css';

const GalleryRow = React.forwardRef(
    ({ images, click }, ref) => {

        const row = images.map((item, i) => {
            return <Image src={item}
                          cls='gallery'
                          alt='photo'
                          click={click}
                          item={i}
                          key={i} />
        })

        return (
            <div className='gallery-row' ref={ref}>
                {row}
            </div>
        );
    }
)

export default GalleryRow;