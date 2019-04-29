import React from 'react';
import ReactDOM from 'react-dom';
import Image from '../../components/image/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import './images-popup.css';
import GalleryRow from '../../components/gallery-row/gallery-row';
import { updateImageName } from '../../services/update-image-name';

export default class ImagePopUp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            target: 0,
            position: 0
        }

        this.row = React.createRef();
    }

    componentDidMount(){
        this.setState({
            target: this.props.defaultTarget
        })
    }

    componentDidUpdate(props){
        if(props.defaultTarget !== this.props.defaultTarget){
            this.setState({
                target: this.props.defaultTarget
            })
        }
    }
    //изменение изображения по клику
    handleClick = (e) =>{
        console.log( e.target)
        this.setState({
            target: e.currentTarget.dataset.item
        })
    }
    //прокрутка полосы с изображениями при переполнении
    handleRow = (e, elem ) => {
        let target = e.currentTarget.dataset.direction;
        let step = 100;
        if(target === 'left') {
            
            let position = this.state.position - step;
            let elemWidth = elem.getBoundingClientRect().width;
            let parentWidth = elem.parentElement.clientWidth 
            position =  Math.max(position, - ( elemWidth - parentWidth));
            elem.style.left = position + 'px';
            this.setState({
                position
            })
        }
        if(target === 'right'){
            let position = this.state.position + step;
            
            position = Math.min(position, 0)
            elem.style.left = position + 'px';
            this.setState({
                position
            })
        }
    }

    render(){

        const { images, closeModal } =this.props;
        const { target } = this.state;
    
        let curentImage = updateImageName(images[target], 'http://localhost:3000/images/big/')
       
        return (
            ReactDOM.createPortal(
                <div className='image-popup__wrapper'>
                    <div className='image-popup'>
                        <Image cls='image-popup' src={curentImage} alt='cool' />
                        <div className='image-popup__row'  >
                            <GalleryRow images={images} click={this.handleClick}  ref={this.row}/>
                        </div>
                        <FontAwesomeIcon
                            icon={faChevronRight}
                            size='1x'
                            className='image-popup__right'
                            data-direction='right'
                            onClick={(e)=>this.handleRow(e, this.row.current)} />
                        <FontAwesomeIcon
                            icon={faChevronLeft}
                            size='1x'
                            className='image-popup__left'
                            data-direction='left'
                            onClick={(e)=>this.handleRow(e, this.row.current)}/>
                        <FontAwesomeIcon
                            icon={faTimes}
                            size='2x'
                            color='grey'
                            onClick={closeModal}
                            className='image-popup__close'
                        />
                    </div>
                </div>, document.body
            )
        );
    }
    
}