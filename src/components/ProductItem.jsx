import React from 'react';
import { AppContext } from '@context/AppContext';
import '@styles/productItem.scss';
import add_to_cart from '@icons/bt_add_to_cart.svg';

const ProductItem = ({ product }) => {
    const { addToCart } = React.useContext(AppContext);

    const handleClick = item => {
        addToCart(item);
    }

    return (
        <div className='ProductItem'>
            {/*No muestra la imágenes porque en la API esta vacío ese campo */}
            <img src={product.images[0]} alt={product.title}/> 
            <div className='product-info'>
                <div>
                    <p>${product.price}</p>
                    <p>{product.title}</p>
                </div>
                <figure onClick={ () => handleClick(product) }>
                    <img src={ add_to_cart } alt='Add to cart'/>
                </figure>
            </div>
        </div>
    );
};

export { ProductItem };