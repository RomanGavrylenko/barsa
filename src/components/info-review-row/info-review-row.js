import React from 'react';
import like from '../../images/svg/like.svg'
import Image from '../image/image';
import './info-review-row.css';

export default function InfoReview({time, commentCount, likeCount}){
    return(
        <>
            <div className='info__time'>
                Около {time} назад
            </div>
            <div className='info__dot'/>
            <div className='info__comment'>
                {commentCount} комментариев
            </div>
            <div className='info__like'>
                
                <Image  src={like} 
                        cls = 'info'
                        alt='like'/>{likeCount}
            </div>
        </>
    );
}