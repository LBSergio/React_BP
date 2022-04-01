import React from 'react';
import { AppContext } from '@context/AppContext';
import '@styles/orderItem.scss';
import close from '@icons/icon_close.png';

const OrderItem = ({ product, indexValue }) => {
    const { removeFromCart } = React.useContext(AppContext);

    const handleRemove = index => {
        removeFromCart(index);
    };

    return (
        <div className='OrderItem'>
            <figure>
                <img src={ product.images[0] } alt={ product.title }/>
            </figure>
            <p>{ product.title }</p>
            <p>${ product.price }</p>
            <img 
                className='OrderItem-img-close'
                src={ close } 
                alt='Close' 
                onClick={ () => handleRemove(indexValue) }
            />
        </div>
    );
};

export { OrderItem };