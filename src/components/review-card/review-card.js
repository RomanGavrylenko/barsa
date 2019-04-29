import React from 'react';
import ImagesRow from '../images-row/images-row';
import InfoReview from '../info-review-row/info-review-row'
import './review-card.css'

export default function ReviewCard(props){
    const { name, photo, text, images, click,
            time, likeCount, commentCount, last } = props;

    return(
        <div className='review-card'>
            <div className='review-card__user'>
                <figure className='review-card__picture' >
                    <img className='review-card__picture-body' 
                         src={photo}
                         alt='user-avatar'/>
                </figure>
                <h3 className ='review-card__name'>
                    {name}
                </h3>
            </div>
            <div className='review-card__body'>
                <h3 className='review-card__title'>
                    <span className='review-card__color'>Барселона</span> - о городе
                    </h3>
                <p className='review-card__text'>
                    {text}
                </p>
            </div>
            <div className='review-card__images'>
                <ImagesRow
                    images={images}
                    last={last}
                    click={(e)=>click(images, e)} />
            </div>
            <div className='review-card__info'>
                <InfoReview time={time} 
                            commentCount={commentCount} 
                            likeCount={likeCount}/>
            </div>
        </div>
    );
}