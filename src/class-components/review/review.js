import React, { Component } from 'react';
import ReviewCard from '../../components/review-card/review-card';
import { cardData } from '../../data/card-data'
import './review.css';
import ImagePopup from '../../portals/image/images-popup';

export default class Review extends Component {
    constructor(props){
        super(props);

        this.car = React.createRef();

        this.state = {
            active: 0,
            isOpen: false,
            imgs: null,
            target: null
        }
    }

    //функция для получения карусели с карточками
    //count ограничевает кол-во фото в ряду
    getCarousel = (data, click, count) =>{
        return data.map((item)=>{
            return <ReviewCard key={item.id} {...item} click={click} last={count}/>
        })
    }

    //функция для получения точек(индикаторов переключения карусели)

    getNavigation = (count, handler) => {
        let row = [];
        let i = 0;
        while(i<count){

            //определяем класс для единицы навигации(точки)
            let cls;
            if(i === this.state.active){
                cls = 'review__navigation-item review__navigation-item_active'
            } else { 
                cls = 'review__navigation-item';
            }
            let item = <div key={i} 
                            className={cls} 
                            data-count={i}
                            onClick={handler}/>;
            row.push(item);
            i++;
        }
        return row
    }

    handleNav = (e) => {
        //count - для определения отступа,  baseStep - базовый шаг
        const count = e.currentTarget.dataset.count
        const baseStep = 200;
        
        this.car.current.style.marginLeft = (baseStep*count)*-1 + 'px';

        //убираем active class from non-active nav button and
        let parent = e.currentTarget.parentElement;
        let children = parent.children;
        for( let item of children){
            if(item.dataset.count !== count){
                item.className = 'review__navigation-item'
            } else {
                item.className = 'review__navigation-item review__navigation-item_active';
            }
        }
        
        this.setState({
            active: count
        })
    }

    //открываем модалку с картинками и галереей
    handleImage = ( imgs, e) => {
        const target = e.currentTarget.dataset.item;

        this.setState({
            isOpen: true,
            imgs,
            target
        })
    }

    //закроем модалку с картинками и галереей
    closeImage = () => {
        this.setState({
            isOpen: false,
            imgs: null,
            target: null
        })
    }

    render(){

        const { isOpen, imgs, target } = this.state;

        return(
            <section className='review'>
                <h3 className='review__title'>
                    Отзывы о Барселоне
                </h3>
                <div className='review__carousel-wrapper'>
                    <div className='review__carousel' ref={this.car}>
                        {this.getCarousel(cardData, this.handleImage, 3)}
                    </div>
                </div>
                <div className='review__buttons'>
                    <button className='review__all-buton'>
                        Все отзывы
                    </button>
                    <div className='review__navigation'>
                        {this.getNavigation(6, this.handleNav)}
                    </div>    
                </div>
                { isOpen && 
                    <ImagePopup 
                        images={imgs} 
                        defaultTarget={target} 
                        closeModal={this.closeImage} />
                }    
            </section>
        );
    }
}