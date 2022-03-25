import React from 'react';
import './Toy.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Toy = ({ toy }) => {
    const { name, image, price, id } = toy
    console.log(typeof toy);
    return (
        <div className='single-product'>
            <div className='toy-image'>
                <img src={image} alt={name} />
            </div>
            <div className='toy-info'>
                <p className='toy-name'>{name}</p>
                <p>$ {price}</p>
            </div>
            <div className='cart-btn'>
                <button>
                    <p>Add Cart</p>
                    <FontAwesomeIcon icon={faShoppingCart} />
                </button>
            </div>
        </div>


    );
};

export default Toy;